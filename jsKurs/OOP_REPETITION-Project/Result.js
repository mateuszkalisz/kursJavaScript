class Result {
    static checkWin(drawResult) {
        if ((drawResult[0] === drawResult[1] && drawResult[1] === drawResult[2]) || (drawResult[0] !== drawResult[1] && drawResult[1] !== drawResult[2] && drawResult[0] !== drawResult[2])) {
            return true;
        } else return false;

    }
    static moneyWonInGame(resultGame, bid) {
        if (resultGame) {
            return bid * 3;
        } else return 0;
    }
}