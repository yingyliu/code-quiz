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

// Introduction of Quiz
var myIntroduction = [
    {
    heading: "Coding Quiz Challenge",
    subtitle: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 5 seconds!"
    }
]
    


startButton.addEventListener("click", startTimer);

//quiz set up
var quizContainer = document.querySelector("#quiz");
var resultsContainer = document.querySelector("#results");
var submitButton = document.querySelector("submit");

var myQuestions = [
    {
        question:"Which of the following is an advantage of using JavScript?",
        answers:{
            a:"Less server interaction",
            b:"Immediate feedback to the visitors",
            c:"Increased interactivity",
            d:"All of the above"
        },
        correctAnswer: "D"
    },
    {
        question:"Which built-in method returns the calling string value converted to upper case?",
        answers:{
            a:"toUpperCase()",
            b:"toUpper()",
            c:"changeCase",
            d:"None of the above"
        },
        correctAnswer: "A"
    }
    {
        question:"Which of the following function of Array object returns a string representing the array and its elements?",
        answers:{
            a:"toSource()",
            b:"toString",
            c:"splice()",
            d:"sort()"
        },
        correctAnswer: "B"
    }
    {
        question:"What JavaScript keyword declares a variable?",
        answers:{
            a:"create",
            b:"if",
            c:"var",
            d:"for"
        },
        correctAnswer: "C"
    }
    {
        question:"What should appear at the very end of your JavaScript? \n The<script LANGUAGE=JavaScript>tag",
        answers:{
            a:"The <script>",
            b:"The END statement",
            c:"None of the above",
            d:"The </script>"
        },
        correctAnswer: "D"
    }
]

//wrong answer with subtracted time from the clock


//all questions are answered or the timer reaches 0, game is over


//save initial name and score
