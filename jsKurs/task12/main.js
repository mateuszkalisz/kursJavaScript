//////SLICE///////////

const items = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"];

//wycinamy od ktorego elementu (nr indexu)
const newItem = items.slice(3);

//od ktorego (z nim) do ktorego (bez niego)
const newItem2 = items.slice(2, 3);

//pobieramy cala tablice
items.slice(0);
items.slice(0, items.length);

//jezeli użyjemy minusa to ile od konca mamy zwrocic:
items.slice(-3);

///////SPLICE//////////-usuwamy elementy z tablicy

const animals = ["dog", "cat", "mouse", "lion"];

const cat = animals.splice(1, 2); //usuwa elementy od indexu 1 (wraz z nim) 2 - ile elementow, zwraca usuniete elementy i dlatego mozemy je gdzies przypisac


//animals.splice(2); //usuwa elementy od indexu 2 wraz z nim

//animals.splice(0); //czyści tablice (jest pusta)

animals.splice(0, 1, "bat"); //podaje od ktorego indexu chce zamienic, ile elementow i wymieniam elementy

const languages = ["Polish", "English", "Chinese", "German", "Hungarian"];

languages.splice(1, 2, "Spanish", "Japanese");

languages.splice(4, 0, "Greek");

///////METODA SORT////////////
//metoda destrukcyjna
languages.sort();

/////METODA IDENXOF///////
languages.indexOf("Greek");
["Arek", 22, null, 22].indexOf(22);
["Arek", 22, null, 22].lastindexOf(22);
["Arek", 22, null, 22].indexOf("Are"); //zwroci -1 bo nie ma takiego czegos

//METODA INCLUDES///////////
languages.includes("Spanish"); //true
languages.includes("English"); //false

[20, 22, 120, 120].includes("22"); //false - nie konwertuje tego

[20, 22, 120, 120].includes(22); //true

////METODA JOIN//////////
//pomaga stworzyc stringa z elementow

languages.join(); //powstanie string oddzielony przecinkami

languages.join(" --- "); //pooddziela elementy ---

languages.join("\n"); //poprzenosi do nowej linii kazdy z elementow

/////METODA REVERSE//////
//odwraca kolejnosc w tablicy

languages.reverse(); //zmienia tablice - metoda destrukcyjna,

////METODA SPLIT///////////
//robi ze stringa tablice
"Marek Adam Justyna Teresa".split(' '); //tworzy 4 elementy do tablicy
"Marek Adam Justyna Teresa".split(''); //z kazdej litery tworzy element tablicy
"Marek, Adam, Justyna, Teresa".split(','); //tworzy 4 elementy tablicy
"Marek, Adam, Justyna, Teresa".split(',', 3); //tworzy 3 elementy od 0 do 2;