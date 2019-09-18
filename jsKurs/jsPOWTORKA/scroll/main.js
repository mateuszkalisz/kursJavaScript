const square = document.createElement('div');
document.body.appendChild(square);

let size = 10;
let grow = true;

square.style.height = `${size}px`;
square.style.width = `${size}px`;

window.addEventListener("scroll", function(){
    if(grow == true){
        if(size<window.innerWidth/2){
            size +=5;
        }
        else{
            grow = !grow;
        }
    }
    else{
        size -=5;
        if(size<10){
            grow=!grow;
        }
    }

    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
    console.log("scrolluje");
})