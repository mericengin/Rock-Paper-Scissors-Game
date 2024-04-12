const playerMoveDisplay = document.getElementById("playerMoveDisplay");
const computerMoveDisplay = document.getElementById("computerMoveDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resultText = document.getElementById("resultText")

const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

let playerName = prompt("What is your name?");


function playGame(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(computerChoice === playerChoice) {
        result = "ITS A TIE!";
    } else {
        switch(playerChoice) {

            case "rock":
                if(computerChoice === "scissors") {
                    result = `${playerName} HAS WON!`;
                    playerScore++;
                } else {
                    result = `${playerName} HAS LOST!`;
                    computerScore++;
                }
            break;

            case "paper":
                if(computerChoice === "rock") {
                    result = `${playerName} HAS WON!`;
                    playerScore++;
                } else {
                    result = `${playerName} HAS Lost!`;
                    computerScore++;
                }
            break;

            case "scissors":
                if(computerChoice === "paper") {
                    result = `${playerName} HAS WON!`;
                    playerScore++;
                } else {
                    result = `${playerName} HAS Lost!`;
                    computerScore++;
                }
            break;

        }

    }

    playerMoveDisplay.textContent = `${playerName}: ${playerChoice}`
    computerMoveDisplay.textContent = `Computer: ${computerChoice}`;
    resultText.textContent = result;

    updateScore();

}

function updateScore() {

    playerScoreDisplay.textContent = `${playerName} Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

}