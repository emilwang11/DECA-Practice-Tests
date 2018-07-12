  /**
 * @author Emily Wang <write2emily@hotmail.com>
 *  Date: June 15th 2018
 * About: This is a DECA exam practice program
 * This program allows you to take mutliple choice and true or false tests
 * This program allows you to save questions and search up answers
 **/
var hospdata, hospExamQ, finData, finExamQ, prinData;
var prinExamQ, busManagData, busManagExamQ, marketData, marketExamQ, entrepData;
var entrepExamQ, home, cluster, otherPage, savedInOrder, savedAlpha, find;
var hosp, marketing, finance, busManag, entrep, principles, examEnded;
var strokeA, strokeB, strokeC, strokeD, strokeTrue = 1,
    strokeFalse = 1;
var searchInput, input;
var found;
var selectedAnswer, correctAnswer, trueOrFalse;
var shapes = [];
var questions = [];
var storedQuestions = [];
var questionsFromSaved = [];
var savedQuestions = [];
var savedQuestionsSorted = [];
var exams = [];
var prompts = [];
var firstLetters = [];
var questionNum = 0,
    score = 0;

function preload() {
    hospData = loadJSON("hospTest2013.JSON");
    finData = loadJSON("financeTest2015.JSON");
    prinData = loadJSON("principlesTest2015.JSON");
    busManagData = loadJSON("busManagTest2015.JSON");
    marketData = loadJSON("marketTest2015.JSON");
    entrepData = loadJSON("entrepTest2018.JSON");
    trueFalseData = loadJSON("TFtest.JSON");
}

function windowResized() {
    resizeCanvas(width, height);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    strokeA = 1;
    strokeB = 1;
    strokeC = 1;
    strokeD = 1;
    strokeTrue = 1;
    strokeFalse = 1;
    strokeWidth = 1;
    questionNum = 0;
    home = true;
    cluster, otherPage = false;
    savedInOrder = false;
    savedAlpha = false;
    find = false;
    marketing = false;
    hosp = false;
    finance = false;
    busManag = false;
    entrep = false;
    principles = false;
    found = false;
    trueOrFalse = false;
    examEnded = false;
    correctAnswer = false;
    hospExamQ = hospData.hospTest;
    finExamQ = finData.finTest;
    prinExamQ = prinData.prinTest;
    busManagExamQ = busManagData.busManagTest;
    marketExamQ = marketData.marketTest;
    entrepExamQ = entrepData.entrepTest;
    trueFalseExamQ = trueFalseData.TrueOrFalseTest;
    exams = [hospExamQ, finExamQ, prinExamQ, busManagExamQ, marketExamQ, entrepExamQ];
}

