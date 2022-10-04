// Timer setting
var currentTimeContainerElement = document.querySelector(".current-time-container");
var currentTimeElement = document.querySelector("#current-time");
var initTime = 100;
var currentTime = initTime;
var deduction =10;
var timer;
currentTimeElement.textContent = currentTime;
function actionTimer() {
    timer = setInterval(function() {
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
    setTimeout(function() {
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
            var isAnsCorrect = liItemElement.className.includes("correct");
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
                judgeCorrectElement.style.display = "none";
                judgeWrongElement.style.display = "block";
                countdownHideJudgeItem(1000);

            }
            sectionsElement[currentPage].style.display = "none";
            sectionsElement[currentPage + 1].style.display = "block";

            //final page
            if (currentPage +1 === sectionsElement.length -1) {
                clearInterval(timer);
                var sectionFinalPageElement = sectionsElement[sectionsElement.length - 1];
                var finalScoreElement = sectionFinalPageElement.querySelector("#final-score");
                finalScoreElement.textContent = currentTime;
            }
        };
    }
}

//For opening page
var btnStartElement = document.querySelector("#btn-start");
var sectionHomeElement = sectionsElement[0];
btnStartElement.addEventListener("click", function () {
    sectionHomeElement.style.display = "none";

    var sectionPage1Element = sectionsElement[1];
    sectionPage1Element.style.display = "block";

    actionTimer();
})

//For Question 1
var page1LisElement = sectionsElement[1].querySelectorAll("li");
sectionLiElementOnClick(page1LisElement, 1);

//For Question 2
var page2LisElement = sectionsElement[2].querySelectorAll("li");
sectionLiElementOnClick(page2LisElement, 2);

//For Question 3
var page3LisElement = sectionsElement[3].querySelectorAll("li");
sectionLiElementOnClick(page3LisElement, 3);

//For Question 4
var page4LisElement = sectionsElement[4].querySelectorAll("li");
sectionLiElementOnClick(page4LisElement, 4);

//For Question 5
var page5LisElement = sectionsElement[5].querySelectorAll("li");
sectionLiElementOnClick(page5LisElement, 5);


//For final page setting
var sectionFinalPageElement = sectionsElement[sectionsElement.length - 1];
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
var btnGoBackElement = scoreSheetContainerElement.querySelector("#btn-goback");
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