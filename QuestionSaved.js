/**
 * Class for saved questions.
 * @extends Question
 */
class QuestionSaved extends Question {
    /**
     * Creates questions from those that were saved.
     * @param {string} prompt The prompt for QuestionSaved class.
     * @param {string} choices The choices for QuestionSaved class.
     * @param {string} answer The answer for QuestionSaved class.
     * @param {string} explanation The explanation for QuestionSaved class.
     * @param {string} source The source the question was from for QuestionSaved class.
     */
    constructor(prompt, choices, answer, explanation, source) {
        super(prompt, choices, answer, explanation, source);
    }
    /**
     * Displays the prompt and source of the question
     */
    displayQuestions() {
        fill(0);
        textSize((height + width) / 2 / 30);
        text(this.prompt, width / 60, height / 3);
        textSize((height + width) / 2 / 50);
        text("Question from " + this.source, width / 4, 7 * height / 8);
    }
}
