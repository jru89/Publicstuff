import { QUESTIONS } from "./data/questions.js";
import { renderLessons } from "./views/lessons-view.js";
import { renderExamSetup } from "./views/exam-setup-view.js";
import { renderExam } from "./views/exam-view.js";
import { renderResults } from "./views/results-view.js";
import { getHistory } from "./lib/history.js";
import { saveAttempt } from "./lib/history.js";

const app = document.getElementById("app");

let lastResult = null;
let activeCleanup = null;
let examOptions = { timerEnabled: true, showLiveScore: false };

function navigate(hash, state) {
  if (state) examOptions = state;
  window.location.hash = hash;
}

function parseRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const [path, ...rest] = hash.split("/");
  return { path: path || "", rest };
}

function render() {
  if (activeCleanup) {
    activeCleanup();
    activeCleanup = null;
  }

  const { path, rest } = parseRoute();

  if (path === "" || path === "home") {
    renderHome();
  } else if (path === "lessons") {
    renderLessons(app, { categoryId: rest[0], lessonId: rest[1], signCategoryId: rest[2] }, navigate);
  } else if (path === "exam-setup") {
    renderExamSetup(app, navigate);
  } else if (path === "exam") {
    activeCleanup = renderExam(
      app,
      QUESTIONS,
      examOptions,
      (result) => {
        lastResult = result;
        saveAttempt(result);
        navigate("#/results");
      },
      () => navigate("#/")
    );
  } else if (path === "results") {
    if (!lastResult) {
      navigate("#/");
      return;
    }
    renderResults(app, lastResult, navigate);
  } else if (path === "history") {
    renderHistory();
  } else {
    renderHome();
  }
}

function renderHome() {
  app.innerHTML = `
    <div class="home-hero">
      <div class="home-hero-glow"></div>
      <h1>License A to Zyzz</h1>
      <p class="home-sub">Practice for the Belgian motorcycle theory exam.</p>
    </div>
    <div class="home-actions">
      <button class="btn-primary btn-large" id="start-exam">Start practice exam</button>
      <button class="btn-secondary btn-large" id="browse-lessons">Browse lessons</button>
      <button class="btn-secondary btn-large" id="view-history">My history</button>
    </div>
    <div class="home-hero-photo-wrap">
      <img class="home-hero-photo" src="icons/bianca-hero.png" alt="" onerror="this.parentElement.style.display='none'" />
    </div>
    <p class="home-note">50 questions &middot; 15 seconds each &middot; pass mark 41/50</p>
  `;
  app.querySelector("#start-exam").addEventListener("click", () => navigate("#/exam-setup"));
  app.querySelector("#browse-lessons").addEventListener("click", () => navigate("#/lessons"));
  app.querySelector("#view-history").addEventListener("click", () => navigate("#/history"));
}

function renderHistory() {
  const history = getHistory();
  app.innerHTML = `
    <button class="back-link" id="back-btn">&larr; Home</button>
    <h2 class="section-title">Practice History</h2>
    ${
      history.length
        ? `<div class="history-list">
            ${history
              .map(
                (a) => `
              <div class="history-item ${a.passed ? "pass" : "fail"}">
                <span class="history-date">${new Date(a.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                <span class="history-score">${a.score}/${a.total}</span>
                <span class="history-verdict">${a.passed ? "Passed" : "Not passed"}</span>
              </div>`
              )
              .join("")}
          </div>`
        : `<p class="history-empty">No practice exams taken yet.</p>`
    }
  `;
  app.querySelector("#back-btn").addEventListener("click", () => navigate("#/"));
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);

if (document.readyState !== "loading") {
  render();
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Offline caching is a nice-to-have; ignore registration failures.
    });
  });

  // When a new service worker takes over (i.e. the app was updated since
  // the last visit), reload once automatically so the user always sees
  // the latest content instead of getting stuck on a stale cached copy.
  let hasReloaded = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (hasReloaded) return;
    hasReloaded = true;
    window.location.reload();
  });
}
