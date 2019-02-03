//document przykladowe

document.title;
document.domain;
document.body;

//window przykladowe
window.innerHeight;
window.scrollY;
window.alert("popup wyskakuje");

window.setTimeout(function () {
    alert("uplynelo 5 sek")
}, 5000);

let timer = 0;
window.setInterval(function () {
    //    console.log(++timer);
}, 1000);


let time = 0;
setTimeout(showTime, 5000);

function showTime() {
    time += 5;
    console.log(`Jestes juz na tej stronie ${time} sekund`);
    setTimeout(showTime, 5000);
}