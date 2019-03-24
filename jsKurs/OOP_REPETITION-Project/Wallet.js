class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletValue = () => _money;

        this.checkCanPlay = (value) => {
            if (value <= _money) {
                return true;
            } else return alert("Nie masz kasy, żeby grać dalej :(");
        }
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    _money += value;
                } else if (type === "-") {
                    _money -= value;
                } else {
                    throw new Error("Nieprawidłowy typ działania!")
                }
            } else throw new Error("Nieprawidłowa liczba!")
        }
    }
}



//const wallet = new Wallet(20);