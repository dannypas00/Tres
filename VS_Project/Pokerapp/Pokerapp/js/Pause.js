
var roomcode = $("#roomCode").html();
$("#roomCode").remove();

var table = $("#table").html();
$("#table").remove();

var hrs = $('#Hours').html();
var mns = $('#Minutes').html();
var scs = $('#Seconds').html();

console.log("roomcode" + roomcode);
console.log("table" + table);
//Ajax connect with url Timer get the data roomcode
$.ajax({
    url: "PauseTimer.cshtml",
    type: "get",
    data: {
        roomCode: roomcode,
        table: table
    },
    success: function (response) {
        PauseTimer(response); // Returns timer from db
    }
});

function PauseTimer(timer) {
    var timer = timer.split(":"); // Split timer

    var targetHours = parseInt(timer[0]); // Parse hours to int
    var targetMinutes = parseInt(timer[1]);
    var targetSeconds = parseInt(timer[2]);

    var currentHours = hrs;
    var currentMinutes = mns;
    var currentSeconds = scs;

    //Increment timer
    setInterval(function () {
        var displayHours = currentHours;
        var displayMinutes = currentMinutes;
        var displaySeconds = currentSeconds;

        sessionStorage.setItem("timer", displayHours);


        if (currentHours.toString().length < 2) {
            displayHours = "0" + currentHours;
        }

        if (currentMinutes.toString().length < 2) {
            displayMinutes = "0" + currentMinutes;
        }

        if (currentSeconds.toString().length < 2) {
            displaySeconds = "0" + currentSeconds;
        }

        document.querySelector('.timer-pause').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


        // if condition is met round + 1
        if (currentHours == targetHours && currentMinutes == targetMinutes && currentSeconds == targetSeconds) {
            alert("pause");
            currentHours = 0;
            currentMinutes = 0;
            currentSeconds = 0;
        }

        currentSeconds++;

        if (currentSeconds == 60) {
            currentMinutes++;
            currentSeconds = 0;
        }

        if (currentMinutes == 60) {
            currentHours++;
            currentMinutes = 0;
        }
    }, 1000);
}