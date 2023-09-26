const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWins(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return 'player';
    }
    else {
        return 'computer';
    }
}
function playRound(playerSelection, computerSelection) {
    const result = checkWins(playerSelection, computerSelection);
    if (result == 'tie') {
        return "tie";
    }
    else if (result == "player") {
        return `you win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `you lose! ${playerSelection} beats ${computerSelection}`;
    }

}
function getPlayerChoice() {
    let userInput = false;
    while (userInput == false) {
        const input = prompt("Enter your choice rock,paper or scissors");
        if (input == null) {
            continue;
        }
        const newInput = input.toLowerCase();
        if (options.includes(newInput)) {
            userInput = true;
            return newInput;
        }
    }

}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if (checkWins(playerChoice, computerChoice) == 'player') {
            playerScore++;
        }
        else if (checkWins(playerChoice, computerChoice) == 'computer') {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("player was the winner");
    }
    else if (playerScore < computerScore) {
        console.log("computer was the winner");
    }
    else {
        console.log("Its a draw");
    }
}
game();
