const btn = document.body.querySelector("button");

let number = 1;

function addListElement() {

    const liElement = document.createElement("li");
    liElement.textContent = number;

    if ((number % 3) == 0) {
        liElement.classList.add("bolded");
    }

    document.body.querySelector("ul").appendChild(liElement);
    number += 2;
}

btn.addEventListener("click", addListElement);