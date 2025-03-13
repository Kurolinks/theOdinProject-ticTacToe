
// 1. Store gameboard as an array inside a Gameboard object
let gameBoard = {
    board: [],
   counter: 1,
};

// 2. Players stored in classes
class Player {
       constructor(name, score) {
           this.name = name;
           this.score = score;
       }

       // Change Player name
    function changeNameOne () {
        playerOne.style.cursor = "pointer";
        nameOfFirstPlayer =  prompt("Type in your name: ");
        playerOne.textContent = nameOfFirstPlayer;
    }

    function changeNameTwo () {
        playerTwo.style.cursor = "pointer";
        nameOfSecondPlayer =  prompt("Type in your name: ");
        playerTwo.textContent = nameOfSecondPlayer;
    }

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
        firstChoice = "o";
        secondChoice = "x";
        playerTurn();
    }

    // Player Functionality
    function playerTurn() {

        // Array for positions and event listeners
        const elements = [
            { element: topLeft, handler: addMarker },
            { element: topCenter, handler: addMarker },
            { element: topRight, handler: addMarker },
            { element: middleLeft, handler: addMarker },
            { element: middleCenter, handler: addMarker },
            { element: middleRight, handler: addMarker },
            { element: bottomLeft, handler: addMarker },
            { element: bottomCenter, handler: addMarker },
            { element: bottomRight, handler: addMarker }
        ];
        
        elements.forEach(({ element, handler }) => {
            element.addEventListener('click', handler);
        });

        function addMarker(element) {
            if (element.textContent === "") {
                choice = (oddorEven % 2 === 1) ? firstChoice : secondChoice;
                element.textContent = choice;
                oddorEven += 1;
                isGameWon();
            }
        }
    
        // Add event listeners using the addmarker function
        topLeft.addEventListener('click', () => addMarker(topLeft));
        topCenter.addEventListener('click', () => addMarker(topCenter));
        topRight.addEventListener('click', () => addMarker(topRight));
        middleLeft.addEventListener('click', () => addMarker(middleLeft));
        middleCenter.addEventListener('click', () => addMarker(middleCenter));
        middleRight.addEventListener('click', () => addMarker(middleRight));
        bottomLeft.addEventListener('click', () => addMarker(bottomLeft));
        bottomCenter.addEventListener('click', () => addMarker(bottomCenter));
        bottomRight.addEventListener('click', () => addMarker(bottomRight));
}
   }
// 3. Object for flow of game
const gameFlow = {
    play: true,
    mChoice,
    cChoice,
    playerScore: 0,
    computerScore: 0,
    winner,
    hasPlayerWon: false,
    // startGame();
    // addScore();
    // nextRound();
    // restart();
    // isGameWon();
}


// 6. Each little piece of functionality should be able to fit in the game, player or gameboard Objects. Put them in a logical place.

