// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");

const clockView = document.querySelector(".time div");

let time = 0;
let active = false;
let idI;

const start = () => {
    time++;
    clockView.textContent = (time / 100).toFixed(2);
}

const startStoper = () => {
    if (!active) {
        btnStart.textContent = "Pauza";
        active = !active;
        idI = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = "Start";
        clearInterval(idI);
    }
}

const resetStoper = () => {
    time = 0;
    clockView.textContent = "---";
    clearInterval(idI);
    active = false;
    btnStart.textContent = "Start";
}




btnStart.addEventListener("click", startStoper);
btnReset.addEventListener("click", resetStoper);