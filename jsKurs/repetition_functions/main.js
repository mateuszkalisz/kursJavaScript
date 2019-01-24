//wyrazenie funkcyjne - przypisujemy do stałej:

let sum = 0;

const addNumberToSum = function (number) {
    sum += number;
    console.log(`suma wynosi: ${sum}`);
    return sum;
}

addNumberToSum(3);
addNumberToSum(5);

//deklaracja:

function createBase(name, defenceLevel, ) {
    console.log(`Baza wojskowa o nazwie: ${name} oraz poziomie ochrony ${defenceLevel}`);
}

createBase("Polska Górą!", 5);

//za pomocą konstruktora:

const addName = new Function("name", "alert(name)");
console.log(addName("Wojteg"));

//sumowanie 1 za pomocą arrow function:

const addNumberToSum2 = (number) => {
    sum += number;
    console.log(`a teraz suma przy pomocy funkcji => wynosi : ${sum}`);
    return sum;
}

addNumberToSum2(2);

//zabezpieczenie funkcji:

const addTwoNumbers = (x = 0, y = 0) => {
    suma = x + y;
    console.log(suma);
    return suma;
}

let z = addTwoNumbers(2, 3);

//callback

//#1

const addOne = (x = 0) => {
    x++;
    console.log(x);
    return x;
}

const substractOne = (x = 0) => {
    x--;
    console.log(x);
    return x;
}

function callBackFunc(item, callback) {
    return callback(item);
}

callBackFunc(5, addOne);

//#2

document.body.addEventListener("click", () => {
    console.log("klikłem!");
})

//#3

const talkMeWhenPizzaIsReady = () => {
    console.log("It's pizza time!");
}

setInterval(talkMeWhenPizzaIsReady, 3000);

//#4

const usersAge = [20, 30, 40, 50];

usersAge.forEach((userAge) => {
    console.log(`Wiek uzytkownika to ${userAge} `);
})

function showArguments() {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(typeof arguments);
}

showArguments(1, 2, "blabla", 123);

//REST

//#1
const usersJob = (...jobs) => {
    console.log(jobs);
    return jobs;
}

const usersArray = usersJob("Lawyer", "Builder", "Engineer");
console.log(Array.isArray(usersArray));

//#2
const addMembersToClass = (...members) => {
    let studentsClass = [];
    for (let i = 0; i < members.length; i++) {
        studentsClass[i] = members[i];
    }
    console.log(studentsClass);

}

addMembersToClass("Adam", "Mateusz", "Ewa", "Maja", "Łukasz", "Dawid");


////////////metody a funkcje:

const objectExample = {
    Name: "Mateusz",
    Surname: "K",
    ShowAge() {
        Console.log(18);
    }
}

Console.log(objectExample.Name);
console.log(objectExample.Surname);
objectExample.ShowAge();