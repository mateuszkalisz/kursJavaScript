const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    btn.textContent = "Dodaj liste 10 elementów";
    btnReset.textContent = "Wyczyść";
    const ulList = document.createElement("ul");
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(ulList);

    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);
}

let order = 1;
let size = 10;

const createLiElements = function () {

    for (let i = order; i < order + 10; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = `Element listy nr ${i}`;
        liElement.style.fontSize = `${size++}px`;
        liElement.id = i;
        document.body.querySelector("ul").appendChild(liElement);
    }
    order += 10;
}

const cleanList = () => {
    document.querySelector("ul").textContent = "";
    order = 1;
    size = 10;
}

init();