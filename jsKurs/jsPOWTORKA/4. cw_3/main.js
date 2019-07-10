const square = document.createElement("div");

let flag = true;

let size = 100;
square.style.height = `${size}px`;
square.style.width = `${size}px`;
document.body.appendChild(square);

window.addEventListener("scroll", ()=>{
    
 if(flag){
    size+=10;
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
 }

 else{
     size-=10;
     square.style.height = `${size}px`;
     square.style.width = `${size}px`;
}

if(size >= window.innerHeight/2){
    flag = false;
}

else if(size<=100){
    flag = true;
}


    square.style.height = `${size}px`;
    square.style.width = `${size}px`;

})