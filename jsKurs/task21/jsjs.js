/////////////POBIERANIE ELEMENTÓW ZE STRONY///////////////////////

//1.wlasciwosci obiektu document
//document.documentElement;
//document.body;
//document.images;

//2.latwo stworzyc tablice na ich podstawie:
//const imgs = Array.from(document.images);
//const imgs2 = [...document.images];

//3.metody pobierające jeden element:

//document.querySelector("li:nth-child(2)"); //szuka jednego konkretnego elementu

//const firstElement = document.getElementById('first'); //szukanie elementu po nazwie id (podajemy jako argument nazwe id)

//przyklad - dwie metody to samo wyszukuja ale 
//const newCar = document.body.querySelector("#car"); // trzeba dodac # 

//const newCar2 = document.getElementById("car"); //nie dodaje sie #, ta podobno szybsza

//jezeli zostanie zwrocony null to nic nie znalazlo

//4.metody pobierające wszystkie pasujące elementy: -kazda z tych metod jak nic nie znajdzie to nie zwraca juz nulla tylko pusty obiekt
//document.querySelectorAll("ul>li"); //nodeList - lista węzłów ->nowa metoda
//document.getElementsByTagName("li"); //html collection - tablico podobny obiekt
//document.getElementsByClassName("even"); //zwracany jest obiekt tablico podobny - html collection

//5.pamietamy jednak ze takie pseudotablice mozemy zamienic na tablice np:

//const liList2 = document.getElementsByTagName("li");
//const liList = document.querySelectorAll("li");
//const liArray = [...liList2];
//const liArray2 = Array.from(liList2);

//pobieranie atrybutów z elementów:
//const h2 = document.querySelector('h2');
//console.log(h2.getAttribute('class'));
//console.log(h2.getAttribute('date-color'));

//console.log(document.querySelector('h2').getAttribute('class'));

//const h2Text = h2.textContent;
//const h2HTML = h2.innerHTML;

//6.sprawdzenie czy dany element ma dana klase:

//console.log(h2.classList);
//h2.classList.contains("title"); //jesli ma zwracane jest true jesli nie ma to zwraca false