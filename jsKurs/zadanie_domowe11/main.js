const timer = () => {
    let time = 0;

    function changeTime() {
        time++;
        document.querySelector("h1").textContent = `Czas wyświetlania tej strony wynosi: ${time} sek`;
    }

    setInterval(changeTime, 1000);

    return changeTime;
}

const currentTime = timer();
currentTime();