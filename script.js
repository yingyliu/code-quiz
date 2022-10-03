var body = document.body;

// timer set up when user click the start quiz button
var countDown = 100;
var startButton = document.querySelector("#start");
var timerInterval;
// when user click the start quiz button, the timer start countdown
function startTimer() {
    timerInterval = setInterval(decrement, 100);
}

function decrement () {
    document.querySelector("#timer").innerHTML = "<h2>Time: " + countDown + "</h2>";
    countDown--;
    console.log(countDown)
    if (countDown === 0) {
        clearInterval(timerInterval);
        document.querySelector("#timer").innerText = "Time Up!";
    };
}

var main = document.main;// Introduction of Quiz
var h1El = document.createElement("h1"); //Introduction of Quiz
var subtitle = document.createElement("h3");
var h2El = document.createElement("h2"); //questions
var h3El = document.createElement("h3"); //answers
var listEl = document.createElement("div"); //create order list element
//create order list items
var liA = document.createElement("li"); 
var liB = document.createElement("li"); 
var liC = document.createElement("li");
var liD = document.createElement("li");

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:30px");
subtitle.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20px");
//Add styling to list elment
liA.setAttribute("style", "background:lightpurple; padding: 5px");
liB.setAttribute("style", "background:lightpurple; padding: 5px");
liC.setAttribute("style", "background:lightpurple; padding: 5px");
liD.setAttribute("style", "background:lightpurple; padding: 5px");

console.log("Coding Quiz Challenge", main);
h1El.textContent = "Coding Quiz Challenge";
subtitle.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 5 seconds!"; 
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(liA);
body.appendChild(liB); 
body.appendChild(liC);
body.appendChild(liD);

//quiz set up
var quizContainer = document.querySelector("#quiz");

var questions = [ 
    {
        h1:"Q1. Which of the following is an advantage of using JavScript?",
        Answers: [
            "Less server interaction",
            "Immediate feedback to the visitors",
            "Increased interactivity",
            "All of the above"
        ],
        correctAnswer:3 //array index number
    },
    {
        h1:"Q2. Which built-in method returns the calling string value converted to upper case?",
        Answers: [
            "toUpperCase()",
            "toUpper()",
            "changeCase",
            "None of the above"
        ],
        correctAnswer:0 //array index number
    },


]
//set up counter for array
//make your list elements into buttons and set event listener on them

function startQuiz () {
    console.log("start quiz has been called") //
    h2El.textContent = questions[currentQuestion].h1
    liA.textContent = questions[currentQuestion].Answers[0];
    liB.textContent = questions[currentQuestion].Answers[1];
    liC.textContent = questions[currentQuestion].Answers[2];
    liD.textContent = questions[currentQuestion].Answers[3];
    currentQuestion++;
    liA.addEventListener("click", startQuiz)
}


// //Question 1
// correctAnswer = "D"; //h3
// wrongAnswer = "Wrong";//display text "wrong" subtracted timer with 5s.

// //Question 2
// h2El.textContent = "Q2. Which built-in method returns the calling string value converted to upper case?";
// liA.textContent = "toUpperCase()";
// liB.textContent = "toUpper()";
// liC.textContent = "changeCase";
// liD.textContent = "None of the above";

// correctAnswer = "A"; //h3
// wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// //Question 3
// h2El.textContent = "Q3. Which of the following function of Array object returns a string representing the array and its elements?";
// liA.textContent = "toSource()";
// liB.textContent = "toString";
// liC.textContent = "splice()";
// liD.textContent = "sort()";

// correctAnswer = "B"; //h3
// wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// //Question 4
// h2El.textContent = "Q4. What JavaScript keyword declares a variable?";
// liA.textContent = "create";
// liB.textContent = "if";
// liC.textContent = "var";
// liD.textContent = "for";

// correctAnswer = "C"; //h3
// wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// //Question 5
// h2El.textContent = "Q5. What should appear at the very end of your JavaScript? \n The<script LANGUAGE=JavaScript>tag";
// liA.textContent = "The <script>";
// liB.textContent = "The END statement";
// liC.textContent = "None of the above";
// liD.textContent = "The </script>";

// correctAnswer = "D"; //h3
// wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

//for next question
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll("slide");
let currentQuestion = 0;

// showSlide(currentSlide);

// nextButton.addEventListener("click", slowNextSlide);

// function showNextSlide() {
//     showSlide(currentSlide + 1);
// }

//all questions are answered or the timer reaches 0, game is over

var totalScore = "";
h2El.textContent = "All done!";
h3El.textContent = "Your final score is " + totalScore + ".";

//save initial name and score
var submitButton = document.querySelector("#submit");

function showReponse(event) {
    event.preventDefault();
    console.log(event);
    // var reponse = ;
    
}

var resultsContainer = document.querySelector("#results");

function showResult(event) {
    event.preventDefault();
    console. log(event);
    var answerContainers = quizContainer.querySelectorAll("answers");

}


startButton.addEventListener("click", startTimer);// the click event is listening for timer, so the time start
submitButton.addEventListener("click", showReponse);
startButton.addEventListener("click", startQuiz);
