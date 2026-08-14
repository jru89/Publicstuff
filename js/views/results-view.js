export function renderResults(container, result, navigate) {
  const { score, total, passed, answers } = result;
  const wrong = answers.filter((a) => !a.correct);

  container.innerHTML = `
    <div class="results-summary ${passed ? "pass" : "fail"}">
      <div class="results-score">${score} / ${total}</div>
      <div class="results-verdict">${passed ? "PASSED" : "NOT PASSED"}</div>
      <div class="results-note">Pass mark: 41/50</div>
    </div>
    <div class="results-actions">
      <button class="btn-primary" id="btn-retry">New practice exam</button>
      <button class="btn-secondary" id="btn-home">Back to home</button>
    </div>
    ${
      wrong.length
        ? `<h3 class="review-title">Review (${wrong.length} wrong or unanswered)</h3>
           <div class="review-list">
             ${wrong
               .map(
                 (a, i) => `
               <div class="review-item">
                 <div class="review-q">${i + 1}. ${a.question.q}</div>
                 <div class="review-your-answer">
                   Your answer: ${
                     a.timedOut
                       ? "<em>No answer (time ran out)</em>"
                       : a.question.options[a.chosenIndex]
                   }
                 </div>
                 <div class="review-correct-answer">Correct answer: ${a.question.options[a.question.correct]}</div>
                 ${a.question.exp ? `<div class="review-explanation">${a.question.exp}</div>` : ""}
                 ${
                   a.question.lessonId
                     ? `<button class="review-lesson-link" data-category="${a.question.category}" data-lesson="${a.question.lessonId}">Read lesson ${a.question.lessonId} &#8594;</button>`
                     : ""
                 }
               </div>`
               )
               .join("")}
           </div>`
        : `<p class="review-perfect">Perfect score on this attempt — no wrong or unanswered questions.</p>`
    }
  `;

  container.querySelector("#btn-retry").addEventListener("click", () => navigate("#/exam-setup"));
  container.querySelector("#btn-home").addEventListener("click", () => navigate("#/"));
  container.querySelectorAll(".review-lesson-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigate(`#/lessons/${btn.dataset.category}/${btn.dataset.lesson}`);
    });
  });
}
