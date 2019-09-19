const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");

let size = 10;

// btn.addEventListener("click", ()=>{
//     console.log("dziala");

//     for(i=0; i<liItems.length; i++){
//         liItems[i].style.display = "block";
//         liItems[i].style.fontSize = `${size}px`;
//     }
//     size+=5;
// })

btn.addEventListener("click", ()=>{
    liItems.forEach(li => {
        if(li.style.display != "block"){
            li.style.display = "block";
        }
        li.style.fontSize = `${size}px`;
    })
    size+=5;
})