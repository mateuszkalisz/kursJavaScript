//petla w petli

//for (let i = 0; i < 3; i++) {
//    for (let j = 0; j < 10; j++) {
//        console.log(`zmienna i czyli ${i} pomnożona przez zmienną j czyli ${j} da wynik ${i*j}`);
//    }
//}

//petla na tablicy

//przyklad1

//const usersAge = [19, 18, 15, 45, 34, 33, 25];

//for (let i = 0; i < usersAge.length; i++) {
//    console.log(`wiek uzytkownika o indeksie numer ${i} to ${usersAge[i]}`);
//}

//przyklad2

//const usersDateBirth = [2000, 1992, 1932, 1980];
//const currentYear = 2018;

//for (let i = 0; i < usersDateBirth.length; i++) {
//    const userAge = currentYear - usersDateBirth[i];
//    console.log(`wiek uzytkownika o indeksie ${i} to ${userAge}`);
//}

//przyklad3

//const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];

//for (let i = 0; i < guest.length; i++) {

//    if (guest[i] === "programista") {
//        console.log("nie wpuszczamy programistow na impreze - to nudziarze");
//    } else if (guest[i] === "polityk") {
//        console.log("nie ma miejsc dla polityków!");
//    } else {
//        console.log(`witaj ${guest[i]}, zapraszamy! prosimy zająć miejsce ;)`);
//    }
//}

//PETLA FOR - OF (ES6)

const colors = ["red", "blue", "black", "yellow", "orange"];

for (const color of colors) {
    console.log(color);
}