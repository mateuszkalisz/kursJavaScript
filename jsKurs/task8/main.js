//instrukcja warunkowa if

const condition = 1;

if (condition) {
    console.log("warunek prawdziwy!");
    alert("działa!");
}

const userName = "Mateusz";

if (userName !== "") {
    console.log("witaj " + userName);
}

const userAge = 19;
const hasTicket = false;

if (hasTicket && userAge) {
    console.log("wchodzisz");
} else {
    console.log("przykro mi");
}

const bossFamily = true;

if (hasTicket && userAge || bossFamily) {
    console.log("wchodzisz");
} else {
    console.log("przykro mi");
}

//else if

const age = 15;

if (age <= 9) {
    console.log("jseteś jeszcze dzieckiem");
} else if (age <= 18) {
    console.log("jestes mlodziezą");
} else if (age <= 70) {
    console.log("caly swiat przed Tobą");
} else {
    console.log("piekny wiek!");
}

//zagnieżdzanie if

const guestName = "Bolek";
const guestAge = 12;

if (guestName) {
    if (guestAge > 18) {
        console.log("witaj w klubie");
    } else {
        console.log("no niestety nie wejdziesz");
    }
}

