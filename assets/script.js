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

// var hour9Input = $("#hour-9");
var taskInput = document.getElementById("taskInput");
var saveButton = document.getElementById("saveButton");
var hourTime = document.getElementById("hourTime");
// var eventsDisplayElem = $('#')


function displayDate() {
  var currentDate = dayjs().format('MMM DD, YYYY');
  dateDisplayElem.text(currentDate);
};
displayDate();
  
// TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?


// $(document).ready(function() {
//   $('button').on('click', function() {
//     alert("you have clicked");
//     $(this).css('background-color', 'red');
//     localStorage.setItem("hour", "task");
//     console.log(localStorage);
//   });
// });

saveButton.onclick = function () {
  var hourValue = hourTime.value;
  var taskValue = taskInput.value;
  console.log(taskValue);
  console.log(hourValue);

  if (taskValue) {
    localStorage.setItem(hourValue, taskValue);
  }
};





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

function saveScheduleEvent(event) {
  event.preventdefault();
  //read user input
  var hour9 = hour9Input.val().trim();
  var events = readEventsFromStorage();
  events.push(newEvents);
  saveEventsToStorage(events);
  printEventData();

}


// function saveEventsToStorage(events) {
//   localStorage.setItem('events', JSON.stringify(events));
//   console.log(events);
// }