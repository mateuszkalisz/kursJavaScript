const btnStart = document.querySelector(".main");
const btnRestart = document.querySelector(".reset");

const panelView = document.querySelector(".time div");

let time = 0;
let active = false;
let indexInterval;

const start = () => {
    time++;
    panelView.textContent = (time / 100).toFixed(2);
}

const stopperStart = () => {
    if (!active) {
        btnStart.textContent = "Pauza";
        active = !active;
        indexInterval = setInterval(start, 10);
    } else {
        btnStart.textContent = "Start";
        active = !active;
        clearInterval(indexInterval);
    }
}

const stopperRestart = () => {
    active = false;
    btnStart.textContent = "Start";
    time = 0;
    panelView.textContent = "---";
    clearInterval(indexInterval);
}


btnStart.addEventListener("click", stopperStart);
btnRestart.addEventListener("click", stopperRestart);