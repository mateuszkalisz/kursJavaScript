const input = document.body.querySelector("input");

const passwords = ["blaBla", "Ania", "FeRRari"];
const messages = ["taki portal transportowy", "fajne imie", "super auto!"];

const div = document.body.querySelector("div");

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(passwords[index]);
})


const showMessage = function () {
    div.textContent = "";
    console.log(this.value);
    const inputPass = this.value.toLowerCase()
    passwords.forEach((password, index) => {
        if (password === inputPass) {
            div.textContent = messages[index];
        }
    })
}

input.addEventListener("input", showMessage);