// // Gameboard object
// let gameBoard = {
//     // let board = [];
//     // let counter = 1;

//     // for (let i = 0; i < 3; i++) {
//     // board[i] = [];
//     //     for (let j = 0; j < 3; j++) {
//     //         board[i][j] = counter++;
//     //     }
//     // }

//     // console.log(board);

// };

// Player object
// function Player(name) {
//     this.name = name;
// };

// const user = new Player('User');
// const computer = new Player('Computer');

// objext to control flow of the game

// Todo list
// create grid
// place X or O in array
// set win conditions

let board = [];
let counter = "-";
let markerChoice;

for (let i = 0; i < 3; i++) {
board[i] = [];
    for (let j = 0; j < 3; j++) {
        board[i][j] = counter;
    }
}

var player;
var computer;

// Function for Player
function playerTurn() {
    markerChoice = prompt('Pick a Marker: X or O');
    let firstIndex = parseInt(prompt("Pick a number from 0 to 2 to select the Row"), 10);
    let secondIndex = parseInt(prompt("Pick a number from 0 to 2 to select the Column"), 10);

    if ((markerChoice === "o")) {
        if (board[firstIndex][secondIndex] === "-") {
            board[firstIndex][secondIndex] = markerChoice;
        }
        else {
            alert("You can't place a marker here, Play Again!");
            playerTurn();
        }
    }
    else if ((markerChoice === "x")) {
        if (board[firstIndex][secondIndex] === "-") {
            board[firstIndex][secondIndex] = markerChoice;
        }
        else {
            alert("You can't place a marker here, Play Again!");
            playerTurn();
        }
    }
}

// Function for Computer 
function computerTurn() {
    let option;
    // create random number from 0 to 2
    let compSecondIndex = Math.floor(Math.random() * 3);
    let compFirstIndex = Math.floor(Math.random() * 3);
    if (markerChoice === "x") {
        option = "o";
        let computerChoice = option;

        while (board[compFirstIndex][compSecondIndex] !== "-") {
            compFirstIndex = Math.floor(Math.random() * 3);
            compSecondIndex = Math.floor(Math.random() * 3);
        }

        board[compFirstIndex][compSecondIndex] = computerChoice;
    }

    // foremer code
        // if (board[compFirstIndex][compSecondIndex] === "-") {
        //     board[compFirstIndex][compSecondIndex] = computerChoice;
        // }else {
        //     alert("You can't place a marker here, Play Again!");
        //     computerTurn();
        // }
    // }
    else if (markerChoice === "o") {
        option = "x";   

        let computerChoice = option;

        while (board[compFirstIndex][compSecondIndex] !== "-") {
                    compFirstIndex = Math.floor(Math.random() * 3);
                    compSecondIndex = Math.floor(Math.random() * 3);
                }
        
                board[compFirstIndex][compSecondIndex] = computerChoice;
            }

        // former code
        // if (board[compFirstIndex][compSecondIndex] === "-") {
        //     board[compFirstIndex][compSecondIndex] = computerChoice;
        // }else {
        //     alert("You can't place a marker here, Play Again!");
        //     computerTurn();
        // }
    // }
}

// Condition for winning
function winningCondition() {
    if ((board[0][0] !== "-") && (board[0][0] === board[0][1]) && (board[0][1] === board[0][2])) {
        console.log("Game Over! 1");
    }
    else if ((board[1][0] !== "-") && (board[1][0] === board[1][1]) && (board[1][1] === board[1][2])) {
        console.log("Game Over! 2");
    }
    else if ((board[2][0] !== "-") &&(board[2][0] === board[2][1]) && (board[2][1] === board[2][2])) {
        console.log("Game Over! 3");
    }
    else if ((board[0][0] !== "-") && (board[0][0] === board[1][0]) && (board[1][0] === board[2][0])) {
        console.log("Game Over! 4");
    }
    else if ((board[0][1] !== "-") && (board[0][1] === board[1][1]) && (board[1][1] === board[2][1])) {
        console.log("Game Over! 5");
    }
    else if ((board[0][2] !== "-") &&(board[0][2] === board[1][2]) && (board[1][2] === board[2][2])) {
        console.log("Game Over! 6");
    }
    else if ((board[0][0] !== "-") && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
        console.log("Game Over! 7");
    }
    else if ((board[0][2] !== "-") &&(board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
        console.log("Game Over! 8");
    }
    else {
        // for(let i = 0; i < 3; i++){
        //     for(let j = 0; j < 3; j++) {
        //         if ((board[i][j] !== "o") || (board[i][j] !== "x")){
        //         }
        //     }
        // }
        playerTurn();
        alert(board);
        computerTurn();
        alert(board);
        winningCondition();
        console.log(board);
    }
}

winningCondition();



// Todo list
// alert message when trying to overwrite
// Check who won and show it
// cheeck for draw
// ensure users second turn doesn'nt overwrite
// stop computer from playing if game is won