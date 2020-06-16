const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("questions");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("tscore");

let questions = [
    {
        question: "Which is the smallest country in the world?",
        choiceA: "Vatican",
        choiceB: "Malta",
        choiceC: "Andorra",
        choiceD: "Monaco",
        correct: "Vatican"
    },

    {
        question: "Fastest goal in soccer World Cup (sec)?",
        choiceA: "7",
        choiceB: "6.75",
        choiceC: "5.5",
        choiceD: "7.25",
        correct: "7"
    },

    {
        question: "Which animal has 4 hearts?",
        choiceA: "ostrich",
        choiceB: "blue-whale",
        choiceC: "octopus",
        choiceD: "kangaroo",
        correct: "octopus"
    },

    {
        question: "Which is the tallest mountain in the world?",
        choiceA: "K2",
        choiceB: "Mount-Everest",
        choiceC: "Kanchanjunga",
        choiceD: "Makalu",
        correct: "Everest"
    },

    {
        question: "Which is the fastest land animal?",
        choiceA: "Cheetah",
        choiceB: "Tiger",
        choiceC: "Antelope",
        choiceD: "Jaguar",
        correct: "Cheetah"
    }

];

// variables the quiz needs
var score = 0;
var totalScore = 0;
var questionIndex = 0;
var questionTime = 10;
let count = 0;
let timer;
const lastQuestion = questions.length - 1;

// Functions
// First the questions need to be rendered on the page

function showQuestion() {
    let q = questions[questionIndex];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}

// Start the quiz when button is clicked
start.addEventListener("click", startQuiz)

//  start quiz
function startQuiz() {
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    choiceA.style.display = "block";
    choiceB.style.display = "block";
    choiceC.style.display = "block";
    choiceD.style.display = "block";


    showCounter();
    timer = setInterval(showCounter, 1000); // 1000ms = 1s
}



// counter render

function showCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++
    } else {
        count = 0;

        if (questionIndex < lastQuestion) {
            questionIndex++;
            showQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(timer);

        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[questionIndex].correct) {
        // answer is correct
        score++;
        console.log(score);
    } else {
        // answer is wrong
    }
    count = 0;
    if (questionIndex < lastQuestion) {
        questionIndex++;
        showQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(timer);
        quiz.style.display = "none";
        choiceA.style.display = "none";
        choiceB.style.display = "none";
        choiceC.style.display = "none";
        choiceD.style.display = "none";
        question.innerHTML = "";
        start.style.display = "block";
    }
}



// scoreDiv.textContent = "score";

// function scoreRender() {
//     scoreDiv.style.display = "block";

// save the score and show the score
// save the highscore in the local storage
//Reset the score and reset quiz 
//Display the high score
// Write the name 
``
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score