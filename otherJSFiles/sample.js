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
const boxesDiv = document.querySelector('.grid');

xmarker.addEventListener('click', addX);
omarker.addEventListener('click', addO);
restart.addEventListener('click', restartGame);
next.addEventListener('click', nextRound);

// Function to select X
function addX() {
    xmarker.style.display = "none";
    omarker.style.display = "none";
    boxesDiv.style.cursor = "pointer";
    mChoice = "x";
    cChoice = "o";
}

// Function to select O
function addO() {
    xmarker.style.display = "none";
    omarker.style.display = "none";
    boxesDiv.style.cursor = "pointer";
    mChoice = "0";
    cChoice = "x";
}

let play = true;
let mChoice, cChoice;
let playerScore = 0;
let computerScore = 0;
let winner;
let hasPlayerWon = false;

// Player Functionality
function playerTurn() {
    // Second: Click a spot to place a marker
    topLeft.addEventListener('click', addmarker1);
    topCenter.addEventListener('click', addmarker2);
    topRight.addEventListener('click', addmarker3);
    middleLeft.addEventListener('click', addmarker4);
    middleCenter.addEventListener('click', addmarker5);
    middleRight.addEventListener('click', addmarker6);
    bottomLeft.addEventListener('click', addmarker7);
    bottomCenter.addEventListener('click', addmarker8);
    bottomRight.addEventListener('click', addmarker9);


    function addmarker1() {
        if (topLeft.textContent === "") {            
            topLeft.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker2() {
        if (topCenter.textContent === "") {
            topCenter.textContent= mChoice;
            computerPlay();
        }
    }
    function addmarker3() {
        if (topRight.textContent === "") {
            topRight.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker4() {
        if (middleLeft.textContent === "") {
            middleLeft.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker5() {
       if (middleCenter.textContent === "") {
            middleCenter.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker6() {
       if (middleRight.textContent === "") {
            middleRight.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker7() {
       if (bottomLeft.textContent === "") {
            bottomLeft.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker8() {
       if (bottomCenter.textContent === "") {
            bottomCenter.textContent = mChoice;
            computerPlay();
        }
    }
    function addmarker9() {
       if (bottomRight.textContent === "") {
            bottomRight.textContent = mChoice;
            computerPlay();
        }
    }
    scoreForPlayer.textContent = playerScore;
    scoreForComputer.textContent = computerScore;
}

playerTurn();

// Computer Functionality
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
        winnerPara.style.display = "block";
        winnerPara.textContent = ("Game Over! This is a Draw!");
    }
    isGameWon();
    scoreForPlayer.textContent = playerScore;
    scoreForComputer.textContent = computerScore;
}


function isGameWon() {
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
        positionDiv.style.display = "none";
    }
    // Right Diagonal
    else if ((topRight.textContent !== "") && (topRight.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomLeft.textContent)) {
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
        positionDiv.style.display = "none";
    }
    else {
        // console.log("There is no Winner! Try again.");
        
    }
    if (winner === "You") {
        playerScore += 1;
    }
    else if (winner === "Computer") {
        computerScore += 1;
    }
    winner = "";
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
    gridCount = 0;
    mChoice = "";
    cChoice = "";
    winner = "";
}