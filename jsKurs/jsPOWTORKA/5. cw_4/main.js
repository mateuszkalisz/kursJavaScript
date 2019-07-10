const div = document.querySelector("div");

const btn = document.createElement("button");
btn.textContent = "kliknij";
div.appendChild(btn);

const ul = document.querySelector("ul");
ul.className = "blank"

const liElements = document.querySelectorAll("li");

let size = 12;

btn.addEventListener("click", ()=>{
    ul.className = "show";
    for(let i=0; i<liElements.length; i++){
        size++;
        liElements[i].style.fontSize = `${size}px`;

    }
})



btn.addEventListener("click", showElements);
