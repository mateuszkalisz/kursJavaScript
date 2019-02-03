//jesli nie podamy argumentow przy wywolaniu funkcji to bedzie NaN/undefined wiec dobrze dac domyslne wartosci np. 0 jesli chcemy zabezpieczyc program

const addTwoNumbers = (x = 0, y = 0) => {
    const result = x + y;
    console.log(result);
    return result;
}

//to samo ale inny sposob tworzenia (Deklaracja)
//const addTwoNumbers = function (x = 0, y = 0) {
//    const result = x + y;
//    console.log(result);
//    return result;
//}


//CALLBACK

//przyklad1

function addOne(number) {
    number++;
    console.log(number);
    return number;
}

function substractOne(item) {
    item--;
    console.log(item);
    return item;
}

function count(x, callback) {
    return callback(x);
}

count(7, substractOne); //wywolanie tego callbacka ->jedna funkcje przekazalismy do drugiej i ja wykonalismy

//przyklad2

document.body.addEventListener("click", function () {
    console.log("click");
})

//przyklad3

const showTime = function () {
    console.log("minely 2 sekundy");
}

setInterval(showTime, 2000);

//lub :   setInterval(() => console.log("minely 2 sekundy"), 2000);

//przyklad4

const usersAge = [20, 40, 50, 22, 43, 52, 12, 84];

//usersAge.forEach(usersAge => console.log(`WIek uzytkownika to ${usersAge}`));

usersAge.forEach(function (userAge) {
    console.log("Wiek użytkownika to " + userAge);
});

//ARGUMENTS

const showArguments = function () {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(typeof arguments);
}

showArguments(1, null, {});

//przyklad arguments

const addAllNumbers = function () {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const usersMoney = addAllNumbers(10, 2, 100, 421, 2);


//przyklad2 arguments

function showInfoAboutUser(age, name, sex) {
    if (argmunets.length === 0) {
        console.log('nie mam zadnych informacji o tym uzytkowniku');
    } else if (arguments.length === 1) {
        console.log('uzytkownik ma ' + age + 'lat. Nic o nim nie wiemy');
    } else if (arguments.length === 2) {
        console.log(`uzytkownik ma ${age} lat i ma na imie ${name}`);
    } else {
        console.log(`uzytkownik ma ${age} lat i ma na imie ${name} oraz jest ${sex}`);
    }
}





//////////////wyklad 28

//operator rest (ES6)

//przyklad1
function showAllArguments(...items) {
    console.log(items);
    console.log(arguments); //poprzednie
    return items;
}

showAllArguments("1", 2, 3, 12, "ab", true, "Adam");


//przyklad2
function addAllWords(...words) {
    let txt = "";
    for (let i = 0; i < words.length; i++) {
        txt += `${words[i]} `;
    }
    console.log(txt);
}

addAllWords("aaa", "ty", 2);

//przyklad2 #2

function addAllWords2(...words) {
    let txt = "";
    words.forEach(function (word) {
        txt += `${word} `;
    })
    console.log(txt);
}

addAllWords2("blablabla", "huehue");

//przyklad2 #3

function addAllWords3(...words) {
    let txt = "";
    words.forEach(word => txt += `${word} `);
    console.log(txt);
}

addAllWords3("bbb", 123);

function showUsers(owner, ...others) {
    console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`);
}

showUsers("Adrian", "Wojtek", "Bartek");

//METODY A FUNKCJE

//metody to funkcje umieszczone w obiektach

const objectExample = {
    name: "Adam",
    showName: function () {
        console.log("Jan")
    },
    showAge() {
        console.log(18);
    }
}


objectExample.showName();
objectExample.showAge();