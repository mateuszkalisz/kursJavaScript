const counter = () =>{
    let number = 0;
    const add = () =>{
        number++;
        document.body.textContent = `liczba klikniec to: ${number}`;
    }
    return add;
}

const handleCounter = counter();

window.addEventListener("click", handleCounter);