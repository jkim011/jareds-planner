//Displaying current day
var currentDay = null
var date = null

var updateDay = function() {
    date = moment(new Date())
    currentDay.text(date.format("MMMM Do, YYYY"))
}

$(document).ready(function(){
    currentDay = $("#currentDay")
    updateDay()
    setInterval(updateDay, 1000)
})

$(document).ready(function(){
    //Change timeblock color based on time
    function trackTime() {
        var currentHour = moment().hour()
        
        $(".time-block").each(function() {
            var timeBlockHour = parseInt($(this).attr("id"));

            if (timeBlockHour < currentHour) {
                $(this).removeClass("future")
                $(this).removeClass("present")
                $(this).addClass("past")
            } else if (timeBlockHour === currentHour) {
                $(this).removeClass("past")
                $(this).removeClass("future")
                $(this).addClass("present")
            } else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    //Save button and local storage 
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, text)
    })

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
        
    
    trackTime()

})