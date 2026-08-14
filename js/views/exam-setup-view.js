export function renderExamSetup(container, navigate) {
  let timerEnabled = true;
  let showLiveScore = false;

  function render() {
    container.innerHTML = `
      <button class="back-link" id="back-btn">&larr; Home</button>
      <h2 class="section-title">Practice Exam Setup</h2>
      <p class="setup-intro">50 questions, pass mark 41/50. Choose how you want to practice.</p>

      <div class="setup-option">
        <div class="setup-option-text">
          <div class="setup-option-title">15-second timer</div>
          <div class="setup-option-desc">Matches the real exam. Turn off for untimed practice.</div>
        </div>
        <button class="toggle-switch ${timerEnabled ? "on" : ""}" id="toggle-timer" role="switch" aria-checked="${timerEnabled}"></button>
      </div>

      <div class="setup-option">
        <div class="setup-option-text">
          <div class="setup-option-title">Show live score</div>
          <div class="setup-option-desc">See your running score as you go, instead of only at the end.</div>
        </div>
        <button class="toggle-switch ${showLiveScore ? "on" : ""}" id="toggle-score" role="switch" aria-checked="${showLiveScore}"></button>
      </div>

      <button class="btn-primary btn-large" id="begin-btn">Begin exam</button>
    `;

    container.querySelector("#back-btn").addEventListener("click", () => navigate("#/"));
    container.querySelector("#toggle-timer").addEventListener("click", () => {
      timerEnabled = !timerEnabled;
      render();
    });
    container.querySelector("#toggle-score").addEventListener("click", () => {
      showLiveScore = !showLiveScore;
      render();
    });
    container.querySelector("#begin-btn").addEventListener("click", () => {
      navigate("#/exam", { timerEnabled, showLiveScore });
    });
  }

  render();
}
