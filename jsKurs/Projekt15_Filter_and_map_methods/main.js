// //FILTER (i przypomnienie map)

// //FILTER
// const arr = [121, 21, 32, 54, 64, 123, 99, 18, 22];

// const oddNumbers = arr.filter(number => number % 2);

// const evenNumbers = arr.filter(number => !(number % 2));

// const numbersBiggerThan100 = arr.filter(number => number > 100);

// //MAP

// const double = arr.map(number => number * 2);

// const people = arr.map(number => number + " osób");

// //forEach

// arr.forEach((number, index) => arr[index] = number * 2);


//projekt wyszukiwarka:

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));
    console.log(tasks);
}

input.addEventListener("input", searchTask);