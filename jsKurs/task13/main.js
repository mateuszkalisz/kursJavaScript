//LOOPS - pętle

//FOR

for (let i = 0; i < 10; i++) {
    console.log("iteracja: " + (i + 1));
}

let j = 11;
for (; j <= 20;) {
    console.log(j);
    j++;
}

//WHILE

//przyklad 1
let number = 20;
while (number < 30) {
    console.log("petla while: " + number);
    number++;
}

//przyklad 2
let money = 50;
while (money >= 8) {
    console.log("Mam jeszcze" + money + " złotych. TO pijemy piwko!");
    money -= 8;
}

alert(`za ${money} złote, juz piwka nie kupię :( `);

//przyklad 3
let gasoline = 40;
let km = 0;

while (gasoline--) {
    km += 18;
    console.log("Przejechalismy " + km + " kilometrów." + " Zostało nam jesze " + gasoline + " litrów benzyny");
}

//PETLA DO...WHILE:

do {
    console.log("ide do szkoły");
}
while (false);

//przynajmniej raz sie wykona