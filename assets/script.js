var currentDayEl = $("#currentDay");
var timeBlockEl = $(".time-block");
var now = [];
var now = moment().format("dddd, MMM Do, YYYY hh:mm a");
var displayTime = []; 
var hourEl = $("#hour");

//Display time at top of the page
currentDayEl.text(now);

setInterval(displayTime, 1000); //updates time to the second

//sets text to local storage when save button is clicked
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
  
  localStorage.setItem(time, text);
});

//make the function for color change
function timeTracker () {
  var timeNow = moment().format('h');
  //gets the array
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    //sets the color based on past, present, or future, using HTML compared to moment
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
    };
  });
};
//retrieve saved events from local storage and display on page 
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//call the function for color change
timeTracker();
});