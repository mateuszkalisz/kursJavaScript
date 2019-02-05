const square = document.createElement("div");
document.body.appendChild(square);

let size = 100; //wielkość kwadratu

let grow = true;

square.style.height = `${size}px`;
square.style.width = `${size}px`;

window.addEventListener("scroll", function () {

    if (size >= (window.innerWidth / 2)) {
        grow = !grow;
    } else if (size == 10) {
        grow = !grow;
    }

    if (grow) {
        size += 10;
        square.style.height = `${size}px`;
        square.style.width = `${size}px`;
    } else {
        size -= 10;
        square.style.height = `${size}px`;
        square.style.width = `${size}px`;
    }
});