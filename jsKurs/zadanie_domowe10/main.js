const slideList = [{
        img: "images/img1.jpg",
        text: "Pierwszy tekst",
    },
    {
        img: "images/img2.jpg",
        text: "Drugi tekst",

    },
    {
        img: "images/img3.jpg",
        text: "Trzeci tekst",
    }
];

//interfejs

const time = 2000;
let active = 0;

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

//implementacja

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

const changeSlide = function () {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const keyChangeSlide = function (e) {

    if (e.keyCode === 37) {

        if (active === 0) {
            active = 2;
        } else {
            active--;

        }
        clearInterval(indexOfSetInterval);

    } else if (e.keyCode === 39) {
        if (active === 2) {
            active = 0;
        } else {
            active++;
        }
        clearInterval(indexOfSetInterval);
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();

}
window.addEventListener("keydown", keyChangeSlide);

const indexOfSetInterval = setInterval(changeSlide, time);