//TABLICA METODY:

const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];

console.log(italianUsers);

//push - dodanie elementu na koniec tablicy (dodatkowo zwraca nam dlugosc tablicy):

italianUsers.push("Alessandra");
console.log(italianUsers);

//unshift - dodaje element na poczatek tablicy, (tez zwraca nam dlugosc tablicy);
italianUsers.unshift("Tommaso");
console.log(italianUsers);

//pop - usun ostatni element tablicy (i zwraca ten element [mozna by bylo go pobrac gdzies])
italianUsers.pop();
console.log(italianUsers);

const invitedUser = italianUsers.pop();
console.log(invitedUser); //usunelismy z italianuser ale przypisalismy ostatni do inviteduser

//shift - usuwa 1 element tablicy - rowniez zwraca ten element i mozemy go gdziesprzypisac

italianUsers.shift();
console.log(italianUsers);

const invitedUser2 = italianUsers.shift();
console.log(invitedUser2);

//concat - laczenie tablic - tworzenie nowej z ktorej polaczylismy

const redColors = ["czerwony"];
const blueColors = ["niebieski"];
const blueAndRedColors = redColors.concat(blueColors);

console.log(blueAndRedColors);

//inny sposob (od ES6) to operator spread(operator rozwijania, operator trzech kropek)

const colors = [...redColors, ...blueColors];
console.log(colors);

const colors2 = [...redColors, ...blueColors, "morski"];
console.log(colors2);