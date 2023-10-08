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
    var parentId = $(this).parent().attr("id");
    var value = $(this).parent().children('textarea')[0].value.trim();
    localStorage.setItem(parentId, value);
  });

  updateCalendar();
  loadCalendar();

});

function loadCalendar() {
  for (var key in localStorage){
    console.log(key)
    if (key.startsWith("hourTime-")) {
      $("#" + key).children('textarea')[0].value=localStorage.getItem(key);
    }
 }
}


// $("hourTime-9 .textArea").val(localStorage.getItem("note"));
// var storedNote =JSON.parse(localStorage.getItem('note'));
// console.log(storedNote)

//how do I get all the values to load and go to the right place
//how do I get them to store as an array
// $("hourTime-9").textArea.value = storedNote; //put in chat GPT and ask

// $(document).ready(function () {
//   var storedNote = localstorage.getItem('hourtime-9');
//   if ()
// })



// TODO: Add a listener for click events on the save button. This code should
//     // use the id in the containing time-block as a key to save the user input in
//     // local storage. HINT: What does `this` reference in the click listener
//     // function? How can DOM traversal be used to get the "hour-x" id of the
//     // time-block containing the button that was clicked? How might the id be
//     // useful when saving the description in local storage?








