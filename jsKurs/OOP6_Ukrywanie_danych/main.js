//konwencja

class Cat {
    constructor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    setColor(value) {
        if (typeof value === "string")
            return this._color = value;
        else
            console.log("wartość nieprawidłowa");
    }
}

const kotek = new Cat("czarny");

//wykorzystanie domknięć (closure)
//przyklad 1
class Dog {
    constructor(name, dogColor) {
        this.name = name;
        //dzieki funkcji get i set mozemy korzystac z tego color bo inaczej po wywolaniu przestala by istniec i nie byloby dostepu do tego
        let _color = dogColor;
        this.getColor = () => color;
        this.setColor = (value) => _color = value;
    }
}

const fafik = new Dog("fafik", "brązowy");

//przyklad2
class Car {
    constructor(name, counter = 0, year = 2000) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;
        this.getCounter = () => {
            if (_changeNumber) {
                alert("uważaj licznik zmieniony!");
                return _counter;
            }
        }
        this.getYear = () => _year;
        this.getChangeNumber = () => _changeNumber;
        this.setCounter = (value) => {
            _changeNumber++;
            return _counter = value;
        }
        this.setYear = (value) => {
            return _year = value;
        }
        this.showCarAge = function (year) {
            return year - _year;
        }
    }
}

const mercedes = new Car("mercedes", 20000, 2010);