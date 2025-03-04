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
const restart = document.querySelector('.restart');
const next = document.querySelector('.next');
const scoreForPlayer = document.querySelector(".playerscore");
const scoreForComputer = document.querySelector(".compscore");
const error = document.querySelector("#error");

// Checking for draw
let gridCount;

// Button Click functions
xmarker.addEventListener('click', addX);
omarker.addEventListener('click', addO);
submit.addEventListener('click', submitPosition);
restart.addEventListener('click', restartGame);
next.addEventListener('click', nextRound);

let mChoice, cChoice;
let playerScore = 0;
let computerScore = 0;
let winner;
let hasPlayerWon = false;
let hasComputerWon = false;

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

// Function for the submit button 
function submitPosition() {
    error.style.display = "none";
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
            error.style.display = "block";
            return;
        }
    }
    isGameWon();
    computerPlay();
    isGameWon();
    if (winner === "You"){
        playerScore += 1;
    }
    positionInput.value = "";
    scoreForPlayer.textContent = playerScore;
    scoreForComputer.textContent = computerScore;
}

// Computer functionality
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
        gridCount = 0; // Reset counter
        boxes.forEach(box => {
            if (box.textContent.trim() !== "") {
                gridCount++;
            }
        });
        if (gridCount === 8) {
            positionDiv.style.display = "none";
            winnerPara.textContent = ("Game Over! This is a Draw!");
        }
}

// Check for win
function isGameWon() {
    // let winner;
    // First Row
    let state;
    if ((topLeft.textContent !== "") && (topLeft.textContent === topCenter.textContent) && (topCenter.textContent === topRight.textContent)) {
        if (topLeft.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    //  Second Row
    else if ((middleLeft.textContent !== "") && (middleLeft.textContent === middleCenter.textContent) && (middleCenter.textContent === middleRight.textContent)) {
        if (middleLeft.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Third Row
    else if ((bottomLeft.textContent !== "") &&(bottomLeft.textContent === bottomCenter.textContent) && (bottomCenter.textContent === bottomRight.textContent)) {
        if (bottomLeft.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // First Column
    else if ((topLeft.textContent !== "") && (topLeft.textContent === middleLeft.textContent) && (middleLeft.textContent === bottomLeft.textContent)) {
        if (bottomLeft.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Second Column
    else if ((topCenter.textContent !== "") && (topCenter.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomCenter.textContent)) {
        if (topCenter.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Third Column
    else if ((topRight.textContent !== "") && (topRight.textContent === middleRight.textContent) && (middleRight.textContent === bottomRight.textContent)) {
        if (topRight.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Left Diagonal
    else if ((topLeft.textContent !== "") && (topLeft.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomRight.textContent)) {
        if (topLeft.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    // Right Diagonal
    else if ((topRight.textContent !== "") &&(topRight.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomLeft.textContent)) {
        if (topRight.textContent === mChoice) {
            winner = "You";
            state = "Win";
        }
        else {
            winner = "Computer";
            state = "Wins";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " " + state);
        winnerPara.style.display = "block";
        hasPlayerWon = true;
        hasComputerWon = true;
        positionDiv.style.display = "none";
    }
    else {
        // console.log("There is no Winner! Try again.");
        
    }
}

// Restart game fucntion
function restartGame() {
    xmarker.style.display = "inline";
    omarker.style.display = "inline";
    positionDiv.style.display = "none";
    winnerPara.style.display = "none";
    topLeft.textContent = "";
    topCenter.textContent = "";
    topRight.textContent = "";
    middleLeft.textContent = "";
    middleCenter.textContent = "";
    middleRight.textContent = "";
    bottomLeft.textContent = "";
    bottomCenter.textContent = "";
    bottomRight.textContent = "";
    hasPlayerWon = false;
    hasComputerWon = false;
    gridCount = 0;
    mChoice = "";
    cChoice = "";
    winner = "";
    playerScore = 0;
    computerScore = 0;
    scoreForPlayer.textContent = "";
    scoreForComputer.textContent = "";
}

// Start a new round
function nextRound() {
    xmarker.style.display = "inline";
    omarker.style.display = "inline";
    positionDiv.style.display = "none";
    winnerPara.style.display = "none";
    topLeft.textContent = "";
    topCenter.textContent = "";
    topRight.textContent = "";
    middleLeft.textContent = "";
    middleCenter.textContent = "";
    middleRight.textContent = "";
    bottomLeft.textContent = "";
    bottomCenter.textContent = "";
    bottomRight.textContent = "";
    hasPlayerWon = false;
    hasComputerWon = false;
    gridCount = 0;
    mChoice = "";
    cChoice = "";
    winner = "";
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