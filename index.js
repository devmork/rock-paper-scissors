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
