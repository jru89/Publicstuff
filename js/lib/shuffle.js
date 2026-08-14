// Fisher-Yates shuffle and weighted exam-question sampling.
// No shared state, no side effects on inputs — always returns new arrays.

/** Fisher-Yates shuffle. Returns a new array; does not mutate the input. */
export function shuffle(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Pick `count` random items from `array` without replacement. */
function sampleWithoutReplacement(array, count) {
  return shuffle(array).slice(0, Math.min(count, array.length));
}

/**
 * Build one 50-question exam draw from the question bank, with Category F
 * (Right of Way) intentionally overweighted per the spec's confirmed
 * decision: 15 of 50 questions from Category F, 35 from everything else,
 * then the two groups are shuffled together so F questions aren't
 * clustered or predictable in position.
 *
 * Each question's answer options are also independently shuffled per call,
 * so the correct answer isn't memorizable by position across attempts.
 */
export function buildExam(questionBank, { total = 50, categoryFQuota = 15, categoryFId = "F" } = {}) {
  const fPool = questionBank.filter((q) => q.category === categoryFId);
  const restPool = questionBank.filter((q) => q.category !== categoryFId);

  const fCount = Math.min(categoryFQuota, fPool.length);
  const restCount = Math.min(total - fCount, restPool.length);

  const drawn = [
    ...sampleWithoutReplacement(fPool, fCount),
    ...sampleWithoutReplacement(restPool, restCount),
  ];

  const ordered = shuffle(drawn);

  return ordered.map((question) => {
    const optionIndices = shuffle(question.options.map((_, i) => i));
    const options = optionIndices.map((i) => question.options[i]);
    const correct = optionIndices.indexOf(question.correct);
    return { ...question, options, correct };
  });
}
