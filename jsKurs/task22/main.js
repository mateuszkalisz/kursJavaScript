///POWTORKA Z DOM - pobieranie el
//pobieranie pojedynczego elementu
const firstElement = document.querySelector("#first");
const firstElementbyId = document.getElementById("first");

//metody pobierajace wiecej elementów:
const nodeList = document.querySelectorAll("li"); //nodelist
const nodeListToArray = [...nodeList]; //metoda zamieniająca nodelist na array

const itemByClassName = document.getElementsByClassName("liItem"); //html collection
const itemByClassNameToArray = [...itemByClassName];

const itemByTagName = document.getElementsByTagName("h1"); //htmlcollection
const itemByTagNameToArray = Array.from(itemByTagName); //inny sposob na stworzenie tablicy

//pobieranie atrybutów:
const h2 = document.querySelector("h2");
console.log(h2.getAttribute("class"));

//wypisanie zawartosci
console.log(h2.textContent);
console.log(h2.innerHTML);

//sprawdzanie czy dany element ma daną klasę:
h2.classList.contains("takaSobieKlasa"); //zwraca true jesli istnieje