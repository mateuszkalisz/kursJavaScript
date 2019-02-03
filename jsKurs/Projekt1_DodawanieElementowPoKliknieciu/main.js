const btn = document.querySelector("button");

let number = 1;

const addElement = function () {
    console.log(`Nastąpił klik!`);
    const divElement = document.createElement("div");
    divElement.textContent = number;

    if ((number % 5) == 0) {
        divElement.classList.add("circle");
    }

    if ((number % 10) == 0) {
        divElement.textContent = "Maja";
        divElement.style.height = "100px";
        divElement.style.width = "100px";
        divElement.style.textAlign = "center";
        divElement.style.lineHeight = "100px";
    }
    document.body.appendChild(divElement);
    number++;
}

btn.addEventListener("click", addElement);