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

//////////////////MODYFIKACJA ELEMENTÓW//////////////////

const firstLi = document.querySelector('li:first-child');

firstLi.textContent = "Nowa zawartość tekstowa";
firstLi.innerHTML = "<strong>Nowa lepsiejsza zawartosc tekstowa(pogrubiona)</strong> i zwyczajna";

firstLi.style.fontSize = "20px";
firstLi.style.color = "red";
firstLi.style.backgroundColor = "#ccc";
firstLi.style.letterSpacing = "2px";

firstLi.classList.contains("space"); //sprawdza czy jest taka klasa
firstLi.classList.add("space"); //dodaje klase, jesli taka klasa jest to nic nie robi
firstLi.classList.toggle("space"); //jak jest taka klasa to ją usuwa, jak nie ma to dodaje
firstLi.classList.remove("space"); //usuwa klase, jezeli nie ma to nic nie robi

firstLi.className = "oneTwo"; //nadpisuje poprzednia klase, jak nie ma to tworzy
firstLi.id = "noweID"; //tworzy nowe id lub nadpisuje poprzednie

firstLi.setAttribute("title", "Uwaga ważne!"); //tworzy lub nadpisuje atrybut o nazwie title i jego zawartosc jest uwaga wazne
firstLi.setAttribute("class", "nowaKlasaX"); //tworzy lub dodaje nowy atrybut o nazwie class i jego zawartosc nowaKlasaX

///modyfikowanie kilku na raz
const liItems = document.querySelectorAll("li"); //pobranie listy i przypisanie do zmiennej

for (let i = 0; i < liItems.length; i++) {
    liItems[i].style.color = "blue";
    liItems[i].classList.add("nowyKolorek");
}

liItems.forEach((liItem) => {
    liItem.style.textDecoration = "underline";
    liItem.style.border = "2px solid #ddd";
})

//jezeli chcemy pracowac na innej metodzie niz queryselectorall do pobierania wielu zmiennych to trzeba najpierw przerzucic to na tablice jesli chcemy pracowac na foreachu np:

const liItemsGet = [...document.getElementsByTagName("li")];
liItemsGet.forEach((item) => {
    item.style.fontSize = "15px";
})