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