// New List
// 1. Create an object that will handle the display/DOM logic
const display = {
   // Select Elements
   xmarker : document.querySelector("#xmarker"),
   omarker : document.querySelector("#omarker"),
    topLeft : document.querySelector(".top-left p"),
   topCenter : document.querySelector(".top-center p"),
   topRight : document.querySelector(".top-right p"),
   middleLeft : document.querySelector(".middle-left p"),
   middleCenter: document.querySelector(".middle-center p"),
   middleRight: document.querySelector(".middle-right p"),
   bottomLeft: document.querySelector(".bottom-left p"),
   bottomCenter: document.querySelector(".bottom-center p"),
   bottomRight: document.querySelector(".bottom-right p"),
   positionDiv: document.querySelector(".position"),
   positionInput: document.querySelector("#position-input"),
   submit: document.querySelector("#submit"),
   winnerPara: document.querySelector(".winner"),
   boxes: document.querySelectorAll('.grid p'),
   restart: document.querySelector('.restart'),
   next: document.querySelector('.next'),
   coreForPlayer: document.querySelector(".playerscore"),
   scoreForComputer: document.querySelector(".compscore"),
   error: document.querySelector("#error"),

   mChoice: "", cChoice: "", hasPlayerWon: false, gridCount: 0, winner: "", playerScore: 0, computerScore: 0,

   onclickX(addX) {
           this.xmarker.addEventListener('click', addX);
   },
   
   onclickO(addO) {
           this.omarker.addEventListener('click', addO);
   },

   onSubmit(submitPosition) {
           this.submit.addEventListener('click', submitPosition);
   },
   
   onRestart(restartGame) {
           this. restart.addEventListener('click', restartGame);
   },
       
   onNext(nextRound) {
           this. next.addEventListener('click', nextRound); 
   },

   addX() {
       this.positionDiv.style.display = "block";
       this.xmarker.style.display = "none";
       this.omarker.style.display = "none";
       this.mChoice = "x";
       this.cChoice = "o";
   },
   
   // Function to select O
   addO() {
       this.positionDiv.style.display = "block";
       this.xmarker.style.display = "none";
       this.omarker.style.display = "none";
       this.mChoice = "0";
       this.cChoice = "x";
   },

   // Restart game fucntion
   restartGame() {
       this.xmarker.style.display = "inline";
       this.omarker.style.display = "inline";
       this.positionDiv.style.display = "none";
       this.winnerPara.style.display = "none";
       this.topLeft.textContent = "";
       this.topCenter.textContent = "";
       this.topRight.textContent = "";
       this.middleLeft.textContent = "";
       this.middleCenter.textContent = "";
       this.middleRight.textContent = "";
       this.bottomLeft.textContent = "";
       this.bottomCenter.textContent = "";
       this.bottomRight.textContent = "";
       this.hasPlayerWon = false;
       this.gridCount = 0;
       this.mChoice = "";
       this.cChoice = "";
       this.winner = "";
       this.playerScore = 0;
       this.computerScore = 0;
       this.scoreForPlayer.textContent = "";
       this.scoreForComputer.textContent = "";
   },

// Start a new round
   nextRound() {
       this.xmarker.style.display = "inline";
       this.omarker.style.display = "inline";
       this.positionDiv.style.display = "none";
       this.winnerPara.style.display = "none";
       this.topLeft.textContent = "";
       this.topCenter.textContent = "";
       this.topRight.textContent = "";
       this.middleLeft.textContent = "";
       this.middleCenter.textContent = "";
       this.middleRight.textContent = "";
       this.bottomLeft.textContent = "";
       this.bottomCenter.textContent = "";
       this.bottomRight.textContent = "";
       this.hasPlayerWon = false;
       this.gridCount = 0;
       this.mChoice = "";
       this.cChoice = "";
       this.winner = "";
   }
};




// Player object
// function Player(name) {
//     this.name = name;
// };

// const user = new Player('User');
// const computer = new Player('Computer');



// ////////////// HELP AREA BELOW///////////////////

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
const playerOne = document.querySelector(".player-score");
const playerTwo = document.querySelector(".computer-score");

xmarker.addEventListener('click', addX);
omarker.addEventListener('click', addO);
restart.addEventListener('click', restartGame);
next.addEventListener('click', nextRound);
playerOne.addEventListener('click', changeNameOne);
playerTwo.addEventListener('click', changeNameTwo);


let play = true;
let firstChoice, secondChoice, choice;
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let winner;
let hasPlayerOneWon = false;
let oddorEven = 1;
let nameOfFirstPlayer = "Player One";
let nameOfSecondPlayer = "Player Two";

function isGameWon() {

    // Function to check if a winning condition is met
function checkWin(cell1, cell2, cell3, firstChoice) {
    if (cell1.textContent !== "" && cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent) {
        winner = cell1.textContent === firstChoice ? nameOfFirstPlayer : nameOfSecondPlayer;
        endGame(winner);
        return true;
    }
    return false;
}

// Function to end the game and display the winner
function endGame(winner) {
    play = false;
    winnerPara.textContent = `Game Over! ${winner} wins`;
    winnerPara.style.display = "block";
    hasPlayerOneWon = winner === "Player One";
    positionDiv.style.display = "none";
}

// Check all possible winning conditions
if (
    checkWin(topLeft, topCenter, topRight, firstChoice) || // First Row
    checkWin(middleLeft, middleCenter, middleRight, firstChoice) || // Second Row
    checkWin(bottomLeft, bottomCenter, bottomRight, firstChoice) || // Third Row
    checkWin(topLeft, middleLeft, bottomLeft, firstChoice) || // First Column
    checkWin(topCenter, middleCenter, bottomCenter, firstChoice) || // Second Column
    checkWin(topRight, middleRight, bottomRight, firstChoice) || // Third Column
    checkWin(topLeft, middleCenter, bottomRight, firstChoice) || // Left Diagonal
    checkWin(topRight, middleCenter, bottomLeft, firstChoice) // Right Diagonal
) {
    // Game has been won, no further action needed
}

    if ((winner === "Player One") || (winner === nameOfFirstPlayer)) {
        firstPlayerScore += 1;
    }
    else if ((winner === "Player Two") || (winner === nameOfSecondPlayer)) {
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
    nameOfFirstPlayer = "Player One";
    nameOfSecondPlayer = "Player Two";
    playerOne.textContent = "Player One Score";
    playerTwo.textContent = "Player Two Score";
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