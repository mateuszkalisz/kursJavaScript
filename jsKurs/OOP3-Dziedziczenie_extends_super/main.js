class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }

    breathe() {
        console.log("Zwierze oddycha");
    }
}

const zwierze = new Animal(2, "Max");

zwierze.__proto__ == Animal.prototype //true

class Mammal extends Animal {
    constructor(age, name, hairs) {
        super(age, name);
        this.hairs = hairs;
    }
    drinkMilk() {
        console.log("Ssaki pija mleko");
    }
}

const ssak = new Mammal(5, "Rex", "blonde");
//ssak.breathe();
//ssak.drinkMilk();

class Human extends Mammal {
    constructor(age, name, hairs, language) {
        super(age, name, hairs);
        this.language = language;
    }
    speak() {
        console.log("umiem mowic");
    }
}

const czlowiek = new Human(12, "Janek", "brunet", "Polski");

czlowiek.speak();
czlowiek.breathe();
czlowiek.drinkMilk();

//ogolnie nie trzeba pisac tego super(.....) jesli chcemy uzyc tego samego konstruktora z poprzedniej klasy ale dla porzadku spoko jest to zrobic