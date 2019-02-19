const names = [];
const div = document.querySelector("div");

const addName = (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    const newName = input.value;
    if (input.value.length > 0) {
        for (name of names) {
            if (name === newName) {
                alert("Juz bylo takie imie!")
                return;
            }
        }
        names.push(newName);
        div.textContent += newName + ", ";
    }

    input.value = "";

}

document.body.querySelector("button").addEventListener("click", addName);