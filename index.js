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
let markerChoice = "-";
let option;

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
    
    if (markerChoice === "-") {
        markerChoice = prompt('Pick a Marker: X or O').toLowerCase();
    }
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
    else {
        alert("Wrong input, try again.")
        playerTurn();
    }
}

// Function for Computer 
function computerTurn() {
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

    else if (markerChoice === "o") {
        option = "x";   

        let computerChoice = option;

        while (board[compFirstIndex][compSecondIndex] !== "-") {
                    compFirstIndex = Math.floor(Math.random() * 3);
                    compSecondIndex = Math.floor(Math.random() * 3);
                }
        
                board[compFirstIndex][compSecondIndex] = computerChoice;
    }
}

// Condition for winning
function winningCondition() {
    let winner;
    if ((board[0][0] !== "-") && (board[0][0] === board[0][1]) && (board[0][1] === board[0][2])) {
        if (board[0][0] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log("Game Over! 1 " + winner + " wins");
    }
    else if ((board[1][0] !== "-") && (board[1][0] === board[1][1]) && (board[1][1] === board[1][2])) {
        if (board[1][0] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 2 ' + winner + ' wins');
    }
    else if ((board[2][0] !== "-") &&(board[2][0] === board[2][1]) && (board[2][1] === board[2][2])) {
        if (board[2][0] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 3 ' + winner + ' wins');
    }
    else if ((board[0][0] !== "-") && (board[0][0] === board[1][0]) && (board[1][0] === board[2][0])) {
        if (board[0][0] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 4 ' + winner + ' wins');
    }
    else if ((board[0][1] !== "-") && (board[0][1] === board[1][1]) && (board[1][1] === board[2][1])) {
        if (board[0][1] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 5 ' + winner + ' wins');
    }
    else if ((board[0][2] !== "-") &&(board[0][2] === board[1][2]) && (board[1][2] === board[2][2])) {
        if (board[0][2] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 6' + winner + ' wins');
    }
    else if ((board[0][0] !== "-") && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
        if (board[0][0] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 7 ' + winner + ' wins');
    }
    else if ((board[0][2] !== "-") &&(board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
        if (board[0][2] === markerChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        console.log('Game Over! 8 ' + winner + ' wins');
    }
    else {
        // console.log("There is no Winner! Try again.");
    }
}


let play = true;

// while(play) {
//     playGame();
// }

function playGame() {
    playerTurn();
    alert(board);
    winningCondition();
    computerTurn();
    alert(board);
    winningCondition();
    console.log(board);
}



// Todo list
// end the game when player wins, don't let computer play


// Check if board has no empty spaces and input a draw in the else statement and start again
// Remove the numbers in the game overs