const endTime = new Date('2019-05-04 17:00:00').getTime();

const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");

setInterval(() => {
    const nowTime = new Date().getTime();
    //const time = endTime - nowTime;
    const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24));
    spanD.textContent = days < 10 ? `0${days}` : days;

    const hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    spanH.textContent = hours < 10 ? `0${hours}` : hours;

    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    spanM.textContent = minutes < 10 ? `0${minutes}` : minutes;

    const seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    spanS.textContent = seconds < 10 ? `0${seconds}` : seconds;

}, 1000)