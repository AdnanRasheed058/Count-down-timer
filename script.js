


function showTime() {
    let hrs = document.querySelector(".hours");
    let mns = document.querySelector(".minutes");
    let sec = document.querySelector(".seconds");

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hrs.innerHTML = hours;
    mns.innerHTML = minutes;
    sec.innerHTML = seconds;
};

setInterval(showTime, 1000);