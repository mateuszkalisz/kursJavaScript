//literal tablicy z podaniem wartosci:
const nameList = ["Mateusz", "Ludomir", "Majson", "Myslimir"];

//literal pusty a potem uzupelnienie
const cityList = [];
cityList[0] = "Elk";
cityList[1] = "Warszawa";

//konstruktor = pusta tablica
const gameItems = new Array();

//dodanie do tablicy:
gameItems[0] = 1;

//konstruktor z uzupelnionymi elementami
const colors = new Array("red", "blue");

//dodanie kolejnego el do tablicy:
colors[2] = "black";

////////////

const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = 1;
myArrayLet[0] = 1;

//co moze zawierac tablica:

const diffrentValues = ["string", 20, {},
    ["jeden", "dwa"], null
];


//
const popularName = nameList[2];
nameList[3] = "Witomysl";
// sprawdzenie czy ten indeks jest taki nameList[2] === "Gniewomir";
nameList[15] = "Jurand";

//usuwanie elementow z tablicy - nie skraca dlugosci tablicy ale zostaje wartosc pustą
delete nameList[2];

//metody na tablicach

nameList.length;

const longArray = [];
longArray.length = 100;

longArray[longArray.length - 1] = 100;

longArray[longArray.length] = 101;

longArray.length += 2;

//sprawdzenie czy to jest tablica
nameList instanceof Array;
//nameList instanceof String;
//nameList instanceof Object;

Array.isArray(nameList); //true 
Array.isArray([]); //true

//dereferencja obiektu (nie tylko tablicy)
//referencja
let letters = ["a", "b"];
let characters = letters;
//ta sama tablica - obie zmienne maja tylko referencje

//dereferencja
//tablica (i inny obiekt) zostanie usunieta jesli nie ma do niej referencji
letters = null;
characters = null;
//letters = characters = null;

//stworzenie wielu zmiennych w oparciu o zawartosc tablicy (i obiektu)

//destructuring arrays - przypisanie destukturyzujace

const [nameUser, idUser, ageUser] = ["Sławoj", 210, 54];

const game = [120.12, 87, "dobry wujek"];

let [time, points, name] = game;