class Result {

    static moneyWinInGame(result, bid) {
        if (result) {
            return 3 * bid;
        } else {
            return 0;
        }
    }

    static checkWinner(drawResult) {
        if ((drawResult[0] === drawResult[1] && drawResult[1] === drawResult[2]) || (drawResult[0] !== drawResult[1] && drawResult[1] !== drawResult[2] && drawResult[0] !== drawResult[2])) {
            return true;
        } else return false;
    }
}

//console.log(Result.moneyWinInGame(true, 20));