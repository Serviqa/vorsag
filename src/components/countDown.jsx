"use strict";

export default function countdown(originalDate) {
    let timer, days, hours, minutes, seconds;

    const dateComponents = originalDate.split(' ');

    if (dateComponents.length !== 3) {
        console.error('Invalid date format');
        return;
    }

    const day = parseInt(dateComponents[0], 10);
    const month = parseInt(dateComponents[1], 10);
    const year = parseInt(dateComponents[2], 10);

    const dateEndObj = new Date(year, month - 1, day);
    const dateEndMillis = dateEndObj.getTime();

    if (isNaN(dateEndMillis)) {
        console.error('Invalid date format');
        return;
    }

    calculate();

    timer = setInterval(calculate, 1000);

    function calculate() {
        const dateStart = new Date();
        const timeRemaining = parseInt((dateEndMillis - dateStart.getTime()) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            const remainingSeconds = timeRemaining % 86400;
            hours = parseInt(remainingSeconds / 3600);
            const remainingMinutes = remainingSeconds % 3600;
            minutes = parseInt(remainingMinutes / 60);
            seconds = parseInt(remainingMinutes % 60);

            document.getElementById("days").textContent = parseInt(days, 10);
            document.getElementById("hours").textContent = ("0" + hours).slice(-2);
            document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);
            document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);
        } else {
            clearInterval(timer);
            return;
        }
    }
}

