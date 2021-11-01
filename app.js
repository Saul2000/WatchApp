(function(){
    var updateHour = function(){
        var date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            weekDay = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        var pHours = document.getElementById('hours'),
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pWeekDay = document.getElementById('weekDay'),
            pDay = document.getElementById('day'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        var Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pWeekDay.textContent = Week[weekDay];

        pDay.textContent = day;

        var Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        pMonth.textContent = Months[month];

        pYear.textContent = year;

        if(hours >= 12){
            hours = hours - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        };

        if (hours == 0) {
            hours = 12;
        };
        pHours.textContent = hours;

        pAMPM.textContent = ampm;

        if(minutes < 10){
            minutes = "0" + minutes;
        }
        pMinutes.textContent = minutes;

        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        pSeconds.textContent = seconds;
    }; 

    updateHour();
    var interval = setInterval(updateHour, 1000);
}())