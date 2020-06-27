// Defining the variables to be used
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("questions");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("tscore");

// -----------------------Multiple Choice Questions----------------------------- 

let questions = [{
        question: "Which is the smallest country in the world?",
        choiceA: "Vatican",
        choiceB: "Malta",
        choiceC: "Andorra",
        choiceD: "Monaco",
        Answer: "Vatican"
    },

    {
        question: "Fastest goal in soccer World Cup (sec)?",
        choiceA: "7",
        choiceB: "6.75",
        choiceC: "5.5",
        choiceD: "7.25",
        Answer: "6.75"
    },

    {
        question: "Which animal has 4 hearts?",
        choiceA: "ostrich",
        choiceB: "blue-whale",
        choiceC: "octopus",
        choiceD: "kangaroo",
        Answer: "octopus"
    },

    {
        question: "Which is the tallest mountain in the world?",
        choiceA: "K2",
        choiceB: "Mount-Everest",
        choiceC: "Kanchanjunga",
        choiceD: "Makalu",
        Answer: "Mount-Everest"
    },

    {
        question: "Which is the fastest land animal?",
        choiceA: "Cheetah",
        choiceB: "Tiger",
        choiceC: "Antelope",
        choiceD: "Jaguar",
        Answer: choiceA
    }

];
// -----------------------Multiple Choice Questions----------------------------- 


// variables the quiz needs to start the operation.All the values except questionTime are reset to 0;
// quiz time variable===0 since it starts at 0 every time
// var quizTime = 0;
// Score variable to keep track of correct answers
var score = 0;
// total score to show up on the next page
var totalScore = 0;
// Bank of question objects
var questionIndex = 0;
// each question time
var quizTime = 60;
// initial starting countup time
let countup = 0;
let timer;
// last question value (in our case question.length = 5 )
const lastQuestion = questions.length - 1;
// Functions

// First the questions need to be rendered on the page
// Function to render the first question on the page
function showQuestion() {
    let q = questions[questionIndex];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    console.log(showQuestion);
}


// Start the quiz when button is clicked. Hide the "start Quiz" button and show the questions with options
start.addEventListener("click", startQuiz);


function startQuiz() {
    console.log("click here");
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

// Question Counter. Each question has 10 seconds to answer. If the timer times-out , quiz will skip to the next question
// If the count is less than the question time; the counter increases by 1 until it reaches 10 seconds and resets
// If the question index is less than the value of the last question; the quiz moves to the next question.
// When do you show the counter? when the button is clicked or the game is restarted
function showCounter() {
    if (countup <= quizTime) {
        counter.innerHTML = countup;
        countup++
    } else {
        countup = 0;
        if (questionIndex < lastQuestion) {
            questionIndex++;
            showQuestion();
        } else {


            // clearInterval(timer);

        }
    }
}

// Check if the answer is correct or not.
// If the answer is correct , keep track of the score 
// Code is partially working. Need debugging. I couldnt not figure out.
var answer;

// // Check of the answer is correct
// function correctAnswer({
//     //
// })



function checkAnswer(answer) {
    console.log(event.target.innerHTML);
    if (event.target.innerHTML == questions[questionIndex].Answer) {
        // answer is correct
        score++;
        console.log(score);
    } else {
        showQuestion();
        // count = 0;
        // answer is wrong
    }

    // This moves to a new 

    if (questionIndex < lastQuestion) {
        questionIndex++;
        showQuestion();
    } else {
        // end the quiz and show the score
        var scoreHolder = document.getElementById('tScore');
        scoreHolder.innerHTML = score;
        start.style.display = "block";


    }
}


// write a restart quiz function
function restartQuiz() {
    // you need to go to the first question
    // Reset the timer to 0
    // reset the score to 0
    showQuestion(questions[0]);
    clearInterval(timer);
    clearInterval(score);
    quiz.style.display = "none";
    choiceA.style.display = "none";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    choiceD.style.display = "none";
    question.innerHTML = "";
    start.style.display = "block";

}
restartQuiz();

window.localStorage.setItem("score", score)
window.localStorage.getItem(score)
// save the score and show the score
// save the highscore in the local storage
//Reset the score and reset quiz 
//Display the high score
// Write the name 
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