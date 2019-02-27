const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")];

//pierwsza funkcja
function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px yellow";
}

hands.forEach(hand => hand.addEventListener("click", handSelection));


const aiChoice = function () {
    const index = Math.floor(Math.random() * 3);
    const aiHand = hands[index].dataset.option;
    return aiHand;
}

const checkResult = function (player, ai) {

    if (player === ai) {
        //console.log("remis");
        return "draw";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki") && (ai === "papier")) {
        //console.log("wygrałeś")
        return "win";
    } else {
        //console.log("przegrałeś");
        return "loss";
    }

}

const publishResult = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.numbers++;

    document.querySelector("p.numbers span").textContent = gameSummary.numbers;

    if (result == "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;

        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";

    } else if (result == "draw") {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;

        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";

    } else {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;

        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś";
        document.querySelector('[data-summary="who-win"]').style.color = "red";

    }
}

//funkcja sterująca
const startGame = function () {
    if (!game.playerHand) {
        return alert("wybierz dłoń!");
    }

    game.aiHand = aiChoice();
    console.log(game.aiHand);
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);

    publishResult(game.playerHand, game.aiHand, gameResult);

}

document.querySelector(".start").addEventListener("click", startGame);