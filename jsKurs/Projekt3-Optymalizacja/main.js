const h1 = document.body.querySelector("h1")

document.body.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = `${x}, ${y}`;

    document.body.style.backgroundColor = `rgb(${x/width*100}%, ${y/height*100}%, ${x/y/(width+height*100)}%)`;

})