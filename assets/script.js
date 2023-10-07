// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//     // TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?
//     //
//     // TODO: Add code to apply the past, present, or future class to each time
//     // block by comparing the id to the current hour. HINTS: How can the id
//     // attribute of each time-block be used to conditionally add or remove the
//     // past, present, and future classes? How can Day.js be used to get the
//     // current hour in 24-hour time?
//     //
//     // TODO: Add code to get any user input that was saved in localStorage and set
//     // the values of the corresponding textarea elements. HINT: How can the id
//     // attribute of each time-block be used to do this?
//         //localStorage
//     //
//     // DONE: Add code to display the current date in the header of the page.
//       //USE DAY.JS

//   });
  

// handle displaying the time
var dateDisplayElem = $("#currentDay");


function displayDate() {
  var currentDate = dayjs().format('MMM DD, YYYY');
  dateDisplayElem.text(currentDate);
};
displayDate();


function updateCalendar(){
  $('#calendarContainer').children('div').each((index,item)=> {
    var hour = parseInt($(item).attr("id").split("-")[1]);
    var currentHour = dayjs().hour();
    
    // console.log(hour)
    if (hour === currentHour) {
      $(item).addClass("present");
      $(item).removeClass("future");
      $(item).removeClass("past");
      // console.log(this)
    }
    //hour is past
    else if (hour < currentHour) {
      $(item).removeClass("present");
      $(item).removeClass("future");
      $(item).addClass("past");
    }
    //hour is future
    else {
      $(item).removeClass("present");
      $(item).addClass("future");
      $(item).removeClass("past");
    }
  });
};


$(document).ready(function() {
  $('button').on('click', function() {
    alert("you have clicked");
    $(this).css('background-color', 'red');
    var parentId = $(this).parent().attr("id");
   
   
  var value = $(this).parent().children('textarea')[0].value.trim();

    localStorage.setItem(parentId, value);
  });

  updateCalendar();
  

});




// var hour9Input = $("#hour-9");

// var eventsDisplayElem = $('#')

// function nineOclock() {
//   var taskInput9 = document.getElementById("taskInput9");
//   var saveButton9 = document.getElementById("saveButton9");
//   var hourTime9 = document.getElementById("hourTime9");

//   saveButton9.onclick = function () {
//     var hourValue9 = hourTime9.value;
//     var taskValue9 = taskInput9.value;
//     console.log(taskValue9);
//     console.log(hourValue9);
  
//     if (taskValue9) {
//       localStorage.setItem("hour9", taskValue9);
//     };
//   };
// };
// nineOclock();

// function tenOclock() {
//   var taskInput10 = document.getElementById("taskInput10");
//   var saveButton10 = document.getElementById("saveButton10");
//   var hourTime10 = document.getElementById("hourTime10");

//   saveButton10.onclick = function () {
//     var hourValue10 = hourTime10.value;
//     var taskValue10 = taskInput10.value;
//     console.log(taskValue10);
//     console.log(hourValue10);
  
//     if (taskValue10) {
//       localStorage.setItem("hour10", taskValue10);
//     };
//   };
// };
// tenOclock();
 
// function renderTask9() {
//   var lastTask9 = JSON.parse(localStorage.getItem("taskInput9"))
// }
// renderTask9

// TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?










// function readEventsFromStorage() {
//   var events = localStorage.getItem('events');
//   if (events) {
//     events = JSON.parse(events);
//   } else {
//     events = [];
//   }
//   return events;
// }

// function printEventsData() {
//   eventsDisplayElem
// }

// function saveScheduleEvent(event) {
//   event.preventdefault();
//   //read user input
//   var hour9 = hour9Input.val().trim();
//   var events = readEventsFromStorage();
//   events.push(newEvents);
//   saveEventsToStorage(events);
//   printEventData();

// }


// function saveEventsToStorage(events) {
//   localStorage.setItem('events', JSON.stringify(events));
//   console.log(events);
// }