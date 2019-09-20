const password = "maja";

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", (e)=>{
    if(e.target.value == password){
        h1.style.display = "block";
    }
    else{
        h1.style.display = "none";
    }
})