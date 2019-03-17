// 'use strict' //tryb scisly
// //this

// //this - obiektu globalnego

// const fn = function () {
//     console.log(this.name);
// }

// //fn();

// const obj = {
//     name: "Adam",
//     fn: fn,
// }

// obj.fn();

// document.addEventListener("click", () => {
//     console.log(this);
//     'use strict' //wczesnije this przyporzadkowany zostal do obiektu document a nizej juz w dodatkowej funkcji do rzadnego dlatego przy uzyciu use strict bedzie undefined
//     const inside = function () {
//         console.log(this);
//     }
//     inside();
// })

// ////////////////////////////////cz.2

// function showName() {
//     'use strict';
//     console.log(this.name);
// }

// const karol = {
//     name: "karol",
//     showName: showName,
// }

// const tatiana = {
//     name: "tatiana",
//     showName: showName,
// }

// karol.showName();
// tatiana.showName();

// ////////////

// function one() {
//     this.name = "pierwsza";
// }

// const object1 = {
//     two: one,
//     four: function () {
//         console.log(this);
//     }
// }

// const three = object1.two;
// three();

// const five = object1.four;
// five();

//this - wiazanie niejawne

const user = {
    age: 20,
    showName() {
        console.log(this.age);
    },
    showName2: () => {
        console.log(this.age);
    }
}

const stefan = {
    age: 35,
    showName: user.showName,
}

user.showName();
stefan.showName();
user.showName2(); //brak połączenia z this przy wykorzystaniu fat arrow


//this - wiazanie jawne

const human = {
    pesel: 99420402045,
}

const showPesel = function () {
    console.log(`Twoj pesel to ${this.pesel}`);
}

//funkcja.call(obiekt);
showPesel.call(human);

const showUser = function (name) {
    console.log(`uzytkownik ${name} ma ${this.pesel}`);
}

//funckja.call(obiekt, 1argument, 2argument itd...)
showUser.call(human, "adaś");


//wiązanie twarde
//-bind - nowa funkcja ze stałym this

const showPeselUser = showPesel.bind(human);

showPeselUser(); //teraz ta funkcja ma na stale ustawionego thisa na humana

//wiazanie z operatorem new

class User {
    constructor(name) {
        console.log(this.name = name);
    }
}

const stasiek = new User("stasiek");