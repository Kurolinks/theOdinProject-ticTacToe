// Select Elements
const xmarker = document.querySelector("#xmarker");
const omarker = document.querySelector("#omarker");
const topLeft = document.querySelector(".top-left p");
const topCenter = document.querySelector(".top-center p");
const topRight = document.querySelector(".top-right p");
const middleLeft = document.querySelector(".middle-left p");
const middleCenter = document.querySelector(".middle-center p");
const middleRight = document.querySelector(".middle-right p");
const bottomLeft = document.querySelector(".bottom-left p");
const bottomCenter = document.querySelector(".bottom-center p");
const bottomRight = document.querySelector(".bottom-right p");
const positionDiv = document.querySelector(".position");
const positionInput = document.querySelector("#position-input");
const submit = document.querySelector("#submit");
const winnerPara = document.querySelector(".winner");
const boxes = document.querySelectorAll('.grid p');

// Checking for draw
let occupiedCount;

function checkForDraw() {
    occupiedCount = 0; // Reset counter
    boxes.forEach(box => {
        if (box.textContent.trim() !== "") {
            occupiedCount++;
        }
    });
    if (occupiedCount === 8) {
        alert("8 boxes are occupied.");
    }
};

// Button Click functions
xmarker.addEventListener('click', addX);
omarker.addEventListener('click', addO);
submit.addEventListener('click', submitPosition);

let mChoice, cChoice;
// Function to select X
function addX() {
    positionDiv.style.display = "block";
    xmarker.style.display = "none";
    omarker.style.display = "none";
    mChoice = "x";
    cChoice = "o";
}

// Function to select O
function addO() {
    positionDiv.style.display = "block";
    xmarker.style.display = "none";
    omarker.style.display = "none";
    mChoice = "0";
    cChoice = "x";
}

let hasPlayerWon = false;
let hasComputerWon = false;

// Function for the submit button 
function submitPosition() {
    let position = parseInt(positionInput.value, 10);
    if (positionInput.value.trim() === '' || isNaN(position) || position < 1 || position > 9) {
        alert("Invalid input, try again!");
        positionInput.value = "";
        return
    }

    else {
        if (position === 1 && topLeft.textContent === "") {
            topLeft.textContent = mChoice;
        }
        else if (position === 2 && topCenter.textContent === "") {
            topCenter.textContent = mChoice;
        }
        else if (position === 3 && topRight.textContent === "") {
            topRight.textContent = mChoice;
        }
        else if (position === 4 && middleLeft.textContent === "") {
            middleLeft.textContent = mChoice;
        }
        else if (position === 5 && middleCenter.textContent === "") {
            middleCenter.textContent = mChoice;
        }
        else if (position === 6 && middleRight.textContent === "") {
            middleRight.textContent = mChoice;
        }
        else if (position === 7 && bottomLeft.textContent === "") {
            bottomLeft.textContent = mChoice;
        }
        else if (position === 8 && bottomCenter.textContent === "") {
            bottomCenter.textContent = mChoice;
        }
        else if (position === 9 && bottomRight.textContent === "") {
            bottomRight.textContent = mChoice;
        }
        else {
            alert("You picked an invalid position, try again!");
        }
    }
    isGameWon();
    computerPlay();
    isGameWon();
    positionInput.value = "";
}

function computerPlay() {
    let compIndex;
        do {
            compIndex = Math.floor(Math.random() * 9) + 1;
        } while (
            (compIndex === 1 && topLeft.textContent !== "") ||
            (compIndex === 2 && topCenter.textContent !== "") ||
            (compIndex === 3 && topRight.textContent !== "") ||
            (compIndex === 4 && middleLeft.textContent !== "") ||
            (compIndex === 5 && middleCenter.textContent !== "") ||
            (compIndex === 6 && middleRight.textContent !== "") ||
            (compIndex === 7 && bottomLeft.textContent !== "") ||
            (compIndex === 8 && bottomCenter.textContent !== "") ||
            (compIndex === 9 && bottomRight.textContent !== "")
        );

        if (compIndex === 1 && topLeft.textContent === "" && !hasPlayerWon) {
            topLeft.textContent = cChoice;
        }
        else if (compIndex === 2 && topCenter.textContent === "" && !hasPlayerWon) {
            topCenter.textContent = cChoice;
        }
        else if (compIndex === 3 && topRight.textContent === "" && !hasPlayerWon) {
            topRight.textContent = cChoice;
        }
        else if (compIndex === 4 && middleLeft.textContent === "" && !hasPlayerWon) {
            middleLeft.textContent = cChoice;
        }
        else if (compIndex === 5 && middleCenter.textContent === "" && !hasPlayerWon) {
            middleCenter.textContent = cChoice;
        }
        else if (compIndex === 6 && middleRight.textContent === "" && !hasPlayerWon) {
            middleRight.textContent = cChoice;
        }
        else if (compIndex === 7 && bottomLeft.textContent === "" && !hasPlayerWon) {
            bottomLeft.textContent = cChoice;
        }
        else if (compIndex === 8 && bottomCenter.textContent === "" && !hasPlayerWon) {
            bottomCenter.textContent = cChoice;
        }
        else if (compIndex === 9 && bottomRight.textContent === "" && !hasPlayerWon) {
            bottomRight.textContent = cChoice;
        }
        
}

// Make the game work with the UI
// create an error message and make the user go again,stop computer from playing
// stop computer from playing
// Check draw condition
// check if 8 spaces are occupied and declare result

// Use objects

function isGameWon() {
    let winner;
    // First Row
    if ((topLeft.textContent !== "") && (topLeft.textContent === topCenter.textContent) && (topCenter.textContent === topRight.textContent)) {
        if (topLeft.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 1 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    //  Second Row
    else if ((middleLeft.textContent !== "") && (middleLeft.textContent === middleCenter.textContent) && (middleCenter.textContent === middleRight.textContent)) {
        if (middleLeft.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 2 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Third Row
    else if ((bottomLeft.textContent !== "") &&(bottomLeft.textContent === bottomCenter.textContent) && (bottomCenter.textContent === bottomRight.textContent)) {
        if (bottomLeft.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 3 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // First Column
    else if ((topLeft.textContent !== "") && (topLeft.textContent === middleLeft.textContent) && (middleLeft.textContent === bottomLeft.textContent)) {
        if (bottomLeft.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 4 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Second Column
    else if ((topCenter.textContent !== "") && (topCenter.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomCenter.textContent)) {
        if (topCenter.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 5 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Third Column
    else if ((topRight.textContent !== "") && (topRight.textContent === middleRight.textContent) && (middleRight.textContent === bottomRight.textContent)) {
        if (topRight.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 6 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Left Diagonal
    else if ((topLeft.textContent !== "") && (topLeft.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomRight.textContent)) {
        if (topLeft.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 7 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Right Diagonal
    else if ((topRight.textContent !== "") &&(topRight.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomLeft.textContent)) {
        if (topRight.textContent === mChoice) {
            winner = "Player";
        }
        else {
            winner = "Computer";
        }
        play = false;
        winnerPara.textContent = ("Game Over! 8 " + winner + " wins");
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    else {
        // console.log("There is no Winner! Try again.");
        checkForDraw();
    }
}


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