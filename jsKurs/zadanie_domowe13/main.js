const inputSearch = document.body.querySelector(".search input");
const btnSearch = document.body.querySelector(".search button");
const ul = document.querySelector("ul");

const numberTasks = document.querySelector("h1 span");
const inputAdd = document.querySelector(".add input");
const btnAdd = document.querySelector(".add button");

const liElements = document.getElementsByClassName("task");



const searchTask = (e) => {
    e.preventDefault();
    const searchText = inputSearch.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));

    numberTasks.textContent = liElements.length;
}

inputSearch.addEventListener("input", searchTask);

const resetSearch = () => {
    inputSearch.value = "";
    inputAdd.value = "";
}

btnSearch.addEventListener("click", resetSearch);

const addTask = (e) => {
    e.preventDefault();
    if (inputAdd.value == "") return alert("Musisz coś wpisać!");
    const newTask = inputAdd.value;
    const newLi = document.createElement("li");
    newLi.innerHTML = newTask + "<button>Usuń</button>";
    newLi.className = "task";
    ul.appendChild(newLi);
    inputAdd.value = "";

    newLi.querySelector(".task button").addEventListener("click", removeTask);;
    numberTasks.textContent = liElements.length;
}


btnAdd.addEventListener("click", addTask);

const removeTask = (e) => {

    e.target.parentNode.remove();
    numberTasks.textContent = liElements.length;

}