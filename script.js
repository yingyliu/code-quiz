// Timer setting
var currentTimeContainerElement = document.querySelector(".current-time-container");
var currentTimeElement = docuemnt.querySelector("#current-time");
var initTime = 100;
var currentTime = initTime;
var deduction =10;
var timer;
currentTimeElement.textContent = currentTime;
function actionTimer() {
    timer = setTinterval(() => {
        if (currentTime > 0) {
            currentTime -= 1;
        }
        else {
            currentTime = 0;
            clearInterval(timer);
        }
        currentTimeElement.textContent = currentTime;
    }, 1000);
}

// Grading area
var judgeCorrectElement = document.querySelector(".judge-correct");
var judgeWrongElement = document.querySelector(".judge-wrong");

function countdownHideJudgeItem(seconds) {
    setTimeout(() => {
        judgeCorrectElement.style.display = "none";
        judgeWrongElement.style.display = "none";
    }, seconds);
}

// For all section
var sectionsElement = document.querySelectorAll("section");

function sectionLiElementOnClick(lisElement, currentPage) {
    for (var i = 0; i < lisElement.length; i++) {
        lisElement[i].onclick = function (event) {
            var liItemElement = event.target;
            var isAnsCorrect = liItemElemnet.className.include("correct");
            if (isAnsCorrect) {
                judgeCorrectElement.style.display = "block";
                judgeWrongElement.style.display = "none";
                countdownHideJudgeItem(1000);
            }
            else {
                currentTime -= 10;
                if (currentTime <= 0) {
                    currentTime =0;
                }
                currentTimeElement.textContent = currentTime;
            }
            sectionsElement[currentPage].style.display = "none";
            sectionsElement[currentPage + 1].style.display = "block";

            //final page
            if (currentPage +1 === sectionsElement.length -1) {
                clearInterval(timer);
                var sectionFinalPageElement = sectionsElement[sectionsElement.length - 1];
                var finalScoreElement = sectionFinalPageElement.querySelector("final-score");
                finalScoreElement.textContent = currentTime;
            }
        };
    }
}

//For opening page
var btnStartElement = document.querySelector("btn-start");
var sectionHomeElement = sectionsElement[0];
btnStartElement.addEventListener("click", function () {
    sectionHomeElement.style.display = "none";

    var sectionPage1Element = sectionsElement[1];
    sectionPage1Element.style.display = "block";

    actionTimer();
})

//For Question 1
var questionOneEl = sectionsElement[1].querySelectorAll("li");
sectionLiElementOnClick(questionOneEl, 1);

//For Question 2
var questionTwoEl = sectionsElement[2].querySelectorAll("li");
sectionLiElementOnClick(questionTwoEl, 2);

//For Question 3
var questionThreeEl = sectionsElement[3].querySelectorAll("li");
sectionLiElementOnClick(questionThreeEl, 3);

//For Question 4
var questionFourEl = sectionsElement[4].querySelectorAll("li");
sectionLiElementOnClick(questionFourEl, 4);

//For Question 5
var questionFiveEl = sectionsElement[5].querySelectorAll("li");
sectionLiElementOnClick(questionFiveEl, 5);


//For final page setting
var sectionFinalPageElement = sectionsElement[sectionsElement.length -1];
var nameElement = sectionFinalPageElement.querySelector("#name");
var btnSubmitElemnt = sectionFinalPageElement.querySelector("input[type='button']");
btnSubmitElemnt.addEventListener("click", function() {
    var name = nameElement.value;
    localStorage.setItem("name", name);
    localStorage.setItem("score", currentTime);
    sectionFinalPageElement.style.display = "none";
    scoreSheetContainerElement.style.display = "block";

    //Result sheet
    var lisElement = scoreSheetContainerElement.querySelectorAll("li")
    var lis1Element = lisElement[0];
    var name = localStorage.getItem("name");
    var score = localStorage.getItem("score");
    lis1Element.textContent = name + "_" + score;
});


// Result sheet setting

var scoreSheetContainerElement = document.querySelector(".score-sheet-container");
var btnGoBackElement = scoreSheetContainerElement.querySelector("btn-goback");
var btnClearScoreElement = scoreSheetContainerElement.querySelector("#btn-clear-score");

btnGoBackElement.addEventListener("click", function () {
    sectionHomeElement.style.display = "block";
    scoreSheetContainerElement.style.display = "none";
    currentTime = initTime;
    currentTimeElement.textContent = initTime;
});

btnClearScoreElement.addEventListener("click", function () {
    var lisElement = scoreSheetContainerElement.querySelectorAll("li");
    var list1Element = lisElement[0];
    var name = localStorage.getItem("name");
    var score = localStorage.getItem("score");
    list1Element.textContent = "";
})





// var main = document.main;// Introduction of Quiz
// var h1El = document.createElement("h1"); //Introduction of Quiz
// var subtitle = document.createElement("h3");
// var h2El = document.createElement("h2"); //questions
// var h3El = document.createElement("h3"); //answers
// var listEl = document.createElement("div"); //create order list element
// //create order list items
// var ulEl = document.createElement("ul");
// var liA = document.createElement("li"); 
// var liB = document.createElement("li"); 
// var liC = document.createElement("li");
// var liD = document.createElement("li");
// ulEl.appendChild(liA);
// ulEl.appendChild(liB);
// ulEl.appendChild(liC);
// ulEl.appendChild(liD);

// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:30px");
// subtitle.setAttribute("style", "margin:auto; width:50%; text-align:center; font-size:20px");
// //Add styling to list elment
// liA.setAttribute("style", "background:lightpurple; padding: 5px");
// liB.setAttribute("style", "background:lightpurple; padding: 5px");
// liC.setAttribute("style", "background:lightpurple; padding: 5px");
// liD.setAttribute("style", "background:lightpurple; padding: 5px");

// console.log("Coding Quiz Challenge", main);
// h1El.textContent = "Coding Quiz Challenge";
// subtitle.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by 5 seconds!"; 
// body.appendChild(h1El);
// body.appendChild(h2El);
// body.appendChild(ulEl);
// // body.appendChild(liA);
// // body.appendChild(liB); 
// // body.appendChild(liC);
// // body.appendChild(liD);

// //quiz set up
// var quizContainer = document.querySelector("#quiz");

// var questions = [ 
//     {
//         h1:"Q1. Which of the following is an advantage of using JavScript?",
//         Answers: [
//             "Less server interaction",
//             "Immediate feedback to the visitors",
//             "Increased interactivity",
//             "All of the above"
//         ],
//         correctAnswer:3 //array index number
//     },
//     {
//         h1:"Q2. Which built-in method returns the calling string value converted to upper case?",
//         Answers: [
//             "toUpperCase()",
//             "toUpper()",
//             "changeCase",
//             "None of the above"
//         ],
//         correctAnswer:0 //array index number
//     },
    



// ]
// //set up counter for array
// //make your list elements into buttons and set event listener on them

// function startQuiz (e,i) {
//     console.log("start quiz has been called") //
//     h2El.textContent = questions[currentQuestion].h1
//     liA.textContent = questions[currentQuestion].Answers[0];
//     liB.textContent = questions[currentQuestion].Answers[1];
//     liC.textContent = questions[currentQuestion].Answers[2];
//     liD.textContent = questions[currentQuestion].Answers[3];
    
//     var lis = ulEl.querySelectorAll("li");
//         if (i === questions [currentQuestion].correctAnswer) {
//             currentQuestion++;
//         }
//         for (let i = 0; i < lis.length; i++) {
//             lis[i].addEventListener("click", function(e) {
//                 return startQuiz(e,i)
//             });
//         }
// }


// // //Question 1
// // correctAnswer = "D"; //h3
// // wrongAnswer = "Wrong";//display text "wrong" subtracted timer with 5s.

// // //Question 2
// // h2El.textContent = "Q2. Which built-in method returns the calling string value converted to upper case?";
// // liA.textContent = "toUpperCase()";
// // liB.textContent = "toUpper()";
// // liC.textContent = "changeCase";
// // liD.textContent = "None of the above";

// // correctAnswer = "A"; //h3
// // wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// // //Question 3
// // h2El.textContent = "Q3. Which of the following function of Array object returns a string representing the array and its elements?";
// // liA.textContent = "toSource()";
// // liB.textContent = "toString";
// // liC.textContent = "splice()";
// // liD.textContent = "sort()";

// // correctAnswer = "B"; //h3
// // wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// // //Question 4
// // h2El.textContent = "Q4. What JavaScript keyword declares a variable?";
// // liA.textContent = "create";
// // liB.textContent = "if";
// // liC.textContent = "var";
// // liD.textContent = "for";

// // correctAnswer = "C"; //h3
// // wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// // //Question 5
// // h2El.textContent = "Q5. What should appear at the very end of your JavaScript? \n The<script LANGUAGE=JavaScript>tag";
// // liA.textContent = "The <script>";
// // liB.textContent = "The END statement";
// // liC.textContent = "None of the above";
// // liD.textContent = "The </script>";

// // correctAnswer = "D"; //h3
// // wrongAnswer = "Wrong!";//display text "wrong" subtracted timer with 5s.

// //for next question
// var nextButton = document.getElementById("next");
// var slides = document.querySelectorAll("slide");
// let currentQuestion = 0;

// // showSlide(currentSlide);

// // nextButton.addEventListener("click", slowNextSlide);

// // function showNextSlide() {
// //     showSlide(currentSlide + 1);
// // }

// //all questions are answered or the timer reaches 0, game is over

// var totalScore = "";
// h2El.textContent = "All done!";
// h3El.textContent = "Your final score is " + totalScore + ".";

// //save initial name and score
// var submitButton = document.querySelector("#submit");

// function showReponse(event) {
//     event.preventDefault();
//     console.log(event);
//     // var reponse = ;
    
// }

// var resultsContainer = document.querySelector("#results");

// function showResult(event) {
//     event.preventDefault();
//     console. log(event);
//     var answerContainers = quizContainer.querySelectorAll("answers");

// }


// startButton.addEventListener("click", startTimer);// the click event is listening for timer, so the time start
// submitButton.addEventListener("click", showReponse);
// startButton.addEventListener("click", startQuiz);
