$(document).ready(function () {  
    //displays today's date at the top of the calendar
      var today = dayjs().format('dddd, MMMM D');
      $('#currentDay').text(today);
    //assigns past, present, or future class to each hour row by comparing the time on the calendar row to the current hour.
        var timeNow=dayjs().hour();
        $('.time-block').each( function (){
        var timeBlock = parseInt($(this).attr('id').split('-')[1]);
        if (timeBlock === timeNow) {
          $(this).addClass('present');
          $(this).removeClass('past');
          $(this).removeClass('future')}
         else if (timeBlock > timeNow){
          $(this).addClass("future");
          $(this).removeClass('past');
           $(this).removeClass('present')}
           else {
            $(this).removeClass('present');
            $(this).removeClass('future');
           }
           }
           )
           displayText();
      }
      )
    //event listener that saves data entered into the planner to local storage, also runs the displayText() function that will display the saved text even if the site is refreshed.
      $('.saveBtn').click(function(){
        var hour;
        var hourText;
        hourText =$(this).siblings(".description").val();
        hour = $(this).siblings(".hour").text();
        localStorage.setItem(hour, JSON.stringify(hourText));
        displayText();
      })
    //gets saved text for each hour and displays it 
    function displayText(){
      $('.9am').text(JSON.parse(localStorage.getItem("9AM")));
      $('.10am').text(JSON.parse(localStorage.getItem("10AM")));
      $('.11am').text(JSON.parse(localStorage.getItem("11AM")));  
      $('.12pm').text(JSON.parse(localStorage.getItem("12PM")));
      $('.1pm').text(JSON.parse(localStorage.getItem("1PM")));
      $('.2pm').text(JSON.parse(localStorage.getItem("2PM")));
      $('.3pm').text(JSON.parse(localStorage.getItem("3PM")));  
      $('.4pm').text(JSON.parse(localStorage.getItem("4PM")));
      $('.5pm').text(JSON.parse(localStorage.getItem("5PM")));
    
      }
    