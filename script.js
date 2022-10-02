// timer set up when user click the start quiz button
var startButton = document.querySelector("#start");

var totalSeconds = 5;
var interval;

function startTimer() {
    interval = setInterval(decrement, 1000);
}

function decrement (){
    totalSeconds--;
    document.querySelector("#timer").innerHTML = "<h2>Time: " + totalSeconds + "</h2>";
    
    if (totalSeconds === 0) {
        clearInterval(interval);
        document.querySelector("#timer").innerText = "<h2>Game Over!</h2>";
    }
}




var main = document.main;// Introduction of Quiz
var h1El = document.createElement("h1"); //Introduction of Quiz
var h2El = document.createElement("h2"); //questions
var h3El = document.createElement("h3"); //answers
var listEl = document.createElement("div"); //create order list element
//create order list items
var liA = document.creatElement("li"); 
var liB = document.creatElement("li"); 
var liC = document.creatElement("li");
var liD = document.creatElement("li");

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:30px");
subtitle.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20px");
//Add styleing to list elment
liA.setAttribute("style", "background:purple; padding: 5px");
liB.setAttribute("style", "background:purple; padding: 5px");
liC.setAttribute("style", "background:purple; padding: 5px");
liD.setAttribute("style", "background:purple; padding: 5px");

console.log("Coding Quiz Challenge", main);
h1El.textContent = "Coding Quiz Challenge";
subtitle.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 5 seconds!"; 

startButton.addEventListener("click", startTimer);

//quiz set up
var quizContainer = document.querySelector("#quiz");

//Question 1
h2El.textContent = "Q1. Which of the following is an advantage of using JavScript?";
liA.textContent = "Less server interaction";
liB.textContent = "Immediate feedback to the visitors";
liC.textContent = "Increased interactivity";
liD.textContent = "All of the above";

correctAnswer = "D"; //h3
wrongAnswer = "Wrong";//display text "wrong" subtracted timer with 5s.

//Question 2
h2El.textContent = "Q2. Which built-in method returns the calling string value converted to upper case?";
liA.textContent = "toUpperCase()";
liB.textContent = "toUpper()";
liC.textContent = "changeCase";
liD.textContent = "None of the above";

correctAnswer = "A"; //h3
wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

//Question 3
h2El.textContent = "Q3. Which of the following function of Array object returns a string representing the array and its elements?";
liA.textContent = "toSource()";
liB.textContent = "toString";
liC.textContent = "splice()";
liD.textContent = "sort()";

correctAnswer = "B"; //h3
wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

//Question 4
h2El.textContent = "Q4. What JavaScript keyword declares a variable?";
liA.textContent = "create";
liB.textContent = "if";
liC.textContent = "var";
liD.textContent = "for";

correctAnswer = "C"; //h3
wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

//Question 5
h2El.textContent = "Q5. What should appear at the very end of your JavaScript? \n The<script LANGUAGE=JavaScript>tag";
liA.textContent = "The <script>";
liB.textContent = "The END statement";
liC.textContent = "None of the above";
liD.textContent = "The </script>";

correctAnswer = "D"; //h3
wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.


//all questions are answered or the timer reaches 0, game is over


//save initial name and score
var resultsContainer = document.querySelector("#results");
var submitButton = document.querySelector("submit");