﻿$(document).ready(function () {

    $.ajax({
    
        url: "Timer.cshtml",
        type: "get",
        data: {
            roomcode: '<%= ViewContext.RouteData.Values["roomcode"] %>',
            table: '<%= ViewContext.RouteData.Values["table"] %>',
        },
        success: function (response) {
            startTimer(response); // Returns timer from db
        }
    });

    function startTimer(timer) {
        var timer = timer.split(":"); // Split timer

        var targetHours = parseInt(timer[0]);
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

        setInterval(function () {
            var displayHours = currentHours;
            var displayMinutes = currentMinutes;
            var displaySeconds = currentSeconds;

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