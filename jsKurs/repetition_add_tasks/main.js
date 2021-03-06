const toDoList = [];

const input = document.querySelector("input");
const form = document.querySelector("form");
const nOTask = document.querySelector("h1 span");
const ul = document.querySelector("ul");
const inputSearch = document.getElementById("search");

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
}


function deleteTask(e) {
    //e.target.parentNode.remove();

    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);

    renderList();

    const liElements = document.querySelectorAll("li").length;
    nOTask.textContent = liElements;
}

function addTask(e) {
    e.preventDefault();
    const taskTitle = input.value;
    const newTask = document.createElement("li");
    newTask.innerHTML = taskTitle + "<button>Delete</button>";
    newTask.className = "task";

    toDoList.push(newTask);
    renderList();
    //ul.appendChild(newTask);
    input.value = "";

    const liElements = document.querySelectorAll("li").length;
    nOTask.textContent = liElements;

    newTask.querySelector("button").addEventListener("click", deleteTask);
}

function searchingTask() {
    const queryTask = inputSearch.value;
    const filterTask = toDoList.filter(liElement => liElement.textContent.includes(queryTask));

    ul.textContent = "";
    filterTask.forEach(task => ul.appendChild(task));

    const liElements = document.querySelectorAll("li").length;
    nOTask.textContent = liElements;
}


form.addEventListener("submit", addTask);

inputSearch.addEventListener("input", searchingTask);