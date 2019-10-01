const span = document.querySelector("span");

setInterval(()=>{
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    span.textContent = `${hours}:${minutes}:${seconds}`;
},1000)