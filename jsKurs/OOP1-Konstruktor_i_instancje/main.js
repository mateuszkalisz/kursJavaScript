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