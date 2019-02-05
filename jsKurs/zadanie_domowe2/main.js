document.body.style.height = "10000vh";
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

let size = 10;
let flag = true;
newDiv.style.width = "100%";
newDiv.style.position = "fixed";
newDiv.style.height = `${size}px`;
newDiv.style.backgroundColor = "blue";

const changeDiv = function () {

    if (size >= (window.innerHeight / 2)) {
        flag = !flag;
    } else if (size == 0) {
        flag = !flag;
    }

    if (flag) {
        size += 10;
        newDiv.style.height = `${size}px`;
        newDiv.style.backgroundColor = "blue";
    } else {
        size -= 10;
        newDiv.style.height = `${size}px`;
        newDiv.style.backgroundColor = "red";
    }
}

window.addEventListener("scroll", changeDiv);