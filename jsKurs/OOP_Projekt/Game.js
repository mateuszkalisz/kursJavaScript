class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.spanWallet = document.querySelector(".panel span.wallet");
        this.boards = [...document.querySelectorAll("div.color")];
        this.inputBid = document.getElementById("bid");
        this.spanResult = document.querySelector(".score span.result");
        this.spanNumber = document.querySelector(".score span.number");
        this.spanWin = document.querySelector(".score span.win");
        this.spanLoss = document.querySelector(".score span.loss");

        this.render();
    }

    render(colors = ["grey", "grey", "grey"], money = this.wallet.getWalletValue(), stats = this.stats.showGameStatistics(), result = "", bid = 0, wonMoney = 0) {
        console.log("gramy!");

        this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);

        this.spanWallet.textContent = money;

        this.spanNumber.textContent = stats[0];
        this.spanWin.textContent = stats[1];
        this.spanLoss.textContent = stats[2];

        if (result) {
            result = `Wygrałeś ${wonMoney}$. `;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}$. `;
        } else {
            return;
        }

        this.spanResult.textContent = result;
        this.inputBid.value = "";

    }

    startGame() {
        if (this.inputBid.value < 1) {
            return alert("Podaj poprawną kwotę! Kwota którą chcesz grać jest za mała :(");
        }
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) {
            return alert("Za mało środków na koncie lub podałeś nieprawidłową wartość!");
        }

        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();

        const colors = this.draw.getDrawResult();

        const win = Result.checkWinner(colors);

        const wonMoney = Result.moneyWinInGame(win, bid);

        this.wallet.changeWallet(wonMoney, "+");

        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), this.stats.showGameStatistics(), win, bid, wonMoney);
    }
}