class Statistics {
    constructor() {
        this.gamesStats = [];
    }

    addGameToStats(win, bid) {
        let _stats = {
            win: win,
            bid: bid,
        }
        this.gamesStats.push(_stats);
    }
    showGamesStats() {
        let numberGames = this.gamesStats.length;
        let wins = this.gamesStats.filter(game => game.win).length;
        let losses = this.gamesStats.filter(game => !game.win).length;

        return [numberGames, wins, losses];
    }
}

//const stat = new Statistics();