class Game {
    constructor(start) {

        this.wallet = new Wallet(start);
        this.stats = new Statistics();

        this.inputMoney = document.getElementById("bid");
        this.colorDivs = [...document.querySelectorAll(".game div.color")];
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.walletMoney = document.querySelector(".panel span.wallet");

        this.result = document.querySelector(".score span.result");
        this.number = document.querySelector(".score span.number");
        this.win = document.querySelector(".score span.win");
        this.loss = document.querySelector(".score span.loss");

        this.render();
    }

    render(colors = ["grey", "grey", "grey"], money = this.wallet.getWalletValue(), stats = this.stats.showGamesStats(), result = "", wonMoney = 0, bid = 0) {

        this.colorDivs.forEach((color, index) => color.style.backgroundColor = colors[index]);
        this.walletMoney.textContent = money;
        this.number.textContent = stats[0];
        this.win.textContent = stats[1];
        this.loss.textContent = stats[2];

        if (result) {
            result = `Wygrałeś ${wonMoney}`;
        } else if (!result) {
            result = `Przegrałeś ${bid}`;
        } else {
            return;
        }

        this.result.textContent = result;
        this.inputMoney.value = "";
    }

    startGame() {
        if (this.inputMoney.value < 1) {
            return alert("Podaj poprawną kwotę! Kwota którą chcesz grać jest za mała :(");
        }
        const bid = Math.floor(this.inputMoney.value);
        if (!this.wallet.checkCanPlay(bid)) {
            return alert("Za mało środków na koncie lub podałeś nieprawidłową wartość!");
        }

        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();

        const drawColors = this.draw.getDrawResult();

        this.colorDivs.forEach((color, index) => color.style.backgroundColor = drawColors[index])

        const resultGame = Result.checkWin(drawColors);

        const wonMoney = Result.moneyWonInGame(resultGame, bid);

        this.wallet.changeWallet(wonMoney);

        this.stats.addGameToStats(resultGame, bid)

        this.render(drawColors, this.wallet.getWalletValue(), this.stats.showGamesStats(), resultGame, wonMoney, bid)

    }
}