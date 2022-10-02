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

startButton.addEventListener("click", startTimer);

//quiz set up


//wrong answer with subtracted time from the clock


//all questions are answered or the timer reaches 0, game is over


//save initial name and score
