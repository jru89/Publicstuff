// On-device persistence for past exam attempts (FR4).
// Only ever stores Session-context result summaries — never Content data.

const STORAGE_KEY = "rijbewijs-a-exam-history";

export function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAttempt(attempt) {
  const history = getHistory();
  history.unshift({
    date: new Date().toISOString(),
    score: attempt.score,
    total: attempt.total,
    passed: attempt.passed,
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // Storage full or unavailable — history just won't persist this time.
  }
}
