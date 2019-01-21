//TWORZENIE FUNKCJI:

//#1sposob - wyrazenie funkcyjne
//taka funkcja jest funkcją anonimową bo jest tylko function(nie jest nazwane)
const showMessage = function (message) {
    console.log(message);
}

//wywołanie:
showMessage("Wywołałem funkcje showMessage");

//#2sposob - wywolanie funkcji (ta funkcja dzieki hoistingowi mozliwa jest do uruchomienia nawet przed deklaracją (Mozna wywolac funkcje zanim sie ja napisze :O))

//function addNumbers(number1, number2) {
//    return number1 + number2;
//}

//let x = addNumbers(2, 4);
//console.log(x);

let y = addNumbers(3, 4, 5);
console.log(y);

function addNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}

//#3 sposob - konstruktor

const textAlert = new Function("text", "alert(text);");
textAlert("działa!");

//ostatni argument to cialo funkcji

//#4 sposob - funkcja strzalkowa - arrow function

//const nazwaFunkcji = () => {};

const showMeTExtMyArrowFunc = (txt) => {
    console.log(txt);
};

showMeTExtMyArrowFunc("hej hej heloł!");

//jezeli mamy tylko jedna instrukcje to nie trzeba pisac nawiasow: const showMeTExtMyArrowFunc = txt => console.log(txt);

///////////////////////////
//przypisanie funkcji do nowej zmiennej

const addN = addNumbers; // tworzymy referencje (nie tworzymy nowej funkcji)

//przyklad 1

//funkcja ktora wplywa na program ale nie zwraca wartosci

//#1
const divideBy2 = function (number) {
    console.log(number / 2);
}

someNumber = 0;
//#2
const add = function () {
    someNumber++;
    console.log(someNumber);
}

//przyklad 2 - funkcja która zwraca

const divideBy3 = function (num) {
    return num / 3;
}

const result3 = divideBy3(9);

//przyklad 3 - funkcja z efektem ubocznym i zwracajaca wartosc
const divideBy5 = function (number5) {
    const res = number5 / 5;
    console.log(res);
    return res;
}

const result5 = divideBy5(20);


divideBy5.length; //podaje ile ma parametrów w deklaracji