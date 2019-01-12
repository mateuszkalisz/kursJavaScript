//operatory - rozne zachowanie

2+2; // number
"2" + "2"; // string
"2" + 2; // string
2 + true; // = 3 (true zostanie zamienione na 1, jak false to 0)
"2" + true; // string = 2true

//zwracanie typu wartosci
typeof 1200;

//
let result;
//operacja przypisania
result = 1;
//operator inkrementacji
result++;

//OPERATORY ARYTMETYCZNE
let position = 2;

//inkrementacja - najpierw zwroci wartosc a pozniej doda
position++;
//dekrementacja - najpierw zwroci pozniej odejmie
position--;
//preinkrementacja -najpierw doda pozniej zwroci
++position;
//predekrementacja - najpierw odejmie pozniej zwroci wartosc
--position;

position+=10; // position = position + 10;
position-=10; // position = position - 10;
position*=5; // position = position *5;
position/=5; // position = position /5;

let newPosition = 0;
newPosition += position; // newPosition = newPosition + position;

//Modulo - reszta z dzielenia
10%9; // 10/9 = 1 i reszty 1 więc wynik 1;
20%4; // 20/4 = 5 i reszty 0 wiec wynik 0;

//potegowanie od ES6
2**5; //2^5

//OPERATORY LOGICZNE
20 > 40 // zwraca false
"tekst".length > 3; // false

"tekst" == "tekst2"; //porownuje czy jest to samo ->false

"2" == 2; // true -> bo program dokonał konwersji
"2" === 2; // false bo nie dokonuje w tym przypadku konwersji typów

"100" != 100; // false -> bo dokonywana jest konwersja
"100" !==100; // true; bo niedokonywana jest konwersja

100!=101; // zwraca true ->sprawdza czy są różne(tak, są)

//logiczne zaprzeczenie(negacja) - zamienia na typ boolean i odwraca
!0; // true
!1; // false
!2; // false
//podwojna negacja - zamienia na boolean i nieodrwraca
!!0; // false
!!100; // true
!!""; //false bo pole nie wypelnione
!!"aaa"; // true bo pole wypelnione

//suma logiczna (logiczne "lub")
true || false; // true
true || true; // true
false || false; // false

2 || 3; // jezeli pierwsze prawda to nie sprawdza drugiego i zwraca pierwsza wartosc czyli tutaj 2;
0 || 5; // jezeli pierwsza false to sprawdza drugą i zwroci w tym przypadku 5;


//iloczyn logiczny (logiczne "i")
true && true; // true
true && false; // false
false && false; // false

//operator warunkowy (trojargumentowy)
//warunek ? zrobTakJakPrawda : zrobTakJakFalsz
3>2 ? "tak" : "nie"


