const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque auctor erat ut cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse felis dui, lobortis non risus ac, tempor laoreet nibh. Pellentesque commodo, neque et finibus sollicitudin, nunc orci egestas lacus, sit amet accumsan magna massa in arcu. Fusce rutrum pulvinar dolor, non lacinia justo fringilla vel."

let indexText = 0;
const time = 30;

const addLetter = function () {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(addLetter, time);


const cursorAnimation = () => {
    spnCursor.classList.toggle("active");
}

setInterval(cursorAnimation, 400);