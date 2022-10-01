//Setting countdown timer
var number = 6;
var intervalId;

document.getElementById("start").addEventListener("click", run);

function run(){
    intervalId = setInterval(decrement, 1000);
    if (number === 0) {
        alert("Time Up!");
    }
}

function decrement(){
    number--;
    document.getElementById("timer").innerHTML = "<h2>Time:" + number + "</h2>";

}
