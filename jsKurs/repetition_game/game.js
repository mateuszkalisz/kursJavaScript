const game = {
    playerHand: "",
    aiHand: "",
}

const gameSummary = {
    numbers: 0,
    wins: 0,
    draws: 0,
    losses: 0,
}

const hands = [...document.querySelectorAll(".select img")];

hands.forEach(hand => hand.addEventListener("click", handChoise));

function handChoise() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 30px 8px green";
}

//funkcja sterująca:

const aiChoice = function () {
    const index = Math.floor(Math.random() * hands.length);
    const aiHand = hands[index].dataset.option;
    return aiHand;
}

const whoWin = () => {

    if ((game.playerHand === "nożyczki" && game.aiHand === "papier") || (game.playerHand === "kamień" && game.aiHand === "nożyczki") || (game.playerHand === "papier" && game.aiHand === "kamień")) {
        return "win";
    } else if ((game.aiHand === "nożyczki" && game.playerHand === "papier") || (game.aiHand === "kamień" && game.playerHand === "nożyczki") || (game.aiHand === "papier" && game.playerHand === "kamień")) {
        return "loss";
    } else {
        return "draw";
    }
}

function checkPlayerSelection() {
    if (!game.playerHand) return alert("Musisz wybrać dłoń!")
}


const showResults = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    gameSummary.numbers++;

    document.querySelector("p.numbers span").textContent = gameSummary.numbers;

    if (result === "win") {

        gameSummary.wins++;
        document.querySelector("p.wins span").textContent = gameSummary.wins;

        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {

        gameSummary.losses++;
        document.querySelector("p.losses span").textContent = gameSummary.losses;

        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('[data-summary="who-win"]').textContent = "Remis";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";

        gameSummary.draws++;
        document.querySelector("p.draws span").textContent = gameSummary.draws;
    }
}

function restartGame() {
    game.playerHand = "";
    game.aiHand = "";
    hands.forEach(hand => hand.style.boxShadow = "");
}


const startGameInitialization = function () {
    checkPlayerSelection();
    game.aiHand = aiChoice();
    const gameResult = whoWin();
    showResults(game.playerHand, game.aiHand, gameResult);
    restartGame();
}

const btn = document.querySelector("button");
btn.addEventListener("click", startGameInitialization);