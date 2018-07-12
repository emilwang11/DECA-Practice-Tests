/**
  * Class for questions.
  * @example
  * let questions[i]=new Question();
  */
 class Question {
     /**
      * Constructor for Question class
      * @param {string} prompt The prompt for Question class class.
      * @param {string} choices The choices for Question class.
      * @param {string} answer The answer for Question class.
      * @param {string} explanation The explanation for Question class.
      * @param {string} source The source the question was from for Question class.
      */
     constructor(prompt, choices, answer, explanation, source) {
         this.prompt = prompt;
         this.choices = choices;
         this.answer = answer;
         this.explanation = explanation;
         this.source = source;
     }

     /**
      * Displays the prompt of the question
      */
     displayQuestions() {
         fill(0);
         textSize(((width + height) / 2) / 35);
         text(this.prompt, width / 60, height / 3);
     }
     /**
      * Displays the choices of the question
      */
     displayChoices() {
         fill(0);
         var choice1 = this.choices[0];
         var choice2 = this.choices[1];
         var choice3 = this.choices[2];
         var choice4 = this.choices[3];
         textSize(((width + height) / 2) / 40);
         text("A. " + choice1, width / 30, height / 2);
         text("B. " + choice2, width / 30, height / 2 + height / 15);
         text("C. " + choice3, width / 30, height / 2 + 2 * height / 15);
         text("D. " + choice4, width / 30, height / 2 + height / 5);
     }
     /**
      * Shows user's answer selection and checks if it is correct
      */
     selectAnswer() {
         if (mouseIsPressed) {
             if (mouseX > width / 35 && mouseY > height / 2 - height / 30 && mouseX < width / 35 + width / 45 && mouseY < height / 2 - height / 30 + height / 20) {
                 strokeA = 5;
                 strokeB = 1;
                 strokeC = 1;
                 strokeD = 1;
                 selectedAnswer = "A";
             }
             if (mouseX > width / 35 && mouseY > height / 2 - height / 30 + height / 15 && mouseX < width / 35 + width / 45 && mouseY < height / 2 - height / 30 + height / 15 + height / 20) {
                 strokeB = 5;
                 strokeA = 1;
                 strokeC = 1;
                 strokeD = 1;
                 selectedAnswer = "B";
             }
             if (mouseX > width / 35 && mouseY > height / 2 - height / 30 + 2 * height / 15 && mouseX < width / 35 + width / 45 && mouseY < height / 2 - height / 30 + 2 * height / 15 + height / 20) {
                 strokeC = 5;
                 strokeA = 1;
                 strokeB = 1;
                 strokeD = 1;
                 selectedAnswer = "C";
             }
             if (mouseX > width / 35 && mouseY > height / 2 - height / 30 + height / 5 && mouseX < width / 35 + width / 45 && mouseY < height / 2 - height / 30 + height / 5 + height / 20) {
                 strokeD = 5;
                 strokeA = 1;
                 strokeB = 1;
                 strokeC = 1;
                 selectedAnswer = "D";
             }
             if (mouseX > 5 / 6 * width && mouseX < 5 / 6 * width + width / 7 && mouseY > 9 / 10 * height && mouseY < 29 / 30 * height) {
                 if (this.answer == selectedAnswer) {
                     correctAnswer = true;
                 } else {
                     correctAnswer = false;
                 }
                 strokeA = 1;
                 strokeB = 1;
                 strokeC = 1;
                 strokeD = 1;
             }
         }
     }
 }
