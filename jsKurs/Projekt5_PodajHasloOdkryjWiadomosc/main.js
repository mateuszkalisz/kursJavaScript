const input = document.getElementById("pass");

const password = "user";
const message = "wyjechalam na zawsze";
const div = document.body.querySelector(".message");


input.addEventListener("input", (e) => {
    console.log(e.target.value);

    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = "";
    } else {
        div.textContent = "";
    }
})

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
    //e.target.classList.toggle("active");
})