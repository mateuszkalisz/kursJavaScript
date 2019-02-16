const password = "user";

const inputPassword = document.getElementById("pass");


const messageDiv = document.body.querySelector(".message");

inputPassword.addEventListener("input", (event) => {
    if (event.target.value === password)
        messageDiv.textContent = "brawo, zgadles haslo!"
    else {
        messageDiv.textContent = "";
    }
})

inputPassword.addEventListener("focus", (e) => {
    e.target.classList.add("action");
    // e.target.style.backgroundColor = "black";
    // e.target.style.color = "white";
})

inputPassword.addEventListener("blur", (e) => {
    e.target.classList.remove("action");
    // e.target.style.backgroundColor = "white";
    // e.target.style.color = "black";
})