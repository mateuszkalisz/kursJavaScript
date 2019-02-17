const input = document.getElementById("pass");

const passwords = ["user", "wiosna", "ania"];
const messages = ["wyjechalam na zawsze", "piekna pora roku", "fajne imie masz"];
const div = document.body.querySelector(".message");


input.addEventListener("input", function (e) {

    div.textContent = "";
    //console.log(e.target.value);
    //console.log(this.value);
    const text = e.target.value;
    console.log(text);

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })

})

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
    //e.target.classList.toggle("active");
})

//funkcja strzałkowa nie ma wlasnego this, this jest dziedziczone a nie tworzone
//jezeli chcemy uzyc this to najlepiej zadeklarowac funkcję za pomocą słówka this

// if (password === e.target.value) {
//     div.textContent = message;
//     e.target.value = "";
// } else {
//     div.textContent = "";
// }