function draw() {
    background(255);
    if (home) {
        cluster = false;
        otherPage = false;
        background(255);
        stroke(0);
        button(width / 5, height / 2, width / 4, height / 10); //cluster button
        button(3 * width / 5, height / 2, width / 4, height / 10); //Saved questions button
        textSize((width + height) / 2 / 20);
        fill(0)
        textSize(width / 20);
        text("DECA PRACTICE TEST", width / 5, 2 * height / 5);
        textSize((width + height) / 2 / 28);
        text("Cluster", width / 4, height / 2 + height / 25);
        text("Exams", width / 4, height / 2 + height / 11);
        text("Other", 7 * width / 11, height / 2 + height / 15)

        if (mouseIsPressed) {
            if (mouseX > width / 5 && mouseX < width / 5 + width / 4 && mouseY > height / 2 && mouseY < height / 2 + height / 10) {
                cluster = true;
                home = false;
            }
            if (mouseX > 3 * width / 5 && mouseX < 3 * width / 5 + width / 4 && mouseY > height / 2 && mouseY < height / 2 + height / 10) {
                otherPage = true;
                home = false;
            }
        }
    }
    if (cluster) {
        background(255);
        textSize((width + height / 2) / 30);
        text("Choose a Cluster", width / 9, height / 8);
        button(width / 7, height / 4, width / 6, height / 4); //marketing
        button(3 * width / 7, height / 4, width / 6, height / 4); //hosp
        button(5 * width / 7, height / 4, width / 6, height / 4); //finance
        button(width / 7, 2 * height / 3, width / 6, height / 4); //business manag
        button(3 * width / 7, 2 * height / 3, width / 6, height / 4); //entrepreneurship
        button(5 * width / 7, 2 * height / 3, width / 6, height / 4); //principles
        fill(0);
        textSize((width + height / 2) / 60);
        text("Marketing", width / 7 + width / 58, height / 4 + height / 7);
        text("Hospitality", 3 * width / 7 + width / 70, height / 4 + height / 7);
        text("Finance", 5 * width / 7 + width / 58, height / 4 + height / 7);
        textSize(width / 50);
        text("Business", width / 7 + width / 58, 2 * height / 3 + height / 8);
        text("Management", width / 7 + width / 55, 2 * height / 3 + height / 6);
        text("Entrepreneurship", 3 * width / 7, 2 * height / 3 + height / 7);
        textSize(width / 30);
        text("Principles", 5 * width / 7 + width / 58, 2 * height / 3 + height / 7);
        if (mouseIsPressed) {
            if (mouseX > width / 7 && mouseX < width / 7 + width / 6 && mouseY > height / 4 && mouseY < height / 2) {
                cluster = false;
                home = false;
                marketing = true;
            }
            if (mouseX > 3 * width / 7 && mouseX < 3 * width / 7 + width / 6 && mouseY > height / 4 && mouseY < height / 2) {
                cluster = false;
                home = false;
                hosp = true;
            }
            if (mouseX > 5 * width / 7 && mouseX < 5 * width / 5 + width / 6 && mouseY > height / 4 && mouseY < height / 2) {
                home = false;
                cluster = false;
                finance = true;
            }
            if (mouseX > width / 7 && mouseX < width / 7 + width / 6 && mouseY > 2 * height / 3 && mouseY < 2 * height / 3 + height / 4) {
                home = false;
                cluster = false;
                busManag = true;
            }
            if (mouseX > 3 * width / 7 && mouseX < 3 * width / 7 + width / 6 && mouseY > 2 * height / 3 && mouseY < 2 * height / 3 + height / 4) {
                home = false;
                cluster = false;
                entrep = true;
            }
            if (mouseX > 5 * width / 7 && mouseX < 5 * width / 7 + width / 6 && mouseY > 2 * height / 3 && mouseY < 2 * height / 3 + height / 4) {
                home = false;
                cluster = false;
                principles = true;
            }
        }
    }
    if (otherPage) {
        background(255);
        button(2 * width / 5, height / 3, width / 7, height / 10); //saved order
        button(2 * width / 5, height / 2, width / 7, height / 10); //saved  alpha order
        button(2 * width / 5, 2 * height / 3, width / 7, height / 10); //find question
        button(2 * width / 5, height / 5, width / 7, height / 10); //true or false questions
        fill(0);
        textSize((width + height / 2) / 35);
        text("Saved Questions", width / 3, height / 8);
        textSize((width + height / 2) / 55);
        text("Saved order", 2 * width / 5, height / 2 - height / 10);
        text("By alpha", 2 * width / 5, 2 * height / 3 - height / 10);
        textSize((width + height / 2) / 64);
        text("Find answer", 2 * width / 5, 2 * height / 3 + height / 22);
        text("to question", 2 * width / 5, 2 * height / 3 + height / 14);
        text("True/False", 2 * width / 5, height / 4);
        text("Questions", 2 * width / 5, height / 4 + height / 30);

        if (mouseIsPressed) {
            if (mouseX > 2 * width / 5 && mouseX < 2 * width / 5 + width / 7 && mouseY > height / 5 && mouseY < height / 5 + height / 10) { //search option
                otherPage = false;
                trueOrFalse = true;
            }
            if (mouseX > 2 * width / 5 && mouseX < 2 * width / 5 + width / 7 && mouseY > height / 3 && mouseY < height / 3 + height / 10) { //saved in order
                otherPage = false;
                savedInOrder = true;
            }
            if (mouseX > 2 * width / 5 && mouseX < 2 * width / 5 + width / 7 && mouseY > height / 2 && mouseY < height / 2 + height / 10) { //saved in alpha order
                otherPage = false;
                savedAlpha = true;
            }
            if (mouseX > 2 * width / 5 && mouseX < 2 * width / 5 + width / 7 && mouseY > 2 * height / 3 && mouseY < 2 * height / 3 + height / 10) { //search option
                otherPage = false;
                find = true;
            }
        }
    }
    if (savedInOrder) {
        background(255);
        if (savedQuestions.length > 0 && questionNum < savedQuestions.length) {
            choiceButtons();
            for (var i = 0; i < savedQuestions.length; i++) {
                questionsFromSaved[i] = new QuestionSaved(savedQuestions[i].prompt, savedQuestions[i].choices, savedQuestions[i].answer, savedQuestions[i].explanation, savedQuestions[i].source);
            }
            questionsFromSaved[questionNum].displayQuestions();
            questionsFromSaved[questionNum].displayChoices();
            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
                if (correctAnswer == true) {
                    score++;
                }
                mouseIsPressed = false;
            }
        } else if (savedQuestions.length == 0) {
            text("No saved questions", width / 3, height / 2);
        } else if (questionNum == savedQuestions.length) {
            examEnded = true;
        }
        correctAnswer = false;
    }

    if (savedAlpha) {
        background(255);
        if (savedQuestions.length > 0 && questionNum < savedQuestions.length) {
            choiceButtons();
            savedQuestionsSorted = savedQuestions.sort(function(a, b) {
                var wordA = a.prompt.toLowerCase();
                var wordB = b.prompt.toLowerCase();
                if (wordA < wordB) return -1;
                if (wordA > wordB) return 1;
                return 0;
            })
            /* Can use this instead to sort; however, one above is more efficient
                for (var i=0; i<savedQuestions.length; i++){
                savedQuestionsSorted=savedQuestions;
                  {
                    var swapped;
                    do{
                      swapped=false;
                      for (var i=0; i<savedQuestionsSorted.length-1; i++){
                        if (unchar(savedQuestionsSorted[i].prompt[0])>unchar(savedQuestionsSorted[i+1].prompt[0])){
                          var temp=savedQuestionsSorted[i];
                          savedQuestionsSorted[i]=savedQuestionsSorted[i+1];
                          savedQuestionsSorted[i+1]=temp
                          swapped=true;
                        }
                      }
                } while(swapped);
                }
                }
                */
            for (var i = 0; i < savedQuestionsSorted.length; i++) {
                questionsFromSaved[i] = new QuestionSaved(savedQuestionsSorted[i].prompt, savedQuestionsSorted[i].choices, savedQuestionsSorted[i].answer, savedQuestionsSorted[i].explanation, savedQuestionsSorted[i].source);
            }
            questionsFromSaved[questionNum].displayQuestions();
            questionsFromSaved[questionNum].displayChoices();
            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
                if (correctAnswer == true) {
                    score++;
                }
                mouseIsPressed = false;
            }
        } else if (savedQuestionsSorted.length == 0) {
            text("No saved questions", width / 3, height / 2);
        } else if (questionNum == savedQuestionsSorted.length) {
            examEnded = true;
        }
        correctAnswer = false;
    }

    if (find) {
        background(255);
        input = createInput("One of the main functions of the legal procedure is to");
        textSize((width + height / 2) / 50);
        text("Enter the exact question you would like the explanation to", 1 * width / 30, 1 * height / 10);
        input.position(2 * width / 5, 3 * height / 20);
        button = createButton('search');
        button.position(input.x + input.width, 3 * height / 20);
        button.mousePressed(search);
    }
    if (trueOrFalse) {
        background(255);
        strokeWeight(strokeTrue);
        button(width / 5, 4 * height / 7, width / 4, height / 8); //true
        strokeWeight(strokeFalse);
        button(3 * width / 5, 4 * height / 7, width / 4, height / 8); //false
        strokeWeight(1);
        fill(0)
        textSize(width / 25);
        text("True", width / 4, 2 * height / 3);
        text("False", 3 * width / 5, 2 * height / 3);
        if (questionNum < trueFalseExamQ.length) {
            for (var i = 0; i < trueFalseExamQ.length; i++) {
                questions[i] = new TrueOrFalse(trueFalseExamQ[i].prompt, trueFalseExamQ[i].answer);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].selectAnswer();
            if (correctAnswer == true) {
                score++;
            }
        } else {
            examEnded = true;
        }
        correctAnswer = false;
    }
    if (marketing) {
        if (questionNum < 4) {
            for (var i = 0; i < marketExamQ.length; i++) {
                questions[i] = new Question(marketExamQ[i].prompt, marketExamQ[i].choices, marketExamQ[i].answer, marketExamQ[i].explanation, marketExamQ[i].source);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].displayChoices();

            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
            }
            mouseIsPressed = false;
        } else {
            examEnded = true;
        }
        if (correctAnswer == true) {
            score++;
        }
        correctAnswer = false;
    }
    if (hosp) {
        if (questionNum < 4) {
            for (var i = 0; i < hospExamQ.length; i++) {
                questions[i] = new Question(hospExamQ[i].prompt, hospExamQ[i].choices, hospExamQ[i].answer, hospExamQ[i].explanation, hospExamQ[i].source);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].displayChoices();

            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
                if (correctAnswer == true) {
                    score++;
                }
                mouseIsPressed = false;
            }
        } else {
            examEnded = true;
        }
        correctAnswer = false;
    }
    if (finance) {
        if (questionNum < 4) {
            for (var i = 0; i < finExamQ.length; i++) {
                questions[i] = new Question(finExamQ[i].prompt, finExamQ[i].choices, finExamQ[i].answer, finExamQ[i].explanation, finExamQ[i].source);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].displayChoices();
            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
            }
            mouseIsPressed = false;
        } else {
            examEnded = true;
        }
        if (correctAnswer == true) {
            score++;
        }
        correctAnswer = false;
    }
    if (busManag) {
        if (questionNum < 4) {
            for (var i = 0; i < busManagExamQ.length; i++) {
                questions[i] = new Question(busManagExamQ[i].prompt, busManagExamQ[i].choices, busManagExamQ[i].answer, busManagExamQ[i].explanation, busManagExamQ[i].source);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].displayChoices();
            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
            }
            mouseIsPressed = false;
        } else {
            examEnded = true;
        }
        if (correctAnswer == true) {
            score++;
        }
        correctAnswer = false;
    }
    if (entrep) {
        if (questionNum < 4) {
            for (var i = 0; i < entrepExamQ.length; i++) {
                questions[i] = new Question(entrepExamQ[i].prompt, entrepExamQ[i].choices, entrepExamQ[i].answer, entrepExamQ[i].explanation, entrepExamQ[i].source);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].displayChoices();
            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
            }
            mouseIsPressed = false;
        } else {
            examEnded = true;
        }
        if (correctAnswer == true) {
            score++;
        }
        correctAnswer = false;
    }
    if (principles) {
        if (questionNum < 4) {
            for (var i = 0; i < prinExamQ.length; i++) {
                questions[i] = new Question(prinExamQ[i].prompt, prinExamQ[i].choices, prinExamQ[i].answer, prinExamQ[i].explanation, prinExamQ[i].source);
            }
            questions[questionNum].displayQuestions();
            questions[questionNum].displayChoices();
            if (mouseIsPressed) {
                questions[questionNum].selectAnswer();
            }
            mouseIsPressed = false;
        } else {
            examEnded = true;
        }
        if (correctAnswer == true) {
            score++;
        }
        correctAnswer = false;
    }
    if (examEnded) {
        background(255);
        home = false;
        cluster = false;
        otherPage = false;
        savedInOrder = false;
        savedAlpha = false;
        find = false;
        marketing = false;
        hosp = false;
        finance = false;
        busManag = false;
        entrep = false;
        principles = false;
        found = false;
        trueOrFalse = false;
        text("You have finished", width / 3, height / 3);
        text("Your mark is " + score, width / 2, height / 2);
    }

    if (marketing || hosp || finance || busManag || entrep || principles && !examEnded) {
        //cluster exam questions page Layout
        //buttons for choices
        choiceButtons();
        choiceButtons();
        nextButton();
        previousButton();
        saveButton();

    }
    if (savedInOrder || savedAlpha || trueOrFalse) {
        nextButton();
        previousButton();
    }
    if (!home) {
        strokeWeight(1);
        button(width / 25, 9 * height / 10, width / 12, height / 12) //back button
        fill(0);
        textSize((width + height / 2) / 80);
        text("Main Menu", width / 22, 23 * height / 24);
    }
}

