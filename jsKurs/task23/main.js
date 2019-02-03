//NASLUCHIWANIE I OBSLUGA ZDARZEN

//przyklad
window.addEventListener("scroll", () => {
    console.log("skroluje");
});

//przyklad2
window.addEventListener("dblclick", () => {
    console.log("podwojne klikniecie");
});

//przyklad3
const oneClickFunc = function () {
    console.log("kliknięcie");
}

document.body.addEventListener("click", oneClickFunc);

//przyklad4
document.querySelector('h1').addEventListener("click", function () {
    this.textContent += "+";
});

//przyklad5
document.querySelector("h2").addEventListener("mousemove", function () {
    this.textContent += "X";
});

//przyklad6
const h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    this.textContent += " ;)";
    this.classList.toggle("red");
})

//przyklad7
const items = document.querySelectorAll("li");
items.forEach(function (item) {
    item.addEventListener("click", function () {
        this.classList.toggle("red");
    });
});

///////////TWORZENIE I DODAWANIE ELEMENTOW DO STRONY
const liElement = document.createElement("li");
liElement.textContent = "Ostatni element";
liElement.style.backgroundColor = "yellow";
document.querySelector("ul").appendChild(liElement);

//przyklad
const divElement = document.createElement("div");
divElement.classList.add("klasaDiv");
divElement.textContent = "taki sobie nowy DIV";
divElement.style.fontSize = "20px";
divElement.style.textDecoration = "underline";
document.body.appendChild(divElement);
//document.querySelector("body").appendChild(divElement);