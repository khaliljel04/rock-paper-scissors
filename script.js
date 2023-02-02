const buttons = document.querySelectorAll('.choice>button');
const score = document.querySelector('#display>#score');
const round = document.querySelector('#display>#round');
const final = document.querySelector('#display>#final');

let computerScore = 0;
let playerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = getPlayerChoice(button);
        const computerSelection = getComputerChoice();
        round.textContent = play(playerSelection, computerSelection);
        updateScore();
    });
});

function getComputerChoice() {
    return (['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]);
}

function getPlayerChoice(button) {
    return button.getAttribute('id');
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
        return (`You Won! ${playerSelection} beats ${computerSelection}.`);
    }
    else {
        computerScore++;
        return (`You Lost! ${computerSelection} beats ${playerSelection}.`);
    }
}

function updateScore() {
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame() {
    const winner = playerScore == 5? 'You' : 'The Computer';
    round.textContent = `The winner is ${winner}!`
    resetScore();
}

function resetScore() {
    computerScore = 0;
    playerScore = 0;
}