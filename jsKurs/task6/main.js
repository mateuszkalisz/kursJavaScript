//tworzenie stringa
const userName = "Mateusz Kalisz";
const userName2 = 'MateuszKalisz2';
const userName3 = `MateuszKalisz3`; //super string od es6

const secondLetter = userName[1]; //wyciagniecie 2 litery

const objUserName = new String(userName);

//obiekt, bedacy instancja string

const emptyObjString = new String();
const emptyObjString2 = new Object("");

//METODY DLA TYPU STRING

userName.toUpperCase();
userName.toLowerCase();

userNameUpperCase = userName.toUpperCase();

//dostanie sie do wlasciwosci:
userName.length; //notacja kropkowa
userName['length']; // notacja tablicowa

//pobranie konkretnego znaku
userName.charAt(2);
userName[2];

//laczenie stringow
userName.concat(" - to dobry ziomek!");
userName + " - to fajne imie!";

`${userName} - to niezly gość!`; // nowy sposob - za pomoca superstringa

//ktory index ma dany znak:
userName.indexOf('u'); //sprawdza na ktorej pozycji stoi dany znak (pierwszy od przodu)

userName.lastIndexOf('z'); // sprawdza na ktorym miejscu stoi znak (pierwszy od tylu)

//zawsze liczy od przodu (tylko sprawdza od ktorej strony wybieramy, bo moze byc ich kilka)

//czy dany znak wystepuje w lancuchu znakow:
userName.includes("s");
userName.includes("b");

//pozybycie sie bialych znakow na poczatku i na koncu lancucha:
const afterTrim = "   słowo    ".trim();

//skopiuj lancuch tyle razy ile podamy w argumencie
const repeatString = "word".repeat(5);

//zwroc jakis fragment lancucha, jako pierwsze gdzie ma zaczac jako drugi gdzie ma skonczyc[bez tego](podajemy indeksy)
const slideWord = userName.slice(0, 3);

//cudzyslow w srodku stringa:
const singleQUoteExample = 'i\'m Magda';
//uzycie backslasha (trzeba dwa razy)
const slash = "ktos\\cos";

//przejdz do drugiej linii:
const longText = 'tekst \n tekst';

//superstring:
const superText = `tekst
tekst w nowej linii i
cudzysłów "
i apostrof '`;

//konwersja innego typu na stringa
String(100000); // "100000"

200..toString();
let n = 1;
n.toString();