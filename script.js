var currentDayEl = $("#currentDay");
var timeBlokEl = $("#timeBlock");
var now = [];
var now = moment().format("dddd, MMM Do, YYYY hh:mm a");
var displayTime = []; 

//Display time at top of the page
currentDayEl.text(now);
console.log(now);

setInterval(displayTime, 1000); //updates time to the second

function showTime() {
  var objDate = newDate();
    var hour = objDate.getHours();
    if(hours >=9 && hours <=17) {
      $(".hour").addClass("past");
    } else {
      $(".hour").addlass("future");
    }
    
    //if rightNow < timeBlockEl("#id") {
      //compare hour with id in class "time-block" in HTML
    }
  
//}

