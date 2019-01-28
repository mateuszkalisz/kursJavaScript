//uzycie pojedynczych i podwojnych cudzyslowow:

`"I'm only human" - Aleksander The Great`;
"\"I'm only human \" - Aleksander The Great";
'"I\'m only human\' - Aleksander The Great';

//wielowierszowe stringi:

//ES5
const text1 = "tekst\ntekst\ntekst";

//ES6
const text2 = `tekst
tekst
tekst`;

//osadzanie kodu w JS wewnatrz stringa ${}

const yourName = "Jagienka";

//stary sposob:
const greeting2 = "Cześć " + yourName;

//nowy sposob:
const greeting1 = `Cześć ${yourName}`;

//mozliwosc wykorzystania wyrazenia

const user1 = 29;
const user2 = 45;
const user3 = 33;

console.log(`Średni wiek użytkowników to: ${(user1+user2+user3)/3}`);

//pobieranie i wyswietlanie aktualniej daty:
console.log(`Obecnie zegarek wskazuje ${new Date().toLocaleString()}`);

//obliczenie:

const price = 80.99;
const tax = 23;

console.log(`Do zapłaty jest: ${price+(price*tax)/100}`);

console.log(`Do zapłaty jest: ${(price+(price*tax)/100).toFixed(1)}`);

//czesto wykorzystuje sie operator trojargumentowy:

const price2 = 33;

console.log(`Dzisiejsza cena jest ${price2>=80 ? "wysoka" : "niska"}`)

//inkrementacja/dekrementacja

const itemName = 'lcd';
let items = 20;

console.log(`Wlasnie sprzedalem ${itemName} wiec na stanie mam jeszcze ${--items} przedmiotów`);