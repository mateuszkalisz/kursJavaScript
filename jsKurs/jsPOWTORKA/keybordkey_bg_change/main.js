let x = 100;

window.addEventListener("keydown", (e)=>{
    console.log("klik");
    if(e.keyCode ==38 && x<=255){
        x+=5;
        document.body.style.backgroundColor = `rgb(${x},${x},${x})`;
    }
    else if(e.keyCode==40 && x>=0){
        x-=5;
        document.body.style.backgroundColor = `rgb(${x},${x},${x})`;
    }
    
})