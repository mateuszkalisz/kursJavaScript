const passwords = ["haHaha", "blabLa"];
const msg = ["witaj, podales pierwsze haslo", "witaj, podales drugie haslo"];

const input = document.querySelector("input");

passwords.forEach((item,i)=>{
    passwords[i] = item.toLowerCase();
})

checkMessage = (e) =>{
passwords.forEach((item, i)=>{
    if(e.target.value.toLowerCase() == item){
        document.querySelector("h1").textContent = msg[i];
    }
})
}



input.addEventListener("input", checkMessage);