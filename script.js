/* ---------------------------- variable for DOM ---------------------------- */

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("questions");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("tScore");

/* ----------------------------------- end ---------------------------------- */

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
        Answer: "Cheetah"
    }

];

/* ----------------------------------- end ---------------------------------- */

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
// var quizTime = 60;
// initial starting countup time
let countdown = 10;
let timer;
let player;
// last question value (in our case question.length = 5 )
const lastQuestion = questions.length - 1;
// Functions

/* ----------------------------------- end ---------------------------------- */

/* ----------------- Function to render question on the page ---------------- */

function showQuestion() {
    countdown = 10;
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

/* ------------------------- start quiz funtion/prompt name/ ------------------------ */

function startQuiz() {
    console.log("click here");
    start.style.display = "none";
    player = prompt("Your name");
    counter.style.display = "block";
    score = 0;
    /* ----------------------------------- end ---------------------------------- */

    // questionIndex = 0;

    // this line I want to write "if the player's name is empty ; then ask for name else move to
    //showing the next question"

    /* ------------------------------ showQuestion ------------------------------ */

    if (player) {
        // counter.style.display = "none";
        showQuestion();
        quiz.style.display = "block";
        choiceA.style.display = "block";
        choiceB.style.display = "block";
        choiceC.style.display = "block";
        choiceD.style.display = "block";
        showCounter();
        timer = setInterval(showCounter, 1000); // 1000ms = 1s  
    } else {
        start.style.display = "block";

        alert("please add a name");
        console.log("name");

    }
}

/* ----------------------------------- end ---------------------------------- */

/* ----------------------------- game countdown ----------------------------- */

function showCounter() {
    if (countdown > 0) {
        counter.innerHTML = countdown;
        countdown--;
    } else if (countdown === 0) {
        questionIndex++;
        showQuestion();
        // countdown = 10;
    }

    // if (questionIndex < lastQuestion) {
    //     questionIndex++;
    //     showQuestion();
    // }
}


/* ----------------------------------- end ---------------------------------- */

// Check if the answer is correct or not.
// If the answer is correct , keep track of the score 
var answer;

/* ------------------------------ check answer ------------------------------ */


function checkAnswer(answer) {
    // console.log(event.target.innerHTML);
    if (event.target.innerHTML == questions[questionIndex].Answer) {
        // answer is correct
        score++;
        console.log(score);
    } else {
        showQuestion();
    }

    /* --------------------------- This moves to a new question-------------------------- */

    if (questionIndex < lastQuestion) {
        questionIndex++;
        showQuestion();
    } else {
        // end the quiz and show the score
        // Add name of the player to the homepage

        scoreDiv.innerHTML = "total score:" + score;
        start.style.display = "block";
        clearInterval(timer);
        localStorage.setItem(player, score);
        quiz.style.display = "block";
        choiceA.style.display = "none";
        choiceB.style.display = "none";
        choiceC.style.display = "none";
        choiceD.style.display = "none";
        question.innerHTML = "";
        start.style.display = "block";
        countdown = 10;
        counter.style.display = "none";
        questionIndex = 0;

        // storage.getItem(player)
        console.log(localStorage["<entries>"]);
        delete localStorage.length;
        Object.keys(localStorage).forEach(function (item) {
            document.getElementById('nameScore').innerHTML = document.getElementById('nameScore').innerHTML + "<p>" + item + " ; " + localStorage[item] + "</p>";
        });







    }
}