/**
 * Draws rectangular button
 * @param {number} locationX x coordinate of the upper-left corner of button
 * @param {number} locationY y coordinate of the upper-left corner of button
 * @param {number} width width of the button
 * @param {number} height height of the button
 */
function button(locationX, locationY, width, height) {
    stroke(0);
    noFill();
    rect(locationX, locationY, width, height);
}
/** draws rectangular buttons around answer choices */
function choiceButtons() {
    noFill();
    strokeWeight(strokeA);
    rect(width / 35, height / 2 - height / 30, width / 45, height / 20); //A
    strokeWeight(strokeB);
    rect(width / 35, height / 2 - height / 30 + height / 15, width / 45, height / 20); //B
    strokeWeight(strokeC);
    rect(width / 35, height / 2 - height / 30 + 2 * height / 15, width / 45, height / 20); //C
    strokeWeight(strokeD);
    rect(width / 35, height / 2 - height / 30 + height / 5, width / 45, height / 20); //D
    strokeWeight(1);
}
/** draws "Next" button */
function nextButton() {
    stroke(0);
    noFill();
    rect(5 / 6 * width, 9 / 10 * height, width / 7, height / 15);
    textSize((width + height / 2) / 70);
    fill(0);
    text("Next", 11 / 13 * width, height - height / 20);
}
/** draws "back" button */
function previousButton() {
    stroke(0);
    noFill();
    rect(2 / 3 * width, 9 / 10 * height, width / 7, height / 15);
    textSize((width + height / 2) / 70);
    fill(0);
    text("Back", 9 / 13 * width, height - height / 20);
}
/** draws "save" button */
function saveButton() {
    stroke(0);
    noFill();
    rect(width / 3 + 20, 3 * height / 4, width / 7, height / 15);
    fill(0);
    text("Save", width / 3 + 25, 3 * height / 4 + 30);
}
/** searches for answer to question through all the loaded exams*/
function search() {
    background(255);
    fill(0);
    text("Enter the exact question you would like the explanation to", 1 * width / 30, 1 * height / 10);
    text("Sorry your question could not be found", 1 / 4 * width, height / 2);
    var searchInput = input.value();
    for (var j = 0; j < exams.length; j++) {
        var test = exams[j];
        for (var i = 0; i < test.length; i++) {
            if (test[i].prompt == searchInput) {
                fill(0);
                background(255);
                text("Enter the exact question you would like the explanation to", 1 * width / 30, 1 * height / 10);
                textSize((width + height / 2) / 70);
                text(test[i].explanation, 0, height / 2);
                found = true;
            }
        }
    }
}

