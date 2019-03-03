// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let indexTxt = 0;
const txtTemp = txt.join(",")

function clearText() {
    spnText.textContent = "";
}

// Implementacja
const addLetter = () => {

    spnText.textContent += txtTemp[indexTxt];
    indexTxt++;
    if (txtTemp[indexTxt] == ",") {
        setTimeout(clearText, 100);
    }

    // Użyj w środku setTimeout
    if (indexTxt === txtTemp.length) clearInterval(indexTyping);
}


const indexTyping = setInterval(addLetter, 100);

//addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);