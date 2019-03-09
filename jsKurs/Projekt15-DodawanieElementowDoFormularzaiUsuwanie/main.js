const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement)
    });
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    console.log(toDoList);
    taskNumber.textContent = listItems.length;

    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask == "") return;
    const newLi = document.createElement("li");
    newLi.className = "task";
    newLi.innerHTML = titleTask + "<button>Usuń</button>";
    toDoList.push(newLi);

    renderList();

    ul.appendChild(newLi);
    input.value = "";
    taskNumber.textContent = listItems.length;
    newLi.querySelector("button").addEventListener("click", removeTask);
}

form.addEventListener("submit", addTask);