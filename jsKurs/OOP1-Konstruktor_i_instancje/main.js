const Car = function (name) {
    console.log(this);
    this.name = name;
}

// function Car() {

// }

const maluch = new Car("maluch");
const polonez = new Car("polonez");

maluch.name = "zabytek";