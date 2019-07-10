// const h1 = document.querySelector("h1");
// // console.log("start");

// // let result = 2+2;

// // const users = [1,2,3,4,5];

// users[5] = 6;

// let a,b,c;

// a = 10;
// b = 20;
// c = 30;

// const name = "Johny walker";

// const txt = name.toUpperCase();
// const txt2 = name.toLowerCase();


// const dl = txt.length;

// const array = [2,5,6,8,9];

// const index = Math.round(Math.random()*array.length)

// h1.textContent = array[index];

// const userName = "Mateusz";

// const indexOf2 = userName.charAt(2);

// h1.textContent = indexOf2;


// const userName = "Mateusz";
// const addText = " to dobry czlowiek";

// const wholeText = userName.concat(addText);

// const indexOfE = wholeText.indexOf("e");

// const lastIndexOfE = wholeText.lastIndexOf("e");

// const includesUsz = userName.includes("usz");

// h1.textContent = includesUsz; 


// const afterTrim = "      slowo    ".trim();

// console.log(afterTrim);


// const sliceWord = "Mateusz".slice(1,4);

// const name = "Uwemheh";

// switch(name){
//     case "Ziomek" : console.log("Witam Cię ziomek");
//     break;
//     case "Uwemheh" : console.log("Smieszne imie");
//     break;
//     default: "Nie ma takiego imienia w bazie";
// }

// //literal tablicy:

// const nameList = ["Janek", "Wojtek", "Krzysiek"];

// //literal pusty a potem uzupelnienie
// const cityList = [];

// cityList[0] = "Berlin";
// cityList[1] = "Warszawa";

// console.log(nameList);
// console.log(cityList);


//konstruktor nowej tablicy

// const nowaTablica = new Array(1,2,3);
// nowaTablica.push(1);

// console.log(nowaTablica);

// delete nowaTablica[3];

// console.log(nowaTablica.length);

// console.log(nowaTablica instanceof Array);


// //metody na tablicach
// const newArray = [1,2,3,4,5];

// newArray.push("Push");

// newArray.unshift("unshift");

// console.log(newArray);

// newArray.pop();
// newArray.shift();

// const secondArray = ["a", "b", "c"];

// const newAndSecondArray = newArray.concat(secondArray);

// const newand2array = [...newArray,secondArray];

// const tablica = [0,1,2,3,4,5,6,7];

// tablica2 = tablica.slice(3);

// // tablica2 = tablica.slice(4,6);

// tablica2 = tablica.slice(-3);


// const tab1 = ["ania", "maja"];

// const tab2 = tab1.splice(1,3);

// tab1.sort();

// tab1.reverse();

// console.log(tablica);


// console.log(tab1.indexOf("maja"));

// const languages = ["polish", "english"];

// const languages2 = languages.join('\n');

// console.log(languages2);


// const abc = "Ania Marta Marysia".split(" ");

// console.log(abc);

// let number = 10;

// while(number<20){
//     console.log(number);
//     number++;
// }

// alert(number);

// do{
//     number ++;
//     console.log(number);
// }while(number < 20);

// for(let i=10; i<20; i++){
//     console.log(i);
// }

//petla for...of

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// // for(number of numbers){
// //     console.log(number);
// // }

// // numbers.forEach(number => console.log(number));

// // numbers.forEach(function(number){
// //     console.log(number);
// // })


//tworzenie funkcji

// //1 wyrazenie funkcyjne
// const showName = function(){
//     console.log("mateusz");
// }

// showName();

// // h1.textContent = tab1;


// //2 wywołanie funkcji

// function showSurname(){
//     return console.log("Mati");
// }

// showSurname();

// //3 konstruktor

// const addTwoNumbers = new Function("a", "console.log(a+1)");

// addTwoNumbers(3);

//4 fat arrow

// const fatArrow = () => {
//     console.log("działa");
// }

// fatArrow();


//callback

// const a = (number) =>{
//  number++;
//  return number;
// }

// const b = (item) =>{
//     item+=2;
//     return item;
// }

// const sum = (x, callback) => {
// return callback(x);
// }

// const abc = sum(10,b);

// console.log(abc);


// const showTime = () =>{
//     console.log("mineły 2 sekundy");
// }

// setInterval(showTime, 2000);



//metocy to fcje tylko umieszczone w obiektach

// const object = {
//     name: "Ernest",
//     age: 18,

//     showName: function(){
//         console.log(this.name);
//     },

//     showAge: function(){
//         console.log(this.age);
//     }
// }

// object.showName();
// object.showAge();



// //tworzenie obiektow

// const newObj = new Object();

// newObj.name = "Mateusz";
// newObj.age = 25;

// newObj.showName = () =>{
//     console.log("Ernest");
// }

// newObj.showName();

// console.log(newObj.name, newObj.age);


// //literał obiektu - 2 sposob

// const secondObj = {
//     name: "Maja",
//     age: 24,
//     showNameAndAge: function(){
//         console.log(this.name, this.age);
//     }
// }

// secondObj.showNameAndAge();


// const nowData = new Date().toLocaleTimeString();
// console.log(nowData);

// const wrapper = document.querySelector("div");

// console.log(wrapper.classList.contains("wrapper"));

// wrapper.innerHTML = "<h2>INNER HTML</h2>"

// wrapper.textContent = "blabla";

// wrapper.innerHTML = "bla"

// const liElements = document.querySelectorAll("li");

// const liArray = [...liElements];

// liArray.forEach(item => item.textContent = "blabla");

// liArray.forEach(item => item.style.fontSize = "30px");

// liArray.forEach(item => item.classList.toggle("lista"));
// liArray.forEach(item => item.classList.toggle("lista"));

// h1.className = "nowaklasa";

// h1.id = "newid";

// const liTag = document.getElementsByTagName("li");

// const arrayLiTag = [...liTag];

// arrayLiTag.forEach((item)=>{
//     item.style.fontSize = "40px";
//     item.style.textDecoration = "underline";
//     item.style.backgroundColor = "yellow";
// })

// window.addEventListener("scroll", () => {
//     console.log("skroll");
// });

// window.addEventListener("click", ()=>{
//     console.log("klikam");
// })

// window.addEventListener("dblclick",()=>{
//     console.log("podwojnie klikam");
// })

// window.addEventListener("mousemove", ()=>{
//     console.log("ruszam myszką");
// })

// const button = document.createElement("button");
// button.className = "btn";
// button.textContent = "kliknij";

// document.body.querySelector("li:last-child").appendChild(button);

// button.addEventListener("click", ()=> alert("WITAMY"));

// window.setTimeout(()=>alert("upłynelo 5 sek"), 5000);