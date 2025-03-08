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
const scoreForPlayerOne = document.querySelector(".playerscore");
const scoreForPlayerTwo = document.querySelector(".compscore");
const error = document.querySelector("#error");
const boxesDiv = document.querySelector('.grid');

xmarker.addEventListener('click', addX);
omarker.addEventListener('click', addO);
restart.addEventListener('click', restartGame);
next.addEventListener('click', nextRound);


let play = true;
let firstChoice, secondChoice, choice;
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let winner;
let hasPlayerOneWon = false;
let oddorEven = 1;

// Function to slect X
function addX() {
    xmarker.style.display = "none";
    omarker.style.display = "none";
    boxesDiv.style.cursor = "pointer";
    firstChoice = "x";
    secondChoice = "o";
    playerTurn();
}

// Function to select O
function addO() {
    xmarker.style.display = "none";
    omarker.style.display = "none";
    boxesDiv.style.cursor = "pointer";
    firstChoice = "0";
    secondChoice = "x";
    playerTurn();
}

// Player Functionality
function playerTurn() {

    const elements = [
        { element: topLeft, handler: addmarker1 },
        { element: topCenter, handler: addmarker2 },
        { element: topRight, handler: addmarker3 },
        { element: middleLeft, handler: addmarker4 },
        { element: middleCenter, handler: addmarker5 },
        { element: middleRight, handler: addmarker6 },
        { element: bottomLeft, handler: addmarker7 },
        { element: bottomCenter, handler: addmarker8 },
        { element: bottomRight, handler: addmarker9 }
    ];
    
    elements.forEach(({ element, handler }) => {
        element.addEventListener('click', handler);
    });

    function addmarker1() {
        if (topLeft.textContent === "") {   
            if (oddorEven % 2 === 1) {
                choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }         
            topLeft.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker2() {
        if (topCenter.textContent === "") {
            if (oddorEven % 2 === 1) {
                choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            topCenter.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker3() {
        if (topRight.textContent === "") {
            if (oddorEven % 2 === 1) {
                choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            topRight.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker4() {
        if (middleLeft.textContent === "") {
            if (oddorEven % 2 === 1) {
                choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            middleLeft.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker5() {
       if (middleCenter.textContent === "") {
            if (oddorEven % 2 === 1) {
            choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            middleCenter.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker6() {
       if (middleRight.textContent === "") {
            if (oddorEven % 2 === 1) {
            choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            middleRight.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker7() {
       if (bottomLeft.textContent === "") {
            if (oddorEven % 2 === 1) {
            choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }

            bottomLeft.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker8() {
       if (bottomCenter.textContent === "") {
            if (oddorEven % 2 === 1) {
            choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            bottomCenter.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
    function addmarker9() {
       if (bottomRight.textContent === "") {
            if (oddorEven % 2 === 1) {
            choice = firstChoice;
            }
            else {
                choice = secondChoice;
            }
            bottomRight.textContent = choice;
            oddorEven += 1;
            isGameWon();
            // secondPlayerTurn();
        }
    }
}

function isGameWon() {
    // First Row
    if ((topLeft.textContent !== "") && (topLeft.textContent === topCenter.textContent) && (topCenter.textContent === topRight.textContent)) {
        if (topLeft.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    //  Second Row
    else if ((middleLeft.textContent !== "") && (middleLeft.textContent === middleCenter.textContent) && (middleCenter.textContent === middleRight.textContent)) {
        if (middleLeft.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    // Third Row
    else if ((bottomLeft.textContent !== "") &&(bottomLeft.textContent === bottomCenter.textContent) && (bottomCenter.textContent === bottomRight.textContent)) {
        if (bottomLeft.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    // First Column
    else if ((topLeft.textContent !== "") && (topLeft.textContent === middleLeft.textContent) && (middleLeft.textContent === bottomLeft.textContent)) {
        if (bottomLeft.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    // Second Column
    else if ((topCenter.textContent !== "") && (topCenter.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomCenter.textContent)) {
        if (topCenter.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    // Third Column
    else if ((topRight.textContent !== "") && (topRight.textContent === middleRight.textContent) && (middleRight.textContent === bottomRight.textContent)) {
        if (topRight.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    // Left Diagonal
    else if ((topLeft.textContent !== "") && (topLeft.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomRight.textContent)) {
        if (topLeft.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    // Right Diagonal
    else if ((topRight.textContent !== "") && (topRight.textContent === middleCenter.textContent) && (middleCenter.textContent === bottomLeft.textContent)) {
        if (topRight.textContent === firstChoice) {
            winner = "Player One";
        }
        else {
            winner = "Player Two";
        }
        play = false;
        winnerPara.textContent = ("Game Over! " + winner + " wins");
        winnerPara.style.display = "block";
        hasPlayerOneWon = true;
        positionDiv.style.display = "none";
    }
    else {
        // console.log("There is no Winner! Try again.");
        
    }
    if (winner === "Player One") {
        firstPlayerScore += 1;
    }
    else if (winner === "Player Two") {
        secondPlayerScore += 1;
    }
    winner = "";

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

    scoreForPlayerOne.textContent = firstPlayerScore;
    scoreForPlayerTwo.textContent = secondPlayerScore;
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
    hasPlayerOneWon = false;
    gridCount = 0;
    firstChoice = "";
    secondChoice = "";
    choice = "";
    winner = "";
    firstPlayerScore = 0;
    secondPlayerScore = 0;
    scoreForPlayerOne.textContent = "";
    scoreForPlayerTwo.textContent = "";
    oddorEven = 1;
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
    firstChoice = "";
    secondChoice = "";
    choice = "";
    gridCount = 0;
    mChoice = "";
    cChoice = "";
    winner = "";
    oddorEven = 1;
}