// deklaracja zmiennej
let firstLetterUserName;

// przypisanie wartosci do zmiennej
firstLetterUserName = "M";

// jednoczesna deklaracja i przypisanie
let userName = "Mateusz";

// deklaracja i przypisanie podczas ktorego tworzymy fcje
let showUserName = function () {
    console.log(userName);
}

// deklarowanie wielu zmiennych
let name, age, address;
let position = [200, 100],
    score = null,
    time = 20.2,
    ipAddress;
const firstUser = "Maja",
    secondUser = "Mati";

// do const nie mozna przypisac nowej wartosci
const a = 10;
//błąd ====> a = 20;

const example2 = 200;
//błąd ====> example2 = example2 + 1;

//nowa zmienna ma nowa wartosc i identycznej wartosci (to nie jest kopia);
let example3 = example2;

//CONST
const arrayExample = [1];

//Przypisanie nowego obiektu nie jest mozliwe!:
// błąd ====> arrayExample = [1, 2];

//Jednak modyfikowanie w obiekcie juz przypisanym jest mozliwe! Czyli np dodanie kolejnego elementu w tablicy (w tym przypadku drugiego) jest mozliwe!
arrayExample[1] = 2;
console.log(arrayExample);

//obiekt globalny (window) z var let i const
var globalProperty1 = "za pomoca var"; // mozna przypisac do window (dziwne)
let globalProperty2 = "za pomoca let"; // nie mozna (naprawione)
const globalProperty3 = "za pomoca const"; // nie mozna (naprawione)

//hoistowanie - czyli przenoszenie deklaracji zmiennej na poczatek jesli nie zostala wczesniej zadeklarowana a chcemy jej uzyc
//przy var mozna uzywac hoistowania - teoretycznie zla cecha
console.log(varVariable);
var varVariable = 1;
//przy let i const nie mozna uzywac hoistowania - "naprawione"
//blad===> console.log(letVariable); let letVariable = 1;
//blad===> console.log(constVariable); const constVariable = 1;