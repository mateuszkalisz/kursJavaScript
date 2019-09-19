const h1 = document.createElement("h1");

    window.addEventListener("mousemove", (e)=>{
        h1.textContent = `${e.clientX}, ${e.clientY}`;
    })

document.body.appendChild(h1);