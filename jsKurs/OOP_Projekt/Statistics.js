class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win, //lub po prostu win (bez: win) - silnik js sobie poradzi
            bid: bid, //lub po prostu bid (bez: bid) - silnik sobie poradzi
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let numberWins = this.gameResults.filter(result => result.win).length;
        let numberLosses = this.gameResults.filter(result => !result.win).length;
        console.log(games, numberWins, numberLosses);
        return [games, numberWins, numberLosses];
    }
}


//const stats = new Statistics();