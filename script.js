var currentDayEl = $("#currentDay");
var timeBlockEl = $(".time-block");
var now = [];
var now = moment().format("dddd, MMM Do, YYYY hh:mm a");
//console.log(now)
var displayTime = []; 
var hourEl = $("#hour");

//Display time at top of the page
currentDayEl.text(now);
//get current time
var currentTime = moment().format('h A');
//console.log(currentTime);

setInterval(displayTime, 1000); //updates time to the second

//if hour is < current time, I want the textarea to turn color

//make the function for color change
function timeTracker () {
  var timeNow = moment().format('h');

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    
    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime > timeNow) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
  })
}
//call the function for color change
timeTracker();