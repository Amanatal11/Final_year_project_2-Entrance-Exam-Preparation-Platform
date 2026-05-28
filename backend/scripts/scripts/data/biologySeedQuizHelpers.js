/** Shared MCQ quiz structure for biology curriculum seed files. */

const letters = ['A', 'B', 'C', 'D'];

function quizChoices(opts) {
  return opts.map((text, i) => ({ text, value: letters[i] }));
}
/** One quiz problem */
function P(questionText, optionStrings, correctLetter, answerExplanation = '') {
  return {
    questionText,
    choices: quizChoices(optionStrings),
    correctAnswer: correctLetter,
    answerExplanation,
  };
}

module.exports = { quizChoices, P };
