Boolean("blabla"); //true
Boolean(0); // false
Boolean(""); //false
Boolean(2 >= 2); //true
Boolean({}); //true
Boolean([1, "blabla", false]); //true

//porownanie
2 > 4;
6 >= 4;
5 == 5;
//porównanie z konwersją:
"1" < 2;
"3" == 4;
// porównanie bez konwersji:
"2" == 2;

//negacja logiczna (i ew konwersja):
!false; // true
!0; // true
!200; // false
!true; //false

//podwójna negacja
!!true; //true
!!0; //false
!!""; //false

const userName1 = "Mieczysław";
const userName2 = "";

console.log(!!userName1);
console.log(!!userName2);

//lgoiczne i (oba elementy prawdziwe)

let userAge = 22;
let userMoney = 250;
let beerPrice = 9;

//warunek

console.log(userAge >= 18 && userMoney > beerPrice);

//logiczne lub (jeden element wystarczy ze prawdziwy)

const userConnections = "syn glownej ksiegowej";
const userExperience = 0;

Boolean(userConnections || userExperience);

//konwersja w drugą stronę - z boolean na inny typ

Number(true); // 1
Number(false); // 0
String(true); // true
String(false); // false