/**
 * Class for true of false questions.
 * @extends Question
 */
class TrueOrFalse extends Question {
    /**
     * Create true or false questions
     * @param {string} prompt The prompt for the TrueOrFalse class.
     * @param {string} answer The answer for the TrueOrFalse class.
     */
    constructor(prompt, answer) {
        super(prompt);
        this.answer = answer;
    }
    /**
     * Shows user's answer selection and checks if it is correct
     */
    selectAnswer() {
        if (mouseIsPressed) {
            if (mouseX > width / 5 && mouseX < width / 5 + width / 4 && mouseY > 4 * height / 7 && mouseY < 4 * height / 7 + height / 8) {
                selectedAnswer = "True";
                strokeTrue = 5;
                strokeFalse = 1;
            }
            if (mouseX > 3 * width / 5 && mouseX < 3 * width / 5 + width / 4 && mouseY > 4 * height / 7 && mouseY < 4 * height / 7 + height / 8) {
                selectedAnswer = "False";
                strokeTrue = 1;
                strokeFalse = 5;
            }
            if (mouseX > 5 / 6 * width && mouseX < 5 / 6 * width + width / 7 && mouseY > 9 / 10 * height && mouseY < 29 / 30 * height) {
                if (this.answer == selectedAnswer) {
                    correctAnswer = true;
                } else {
                    correctAnswer = false;
                }
                strokeTrue = 1;
                strokeFalse = 1;
            }
        }
    }
}
