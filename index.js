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
let markerChoice;

for (let i = 0; i < 3; i++) {
board[i] = [];
    for (let j = 0; j < 3; j++) {
        board[i][j] = counter;
    }
}

var player;
var computer;


function playerTurn() {
    markerChoice = prompt('Pick a Marker: X or O');
    let firstIndex = parseInt(prompt("Pick a number from 0 to 2 to select the Row"), 10);
    let secondIndex = parseInt(prompt("Pick a number from 0 to 2 to select the Column"), 10);

    if ((markerChoice === "o")) {
        if (board[firstIndex][secondIndex] === 1) {
            board[firstIndex][secondIndex] = markerChoice;
        }
        else {
            alert("Invalid");
        }
    }
    else if ((markerChoice === "x")) {
        if (board[firstIndex][secondIndex] === 1) {
            board[firstIndex][secondIndex] = markerChoice;
        }
    }
    console.log(board);
}


function computerTurn() {
    let option;
    let compSecondIndex = Math.floor(Math.random() * 2);
    let compFirstIndex = Math.floor(Math.random() * 2);

    if (playerTurn === "x") {
        option = "o";
        let computerChoice = option;
        if (board[compFirstIndex][compSecondIndex] === 1) {
            board[compSecondIndex][compSecondIndex] = computerChoice;
        }
    }
    else if (markerChoice === "o") {
        option = "x";
        let computerChoice = option;
        if (board[compFirstIndex][compSecondIndex] === 1) {
            board[compSecondIndex][compSecondIndex] = computerChoice;
        }
    }
    // console.log(computerChoice);
    // console.log(compFirstIndex);
    // console.log(compSecondIndex);
}


function winningCondition() {
    if ((board[0][0] !== 1) && (board[0][0] === board[0][1]) && (board[0][1] === board[0][2])) {
        console.log("Game Over! 1");
    }
    else if ((board[1][0] !== 1) && (board[1][0] === board[1][1]) && (board[1][1] === board[1][2])) {
        console.log("Game Over! 2");
    }
    else if ((board[2][0] !== 1) &&(board[2][0] === board[2][1]) && (board[2][1] === board[2][2])) {
        console.log("Game Over! 3");
    }
    else if ((board[0][0] !== 1) && (board[0][0] === board[1][0]) && (board[1][0] === board[2][0])) {
        console.log("Game Over! 4");
    }
    else if ((board[0][1] !== 1) && (board[0][1] === board[1][1]) && (board[1][1] === board[2][1])) {
        console.log("Game Over! 5");
    }
    else if ((board[0][2] !== 1) &&(board[0][2] === board[1][2]) && (board[1][2] === board[2][2])) {
        console.log("Game Over! 6");
    }
    else if ((board[0][0] !== 1) && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
        console.log("Game Over! 7");
    }
    else if ((board[0][2] !== 1) &&(board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
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
        computerTurn();
        winningCondition();
    }
}

winningCondition();



// Tod list
// change 1 to -
// alert message when trying to overwrite
// Check who won and show it
// cheeck for draw
