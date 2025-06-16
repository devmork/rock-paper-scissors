function getComputerChoice() {
  let random = Math.random() * 3;
  if (random < 1) {
    return console.log("Rock");
  } else if (random >= 1 && random < 2) {
    return console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Please input your choice:");
  console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log("You win! Rock beats Scissors");
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log("You lose! Rock loses to Paper");
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log("You win! Paper beats Rock");
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log("You lose! Paper loses to Scissors");
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log("You win! Scissors beats Paper");
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log("You lose! Scissors loses to Rock");
  } else {
    console.log("Draw");
  }
}
