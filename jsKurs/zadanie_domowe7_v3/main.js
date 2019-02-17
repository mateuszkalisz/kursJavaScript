const input = document.body.querySelector("input");

const passwords = ["blaBla", "Ania", "FeRRari"];
const messages = ["taki portal transportowy", "fajne imie", "super auto!"];

const div = document.body.querySelector("div");

LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = function (e) {
    div.textContent = "";
    const currentText = e.target.value.toLowerCase();
    for (let i = 0; i < LCPasswords.length; i++) {
        if (currentText === LCPasswords[i]) {
            div.textContent = messages[i];
        }
    }
}

input.addEventListener("input", showMessage);