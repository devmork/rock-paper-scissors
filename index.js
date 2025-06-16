let random = Math.random() * 3;

function getComputerChoice() {
  if (random < 1) {
    return "Rock";
  } else if (random >= 1 && random < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Please input your choice:");
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Rock loses to Paper");
    computerScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You lose! Paper loses to Scissors");
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You lose! Scissors loses to Rock");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

console.log(playGame());
