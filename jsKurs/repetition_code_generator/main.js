const btn = document.body.querySelector("button");
const section = document.body.querySelector("section");

const chars = "ABCDEFGHIJ0123456789";
const codesNumber = 10;
const codesLenght = 10;

const codeGenerator = function () {

    for (i = 0; i < codesNumber; i++) {

        let code = "";

        for (j = 0; j < codesLenght; j++) {
            const index = Math.floor(Math.random(chars) * chars.length);
            code += chars[index];
        }

        const div = document.createElement("div");
        div.textContent = code;
        section.appendChild(div);

    }

}


btn.addEventListener("click", codeGenerator);