const text = document.querySelector(".text");

const textExample = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero et nostrum possimus veritatis, animi nobis? Molestiae rerum delectus praesentium aperiam qui assumenda, quasi voluptates distinctio nesciunt sit! Quae reiciendis sed et at veritatis voluptatibus libero. Accusamus optio reiciendis ut dolorem tempore. Saepe omnis quaerat, soluta mollitia ratione eum itaque eos.'

const cursor = document.querySelector(".cursor");

let index = 0;

textTyping = () =>{

    text.textContent += textExample[index];
    index++;

    if(index == textExample.length) clearInterval(intervalIndex);
}


const intervalIndex = setInterval(textTyping,50);

cursorAnim = () =>{
    cursor.classList.toggle(`active`);
}

setInterval(cursorAnim, 400);