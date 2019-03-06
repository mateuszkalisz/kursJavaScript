//przyklad

// function x() {
//     let number = 0;

//     function y() {
//         console.log(number);
//     }

//     return y;
// }

// const example = x();

// example();


///////counter///////////

const add = (start = 0) => {
    let number = start;

    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika kliknięć: ${number}`;
    }
}

const counter = add();
const counterFrom10 = add(10);

document.addEventListener("click", counterFrom10);