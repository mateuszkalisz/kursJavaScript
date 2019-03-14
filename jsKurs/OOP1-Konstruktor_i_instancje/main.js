////////////////KONSTRUKTORY I INSTACJE/////////////////////

const Car = function (name) {
    //console.log(this);
    this.name = name;
}

// function Car() {

// }

const maluch = new Car("maluch");
const polonez = new Car("polonez");

maluch.name = "zabytek";


///////////////PROTOTYPY///////////////

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];

    // this.addChildren = function (name) {
    //     this.children.push(name);
    // }
}

Person.prototype.addChildren = function (name) {
    this.children.push(name);
}

//staramy sie nie przypisywac wlasciwosci tylko metody bo nie chcemy zeby np wszystkie obiekty mialy gender = female
//Person.prototype.gender = "female";



const arek = new Person("Arek", 20);
const monika = new Person("Monika", 30);

arek.addChildren("Asia");

///prototyp to obiekt funkcji konstruktora, wspoldzielony przez wszystkie obiekty stworzone na bazie tego konstruktora, kazdy z nich ma do niego dostep

class User {

}

function Player() {

}

Player.prototype.age = 25;

const marek = new Player();
const marta = new User();

console.log(marek.constructor);
console.log(marta.constructor);

const darek = new marek.constructor();

//dodawanie elementow do prototypu

function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;

    // this.changeCitizenship = function (citizenship) {
    //     this.citizenship = citizenship;
    //     console.log(`Zmiana za pomocą metod w instancji na obywatelstwo ${this.citizenship}`);
    // }
}

Citizen.prototype.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship;
    console.log(`Zmiana za pomocą metod w prototypie na obywatelstwo ${this.citizenship}`);
}

const zenek = new Citizen("Polska", "polskie");

//rozszerzenie prototypu istniejacych konstruktorow

const arr = [1, 2, 3, 4, 5];

Array.prototype.deleteAllFromArray = function () {
    this.splice(0, this.length);
}

Array.prototype.deleteElement = function (index) {
    return this.splice(index, 1);
}

arr.__proto__; //prototyp konstruktora

arr.__proto__.__proto__; // prototyp object

arr.__proto__.__proto__.__proto__ // null
Object.prototype.age = 20;

//instanceof

arr instanceof Array;
arr instanceof Object;
arr instanceof Citizen;
arr instanceof Function;

//Object.getprototypeof

Object.getPrototypeOf(arr);


////

const janusz = new Citizen();
//janusz.__proto__ = Citizen.prototype;