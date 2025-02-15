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
let counter = 1;

for (let i = 0; i < 3; i++) {
board[i] = [];
    for (let j = 0; j < 3; j++) {
        board[i][j] = counter++;
    }
}

var player;
var computer;


function playerTurn() {
    let markerChoice = prompt('Pick a Marker: X or O').toLowerCase;
    let firstIndex = parseInt(prompt("Pick a number from 0 to 2 to select the Row"), 10);
    let secondIndex = parseInt(prompt("Pick a number from 0 to 2 to select the Column"), 10);

    if ((markerChoice === "A")) {
        board[firstIndex][secondIndex] = markerChoice;
    }
    else if ((markerChoice === "x")) {
        board[firstIndex][secondIndex] = markerChoice;
    }
    console.log(board);
}
// if (positionChoice == 1) {
//     console.log("X")
// }

function computerTurn() {
    let options = ['X', 'O'];
    let index = Math.floor(Math.random() * 2);
    let compSecondIndex = Math.floor(Math.random() * 2);
    let compFirstIndex = Math.floor(Math.random() * 2);
    let computerChoice = options[index];
    // console.log(computerChoice);
    // console.log(compFirstIndex);
    // console.log(compSecondIndex);

    if ((computerChoice.toLocaleLowerCase === "o")) {
        board[compSecondIndex][compSecondIndex] = computerChoice;
    }
    else if ((computerChoice.toLowerCase = 'x')) {
        board[compSecondIndex][compSecondIndex] = computerChoice;
    }
}


function winningCondition() {
    if ((board[0] === board[1]) && (board[1] === board[2])) {
        console.log("Game Over! 1");
    }
    // else if ((board[3] === board[4]) && (board[4] === board[5])) {
    //     console.log("Game Over! 2");
    // }
    // else if ((board[6] === board[7]) && (board[7] === board[8])) {
    //     console.log("Game Over! 3");
    // }
    else if ((board[0] === board[3]) && (board[3] === board[6])) {
        console.log("Game Over! 4");
    }
    else if ((board[1] === board[4]) && (board[4] === board[7])) {
        console.log("Game Over! 5");
    }
    else if ((board[2] === board[5]) && (board[5] === board[8])) {
        console.log("Game Over! 6");
    }
    else if ((board[0] === board[4]) && (board[4] === board[8])) {
        console.log("Game Over! 7");
    }
    else if ((board[2] === board[4]) && (board[4] === board[6])) {
        console.log("Game Over! 8");
    }
    else {
        // for(let i = 0; i < 9; i++){
        //     if ((board[i] !== "o") || (board[i] !== "x")){
                playerTurn();
                computerTurn();
        //     }
        // }
    }
}

winningCondition();