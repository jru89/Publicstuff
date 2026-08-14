import { buildExam } from "../lib/shuffle.js";

const QUESTION_SECONDS = 15;
const PASS_SCORE = 41;
const ADVANCE_DELAY_MS = 500;

/**
 * Renders one full practice exam into `container`.
 * `options.timerEnabled` (default true) turns the 15s countdown on/off.
 * `options.showLiveScore` (default false) shows a running score in the header.
 * Calls `onFinish(result)` once all questions are answered/timed out.
 * Calls `onExit()` if the user confirms they want to quit mid-exam.
 * Returns a cleanup function the caller should invoke if navigating away
 * mid-exam (stops the running timer).
 */
export function renderExam(container, questionBank, options, onFinish, onExit) {
  const timerEnabled = options?.timerEnabled ?? true;
  const showLiveScore = options?.showLiveScore ?? false;

  const exam = buildExam(questionBank);
  let index = 0;
  let deadline = 0;
  let tickId = null;
  let advanceId = null;
  let locked = false;
  let selectedIndex = null;
  const answers = [];

  function cleanup() {
    if (tickId) clearInterval(tickId);
    if (advanceId) clearTimeout(advanceId);
  }

  function showQuestion() {
    cleanup();
    if (index >= exam.length) {
      finish();
      return;
    }
    locked = false;
    selectedIndex = null;
    const q = exam[index];
    renderQuestionUI(q);

    if (timerEnabled) {
      deadline = Date.now() + QUESTION_SECONDS * 1000;
      updateTimer();
      // Ticks every 250ms and recomputes remaining time from the wall-clock
      // deadline (not a decrementing counter), so throttled/backgrounded
      // tabs still enforce the real 15-second limit instead of drifting.
      tickId = setInterval(() => {
        if (Date.now() >= deadline) {
          handleTimeout();
        } else {
          updateTimer();
        }
      }, 250);
    }
  }

  function handleTimeout() {
    if (locked) return;
    locked = true;
    clearInterval(tickId);
    const q = exam[index];
    // If an option was picked but not yet confirmed when time ran out,
    // honor that pick rather than discarding it — the learner did decide,
    // they just didn't click Confirm in time.
    if (selectedIndex !== null) {
      const isCorrect = selectedIndex === q.correct;
      answers.push({ question: q, chosenIndex: selectedIndex, timedOut: false, correct: isCorrect });
      markLocked(selectedIndex, false);
    } else {
      answers.push({ question: q, chosenIndex: null, timedOut: true, correct: false });
      markLocked(null, true);
    }
    advanceId = setTimeout(next, ADVANCE_DELAY_MS);
  }

  function handlePick(chosenIndex) {
    if (locked) return;
    selectedIndex = chosenIndex;
    const optionsEl = container.querySelector("#exam-options");
    optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.classList.toggle("option-selected", Number(btn.dataset.index) === chosenIndex);
    });
    const confirmBtn = container.querySelector("#confirm-btn");
    if (confirmBtn) confirmBtn.disabled = false;
  }

  function handleConfirm() {
    if (locked || selectedIndex === null) return;
    locked = true;
    clearInterval(tickId);
    const q = exam[index];
    const isCorrect = selectedIndex === q.correct;
    answers.push({ question: q, chosenIndex: selectedIndex, timedOut: false, correct: isCorrect });
    markLocked(selectedIndex, false);
    advanceId = setTimeout(next, ADVANCE_DELAY_MS);
  }

  function next() {
    index += 1;
    showQuestion();
  }

  function finish() {
    const score = answers.filter((a) => a.correct).length;
    const total = exam.length;
    onFinish({ score, total, passed: score >= PASS_SCORE, answers });
  }

  function handleExit() {
    const confirmed = window.confirm("Quit this exam? Your progress on this attempt will be lost.");
    if (confirmed && onExit) {
      cleanup();
      onExit();
    }
  }

  function renderQuestionUI(q) {
    const scoreSoFar = answers.filter((a) => a.correct).length;
    container.innerHTML = `
      <div class="exam-header">
        <button class="exam-exit-btn" id="exam-exit-btn" aria-label="Quit exam">&times;</button>
        <div class="exam-header-info">
          <div class="exam-progress">Question ${index + 1} / ${exam.length}</div>
          ${showLiveScore ? `<div class="exam-live-score">Score: ${scoreSoFar}/${answers.length}</div>` : ""}
          ${timerEnabled ? `<div class="exam-timer" id="exam-timer">${QUESTION_SECONDS}s</div>` : ""}
        </div>
      </div>
      ${timerEnabled ? `<div class="timer-bar-track"><div class="timer-bar-fill" id="timer-bar" style="width:100%"></div></div>` : ""}
      ${q.image ? `<img class="exam-question-image" src="${q.image}" alt="" />` : ""}
      <h2 class="exam-question">${q.q}</h2>
      <div class="exam-options" id="exam-options">
        ${q.options.map((opt, i) => `<button class="option-btn" data-index="${i}">${opt}</button>`).join("")}
      </div>
      <button class="btn-primary btn-large" id="confirm-btn" disabled>Confirm answer</button>
    `;
    container.querySelector("#exam-exit-btn").addEventListener("click", handleExit);
    const optionsEl = container.querySelector("#exam-options");
    optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handlePick(Number(btn.dataset.index)));
    });
    container.querySelector("#confirm-btn").addEventListener("click", handleConfirm);
  }

  function updateTimer() {
    const timeLeft = Math.max(Math.ceil((deadline - Date.now()) / 1000), 0);
    const timerEl = container.querySelector("#exam-timer");
    const barEl = container.querySelector("#timer-bar");
    if (timerEl) timerEl.textContent = `${timeLeft}s`;
    if (barEl) barEl.style.width = `${Math.max((timeLeft / QUESTION_SECONDS) * 100, 0)}%`;
    if (timerEl && timeLeft <= 5) timerEl.classList.add("timer-urgent");
  }

  function markLocked(chosenIndex, timedOut) {
    const optionsEl = container.querySelector("#exam-options");
    if (!optionsEl) return;
    optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.disabled = true;
      btn.classList.toggle("option-selected", Number(btn.dataset.index) === chosenIndex);
    });
    const confirmBtn = container.querySelector("#confirm-btn");
    if (confirmBtn) confirmBtn.disabled = true;
    const timerEl = container.querySelector("#exam-timer");
    if (timerEl && timedOut) timerEl.textContent = "Time's up";
  }

  showQuestion();
  return cleanup;
}
