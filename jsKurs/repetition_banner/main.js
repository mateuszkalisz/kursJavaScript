sliderList = [{
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
]

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

let active = 0;
const time = 3000;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

const changeSlide = () => {
    active++;

    if (active === sliderList.length) {
        active = 0;
    }

    image.src = sliderList[active].img;
    h1.textContent = sliderList[active].text;

    changeDot();
}

let indexOfSetInterval = setInterval(changeSlide, time);

const changeSlidebyKey = (e) => {
    clearInterval(indexOfSetInterval);
    if (e.keyCode == 37 || e.keyCode == 39) {
        e.keyCode == 37 ? active-- : active++;

        if (active < 0) active = sliderList.length - 1;
        else if (active == sliderList.length) active = 0;
    }

    image.src = sliderList[active].img;
    h1.textContent = sliderList[active].text;
    changeDot();

    indexOfSetInterval = setInterval(changeSlide, time);

}


window.addEventListener("keydown", changeSlidebyKey);