const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
let computerChoice = document.querySelector("#computer-choice");
let humanChoice = document.querySelector("#human-choice");
let gameResult = document.querySelector("#game-result");
let score = document.querySelector("#score");
let computerScoreDisplay = document.querySelector("#computer-score");

btnRock.addEventListener("click", () => {
  humanChoice.textContent = "Rock";
  playRound("ROCK", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
  humanChoice.textContent = "Paper";
  playRound("PAPER", getComputerChoice());
});

btnScissors.addEventListener("click", () => {
  humanChoice.textContent = "Scissors";
  playRound("SCISSORS", getComputerChoice());
});

function getComputerChoice() {
  let random = Math.random() * 3;

  if (random < 1) {
    computerChoice.textContent = "Rock";
    return "ROCK";
  } else if (random >= 1 && random < 2) {
    computerChoice.textContent = "Paper";
    return "PAPER";
  } else {
    computerChoice.textContent = "Scissors";
    return "SCISSORS";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
    gameResult.textContent = "You win!";
    humanScore++;
    score.textContent = humanScore;
  } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    gameResult.textContent = "You lose!";
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    gameResult.textContent = "You win!";
    humanScore++;
    score.textContent = humanScore;
  } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    gameResult.textContent = "You lose!";
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    gameResult.textContent = "You win!";
    humanScore++;
    score.textContent = humanScore;
  } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    gameResult.textContent = "You lose!";
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
  playGame();
}

function playGame() {
  if (humanScore === 5) {
    gameResult.textContent = "You won the game!";
    humanScore = 0;
    computerScore = 0;
    score.textContent = humanScore;
  } else if (computerScore === 5) {
    gameResult.textContent = "Computer won the game!";
    humanScore = 0;
    computerScore = 0;
    score.textContent = humanScore;
  }
}