/**
 * Adds object from existing array to new array
 * @param {objectt[]} newArray array containing newly added objects
 * @param {objectt[]} newObj array temp stores item to be added
 */
function appendObjTo(newArray, newObj) {
    const frozenObj = Object.freeze(newObj);
    return Object(newArray.concat(newObj));
}
/** Called everytime mouse is pressed*/
function mousePressed() {
    if (!home || !otherPage || !cluster) {
        if (mouseX > 5 / 6 * width && mouseX < 5 / 6 * width + width / 7 && mouseY > 9 / 10 * height && mouseY < 29 / 30 * height) {
            questionNum++;
        }

        if (mouseX > 2 / 3 * width && mouseX < 2 / 3 * width + width / 7 && mouseY > 9 / 10 * height && mouseY < 9 / 10 * height + height / 15 && questionNum > 0) {
            questionNum--;
            if (questionNum == 0)
                questionNum = 0;
        }
    }

    if (hosp || marketing || finance || busManag || entrep || principles) {
        if (mouseX > width / 3 + 20 && mouseX < width / 3 + 20 + width / 7 && mouseY > 3 * height / 4 && mouseY < 3 * height / 4 + height / 15) {
            storedQuestions = questions[questionNum];
            savedQuestions = appendObjTo(savedQuestions, storedQuestions);
        }
    }

    if (!home) {
        if (mouseX > width / 25 && mouseX < width / 25 + width / 12 && mouseY > 9 / 10 * height && mouseY < 9 / 10 * height + height / 12) {
            setup()
        }
    }
}
