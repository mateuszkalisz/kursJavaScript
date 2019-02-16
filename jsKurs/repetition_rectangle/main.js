const div = document.body.querySelector("div");
let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let insertX;
let insertY;

let clickIsActiveFlag = false;

div.addEventListener("mousedown", (event) => {
    console.log("klikniete");
    div.style.backgroundColor = "gray";

    insertX = event.offsetX;
    insertY = event.offsetY;
    console.log(insertX, insertY);
    clickIsActiveFlag = !clickIsActiveFlag;
})

div.addEventListener("mouseup", () => {
    console.log("puszczone");
    div.style.backgroundColor = "black";
    clickIsActiveFlag = !clickIsActiveFlag;
})

div.addEventListener("mousemove", (event) => {
    console.log("ruch");
    if (clickIsActiveFlag) {
        divX = event.clientX - insertX;
        divY = event.clientY - insertY;

        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})