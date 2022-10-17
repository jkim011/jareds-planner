//Displaying current day
var currentDay = null
var date = null

var updateDay = function() {
    date = moment(new Date())
    currentDay.text(date.format("MMMM Do, YYYY"))
}

var Time = $(document).ready(function(){
    currentDay = $("#currentDay")
    updateDay()
    setInterval(updateDay, 1000)
})



    // var hour = new Date().getHours();
    // console.log(hour)

    // var now = moment().hour()
    // console.log(now)
