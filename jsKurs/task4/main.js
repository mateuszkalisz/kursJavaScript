const txt = "blablabla";
let score = 12.54;
//wlasciwosci
txt.length; //podaj dlugosc tekstu
txt[2]; //podaj mi 3 znak tekstu

//metody
txt.toUpperCase(); //wywolujemy ta metode
txt.toUpperCase; //tutaj nie wywolujemy (tak z reguly nie robimy dla metod - tylko dla wlasciwosci bo tylko pokazujemy)

score.toFixed(); // zaokragla do calosci
score.toFixed(1); // zaokraglenie do 1 miejsca po przecinku

txt.indexOf("l"); // czy wystepuje dana litera i na ktorej pozycji liczac od 0 (jak nie ma to zwraca -1)

const newTxt = txt.toLowerCase();


const name = "Janek";
name.length; //typy proste nie maja wlasciwosci i metod ale silnk tworzy obiekt na tym etapie to zastosować :::::

//tworzy sie obiekt typu string np:
const nameTemporaryObj = new String(name);
//nastepnie robione jest to tak: nameTemporaryObj.length;
//i po tym zabiegu usuwany jest obiekt
//zwraca wartosc jaka chcielismy uzyskac (length)

//tworzenie obiektów:

const userName = new String("Jagieńka");
const userID = new Number(2);
const famale = new Boolean(true);