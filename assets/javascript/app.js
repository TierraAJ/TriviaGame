$(document).ready(function() {

var counter = 60;
var timer = $("#timer");
var score = 0;

function setup() {
    timer.text(counter);
    setInterval(timeIt, 1000);
    $("#timer").text("01:00");
}
setup();
function timeIt() { 
    counter--;
    timer.text(counter);   
    console.log("Time " + counter);    

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(counter);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "timer" div.
    $("#timer").text(converted);
}
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
  
  var value = $(".answer").attr("value");

function points() {
    if (value === "true") {
        score++;
        console.log(score);
    }

    if (score > 4){
        alert("You Win!");
    }
    else if (score < 4){
        alert("What kind of fan are you?");
    }
}
points();
  function stop() {
if (timer === "00:00") {
// DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
    stop(); 
        }
    }   
});