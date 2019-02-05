//1 SPOSOB - PETLA FOREACH

// const liElements = document.body.querySelectorAll("ul>li");
// const btn = document.body.querySelector("button");
// let size = 10;

// function changeSize() {
//     liElements.forEach((liElement) => {
//         liElement.style.display = "block";
//         liElement.style.fontSize = size + "px";
//     })
//     size += 2;
// }

// btn.addEventListener("click", changeSize);

//2 SPOSOB - PETLA FOR

const liElements = document.body.querySelectorAll("ul>li");
const btn = document.body.querySelector("button");
let size = 10;

function changeSize() {

    for (let i = 0; i < liElements.length; i++) {
        if (liElements[i].style.display === "") {
            liElements[i].style.display = "block";
        }
        liElements[i].style.fontSize = size + "px";
    }

    size += 2;
}

btn.addEventListener("click", changeSize);