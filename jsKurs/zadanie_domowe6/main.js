let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {

    // if (e.keyCode === 38) {
    //     red -= 1;
    //     green -= 1;
    //     blue -= 1;
    //     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    //     if (red, green, blue === 0) {
    //         red = 100,
    //             green = 100,
    //             blue = 100;
    //     }

    // } else if (e.keyCode === 40) {
    //     red += 1;
    //     green += 1;
    //     blue += 1;
    //     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

    //     if (red, green, blue === 255) {
    //         red = 100,
    //             green = 100,
    //             blue = 100;
    //     }

    // }

    switch (e.keyCode) {
        case 38:
            {
                red -= 1;
                green -= 1;
                blue -= 1;
                document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

                if (red, green, blue === 0) {
                    red = 100,
                        green = 100,
                        blue = 100;
                }
            }
            break;

        case 40:
            {
                red += 1;
                green += 1;
                blue += 1;
                document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

                if (red, green, blue === 255) {
                    red = 100,
                        green = 100,
                        blue = 100;
                }
            }
            break;

        default:
            {
                console.log(e.keyCode);
                console.log("Zły klawisz");
            }

    }
}

window.addEventListener("keydown", changeColor);