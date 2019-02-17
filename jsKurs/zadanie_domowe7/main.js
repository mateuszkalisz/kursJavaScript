const input = document.body.querySelector("input");

const passwords = ["blaBla", "Ania", "FeRRari"];
const messages = ["taki portal transportowy", "fajne imie", "super auto!"];

const div = document.body.querySelector("div");

const showMessage = function () {
    div.textContent = "";
    console.log(this.value);
    passwords.forEach((password, index) => {
        if (password.toLowerCase() === this.value.toLowerCase()) {
            div.textContent = messages[index];
        }
    })
}

input.addEventListener("input", showMessage);