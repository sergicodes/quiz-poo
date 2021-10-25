export class Question {
  /**
   *
   * @param {string} text this is text of the question
   * @param {string[]} choices this is te option of question
   * @param {string} answer this is the answer of question
   */

  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  /**
   *
   * @param {string} choice some text to guest
   * @returns {boolean} true if the answer is correct
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}
