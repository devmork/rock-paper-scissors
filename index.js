const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
let computerChoice = document.querySelector("#computer-choice");
let humanChoice = document.querySelector("#human-choice");
let gameResult = document.querySelector("#game-result");
let score = document.querySelector("#score");

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

function getHumanChoice() {
  let humanChoice = prompt("Please input your choice:").toUpperCase();
  return humanChoice;
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
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    gameResult.textContent = "You win!";
    humanScore++;
    score.textContent = humanScore;
  } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    gameResult.textContent = "You lose!";
    computerScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    gameResult.textContent = "You win!";
    humanScore++;
    score.textContent = humanScore;
  } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    gameResult.textContent = "You lose!";
    computerScore++;
  }
}

function playGame() {
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("Computer won the game!");
  }
}

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
