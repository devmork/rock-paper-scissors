const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

function getComputerChoice() {
  let random = Math.random() * 3;

  if (random < 1) {
    return "ROCK";
  } else if (random >= 1 && random < 2) {
    return "PAPER";
  } else {
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
    console.log("You win!");
    humanScore++;
  } else if (humanChoice == "ROCK" && computerChoice == "PAPER") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
    console.log("You lose!");
    computerScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
    console.log("You lose!");
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

playGame();
