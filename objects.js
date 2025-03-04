// 1. Store gameboard as an array inside a Gameboard object
let gameBoard = {
     board: [],
    counter: 1,

    // for (let i = 0; i < 3; i++) {
    // board[i] = [];
    //     for (let j = 0; j < 3; j++) {
    //         board[i][j] = counter++;
    //     }
    // };

    // console.log(board);

};

// 2. Players stored in classes
    class Player {
        constructor() {
            // 
        }
    }
// 3. Object for flow of game

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

    mChoice: "", cChoice: "", hasPlayerWon: false, hasComputerWon: false, gridCount: 0, winner: "", playerScore: 0, computerScore: 0,

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
        this.hasComputerWon = false;
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
        this.hasComputerWon = false;
        this.gridCount = 0;
        this.mChoice = "";
        this.cChoice = "";
        this.winner = "";
    }
};

// 2. Write a function that will render the contents of the gameboard array to the webpage
// 3. Write functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elemdnts

// 4. Ouch! e.g. letting players click on a board square to place their marker). Don’t forget the logic that keeps players from playing in spots that are already taken!

// 5. Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!



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

// 4. Tuck as much inside factories, reduce global codes

// 5.If you need only an instance of something, wrap the factory inside an IIFE

// 6. Each little piece of functionality should be able to fit in the game, player or gameboard Objects. Put them in a logical place.