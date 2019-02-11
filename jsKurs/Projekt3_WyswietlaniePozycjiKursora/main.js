const h1 = document.body.querySelector("h1")

document.body.addEventListener("mousemove", (e) => {
    //h1.textContent = `${e.clientX}, ${e.clientY}`;
    //h1.textContent = `${e.pageX}, ${e.pageY}`;
    h1.textContent = `${e.screen}, ${e.screen}`;
})