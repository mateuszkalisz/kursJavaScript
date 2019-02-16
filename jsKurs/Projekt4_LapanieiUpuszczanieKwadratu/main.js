const div = document.body.querySelector("div");
let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (event) => {
    console.log("wcisniete");
    div.style.backgroundColor = "gray";
    insertDivX = event.offsetX;
    insertDivY = event.offsetY;
    drawActive = !drawActive;
})

div.addEventListener("mousemove", (event) => {
    if (drawActive) {
        console.log("ruszam");
        divX = event.clientX - insertDivX;
        divY = event.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }

})

div.addEventListener("mouseup", () => {
    console.log("puscilem");
    div.style.backgroundColor = "black";
    drawActive = !drawActive;
})