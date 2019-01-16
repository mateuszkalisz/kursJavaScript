//instrukcja switch

const dayOfTheWeek = "sroda";

switch (dayOfTheWeek) {
    case "poniedzialek":
        console.log("dzis jest poniedzialek");
        break;

    case "wtorek":
        console.log("dzis jest wtorek");
        break

    case "sroda":
        console.log("dzis jest sroda!")
        break;

    case "piatek":
        console.log("piatek weekendu poczatek!");
        break;

    default:
        console.log("nie wiem co to za dzien");
        break;
}

//operator warunkowy:

const score = 100;

20 === "20" && score ? console.log("prawda") : console.log("falsz");

console.log(1 > 10 ? 1 : 0);

//z ifa nie mozna przejąć wartosci do zmiennej a z operatora warunkowego tak:
//#1
let gameResult = 0;
let killedMonsters = 11;
gameResult += killedMonsters > 10 ? 1 : 0;

//#2
const playerName = "Msciwoj";

console.log(`Witaj ${playerName ? playerName : "nieznajomy wojowniku!"}`);