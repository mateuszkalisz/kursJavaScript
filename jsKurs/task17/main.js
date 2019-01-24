//////HOISTING////////////

//let i const nie umozliwiaja hoistingu
//var umozliwia hoisting

console.log(typeNumber);
console.log(typeString);
console.log(typeBoolean);

funkcjaNazwa();

const typeNumber = 20;
let typeString = "blabla";
var typeBoolean = false;

//funkcja stworzona za pomoca deklaracji podlega hoistingowi

function funkcjaNazwa() {
    console.log("blabla");
}

funkcjaVar(); // nie mozna wywolac bo var to undefined a funkcja przypisana do zmiennej var podczas przenoszenia na gore bedzie miala undefined();

var funkcjaVar = function () {};