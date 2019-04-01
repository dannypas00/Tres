$(document).ready(function () {
    var roomcode = $("#roomcode").html();
    $("#roomcode").remove();

    var table = $("#table").html();
    $("#table").remove();

    console.log(roomcode);
    console.log(table);
    //Ajax connect with url Timer get the data roomcode
    $.ajax({
        url: "Timer.cshtml",
        type: "get",
        data: {
            roomcode: roomcode,
            table: table

        },
        success: function (response) {
            startTimer(response); // Returns timer from db
        }
    });

   
    function startTimer(timer) {
        timer = timer.split(":"); // Split timer

        var targetHours = parseInt(timer[0]); // Parse hours to int
        var targetMinutes = parseInt(timer[1]);
        var targetSeconds = parseInt(timer[2]);

        var currentHours = 0; 
        var currentMinutes = 0;
        var currentSeconds = 0;

        var displayHours;
        var displayMinutes;
        var displaySeconds;

        var round = 1;
        document.querySelector('#rnumber').innerHTML = round;

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

            document.querySelector('.timer').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


            // if condition is met round + 1
            if (currentHours == targetHours && currentMinutes == targetMinutes && currentSeconds == targetSeconds) {
                round++;
                document.querySelector('#rnumber').innerHTML = round;
              
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
});