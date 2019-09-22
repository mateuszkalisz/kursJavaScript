const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

const names = ["hania", "maja", "zosia", "malgosia", "angelika"];

btn.addEventListener("click", ()=>{
    const index = Math.floor(Math.random()*names.length);
    h1.textContent = `Wylosowane imię dla dziewczynki to: ${names[index]}`;
})