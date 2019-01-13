const integerExample = 100;
const decimalExample = 100.212;
typeof integerExample; //w js jest tylko number, w innych integer
typeof decimalExample; //w js jest tylko number, w innych jest decimal lub float

//js akceptuje rozne systemy liczbowe (poza dziesietnym)
//reprezentacja szesnastkowa
const hexNumber = 0xff; //znamy z css czyli 255 w systemie dziesietnym

//mamy system osemkowy czy binarny
console.log(0b011101);

//notacja naukowa
console.log(5e2); //5*100

//przykladowe metody ktore mozna wykonac na liczbie
const newNumber = 123.4512;

//zaokraglenia
newNumber.toFixed(2); //zaokraglenie do 2 liczb po przecinku

//zmiana typu z number na string
newNumber.toString(); //na system dziesietny
newNumber.toString(2); // na system dwójkowy (binarny)
newNumber.toString(16); // na system 16tkowy

//method .toExponential() - zamiana na notacje naukowa(tez jako string)

newNumber.toExponential(); //1.234512e2

//sprawdzanie czy jest liczba calkowitą
Number.isInteger(decimalExample); //false
Number.isInteger(10.2); //false
Number.isInteger(integerExample); //true
Number.isInteger(10); //true

//sprawdzanie czy dana liczba jest skonczona(prawdlowa)
Number.isFinite(2); //true
Number.isFinite(NaN); //false
Number.isFinite(3e400); //false, poniewaz max liczba to 1e308, najmniejsza to -1e308
Number.isFinite(3e300); //true

// NaN - not a number, "liczna ktora nie jest liczba" czyli jak mnozymy numer przez string np.
typeof NaN; //typ number

//infinity - gdy przekroczymy max lub min wartosci lub przy dzieleniu przez 0
typeof Infinity; //typ number

//tworzenie obiektu instancji number
const numberObj = new Number();
const numberObj2 = new Number("Maja"); //podanie stringa da NaN, true da 1, false 0
const numberObj3 = new Number("222.222"); //przekonwertuje sobie na number i da 222.222
const numberObj4 = new Number(222.222); //da to samo co wyzej

//konwersja jawna - inny typ number
Number('210'); // 210
Number(true); // 1
Number(""); // 0
Number("cos"); // NaN - jesli nie moze zamienic tego na liczbe

//triki:
// "20" * 1; // =20 /niejawna konwersja na number
// +"20"; // = 20 (number)
// 20 + "" // = "20" (string)

//parsowanie:
parseInt('20', 10); //20
parseInt('0xff', 16); //255
parseInt('100', 2); //4
parseInt('102'); //102

parseFloat("2.52"); // 2.52

//wykorzystanie wbudowanego obiektu math:
Math.round(200.55); //201
Math.round(200.45); //200
Math.floor(200.55); //200
Math.random(); // podaje losowa liczbe