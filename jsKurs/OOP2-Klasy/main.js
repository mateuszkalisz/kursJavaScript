//tworzenie klasy

// class Family {
//     constructor(name) {
//         this.name = name;
//         this.addMemberr = function () {
//             console.log("wywolane z instancji");
//         }
//     }

//     addMember() {
//         console.log("wywołane z prototypu");
//     }

// }

// const nowakowie = new Family("nowakowie");
////////////////////////////////////////////
const Family2 = function (name) {
    this.name = name;

}

const kowalscy = new Family2("kowalscy");

Family2.prototype.addMember = function () {

}


//wyrazenie klasy

const Function5 = class {

}

const fajnowscy = new Function5();


////////////////////////

class Family {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }
    addMembers(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`zostal dodany nowy czlonek rodziny ${this.newMember} rodzina liczy teraz ${this.members} osób`);
    }
    //metoda statyczna - jest dostepna tylko poprzez klase a nie przez instancje
    static makeFamily(...members) {
        return members;
    }

}

const nowakowie = new Family(3, "Jan", "Ewa", "Adam");
nowakowie.addMembers("Jaś");

nowakowie.addMembers("Ola");

const kwiatkowscy = new Family(1, "Ola");

Family.makeFamily("Adam", "Ewa");

//warto pamietac o klasach

class Animal {
    constructor(name) {
        this.name = name;
    }
}

function Animal2(name) {
    this.name = name;
}

const dog = new Animal();

//bledne podejscie bo sie wywola funkcja, instancja sie nie stworzy a name = "fafik" zostanie przypisane do window => window.name;
const cat = Animal2("fafik");