function getComputerChoice() {
    return (['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]);
}

function getPlayerChoice() {
    return (prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase());
}

function play(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("It's a draw.");
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ){
        playerScore++;
        return (`You Won! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        computerScore++;
        return (`You Lost! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(play(getPlayerChoice(), getComputerChoice()));
        console.log(`Player ${playerScore} - ${computerScore} Computer`)
    }
    if (playerScore == computerScore) { console.log("It's a draw!"); }
    else if (playerScore > computerScore) { console.log("You Won!"); }
    else { console.log("You Lost!"); }
}


let computerScore = 0;
let playerScore = 0;
game();