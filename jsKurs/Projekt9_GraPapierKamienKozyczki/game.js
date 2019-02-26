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

//funkcja sterująca
const startGame = function () {
    if (!game.playerHand) {
        return alert("wybierz dłoń!");
    }

    game.aiHand = aiChoice();
    console.log(game.aiHand);

}

document.querySelector(".start").addEventListener("click", startGame);