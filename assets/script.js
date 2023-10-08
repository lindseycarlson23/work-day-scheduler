 

// handle displaying the time
var dateDisplayElem = $("#currentDay");


function displayDate() {
  var currentDate = dayjs().format('MMM DD, YYYY');
  dateDisplayElem.text(currentDate);
};
displayDate();


//color-codes the hours based on whether they are past, present, or future
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


//save button event listener
$(document).ready(function() {
  $('button').on('click', function() {
    var parentId = $(this).parent().attr("id");
    var value = $(this).parent().children('textarea')[0].value.trim();
    localStorage.setItem(parentId, value);
  });

  updateCalendar();
  loadCalendar();

});

//load any stored text in time-blocks when page loads
function loadCalendar() {
  for (var key in localStorage){
    console.log(key)
    if (key.startsWith("hourTime-")) {
      $("#" + key).children('textarea')[0].value=localStorage.getItem(key);
    }
 }
};









