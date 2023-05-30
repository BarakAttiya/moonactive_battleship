const BOARDGAME_WIDTH = 8;
const BOARDGAME_HEIGHT = 5;

boardgame = new Array(BOARDGAME_HEIGHT).fill(new Array(BOARDGAME_WIDTH).fill(0));

//playerShipsCoords is a "list" of coordinates -> once empty after game starts -> Win.
playerShipsCoords = ""; //Holds all ships coordinates. each coordinate will be represented as "|x,y|", e.g. |2,3||2,4| for submarine sized 2

function placingShips(boardgame){
    //As described in question 3 => fills boardgame and playerShipsCoords accordingly
}

function playGame(boardgame){
    placingShips(boardgame);
    win = false;
    while (!win){
        win = hit(boardgame);
    }
    console.log("You WON!");
}

function hit(boardgame){
    y = Math.random() * 10 % BOARDGAME_HEIGHT;
    x = Math.random() * 10 % BOARDGAME_WIDTH;
    switch(boardgame[x][y]){
        case 0:
        case -1:
            boardgame[x][y] = "X";
            break;
        case "X":
        case "H":
            break;
        default:
            boardgame[x][y] = "H";
            playerShipsCoords = playerShipsCoords.replace("|" + x + "," + y + "|", "");
            if (playerShipsCoords === ""){
                return true;
            }
    }

}




