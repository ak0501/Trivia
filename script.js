
//Create a countdown timer
var timeEl = document.querySelector(".time");
var mainEl = document.querySelector("main");

// Map button to start the timer
document.querySelector(".badge").addEventListener("click", function () {
    setTime();
});

var secondsLeft = 5;
// 2 functions set time and send message.about-me-header.Set interval
// is built in event. 2 argument 
// 1st - callback function
// 2nd- time (1000ms ;i.e 1s)
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " " + "seconds remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}


function sendMessage() {
    timeEl.textContent = " ";

    // var imgEl = document.createElement("img");

    // imgEl.setAttribute("src", "images/image_1.jpg");
    // mainEl.appendChild(imgEl);

}

setTime();



// Question object-array for trivia []
var questions = { q: "Which animal has 4 hearts?", choices: ['ostrich', 'blue-whale', 'octopus', 'kangaroo'], Answer: "octopus" };
var questions = { q: "Which is the fastest land animal?", choices: ['Cheetah', 'Antelope', 'Lino', 'Tiger'], Answer: "Cheetah" };
var questions = { q: "Which is the tallest mountain in the world?", choices: ['Everest', 'K2', 'Kanchanjunga', 'Makalu'], Answer: "Everest" };


