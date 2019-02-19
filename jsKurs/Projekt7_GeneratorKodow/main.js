const chars = 'ABCDEFGHIJK0123456789';

const btn = document.body.querySelector("button");
const section = document.body.querySelector("section");

const codesNumber = 1000;
const charsNumber = 10;

const codeGenerator = function () {
    for (let i = 0; i < codesNumber; i++) {

        let code = "";

        for (let j = 0; j < charsNumber; j++) {
            const index = Math.floor(Math.random() * 20);
            code += chars[index];
        }

        const div = document.createElement("div");
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener("click", codeGenerator);