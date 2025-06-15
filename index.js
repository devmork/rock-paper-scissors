let random = Math.random();

function getComputerChoice() {
  if (random == 0) {
    console.log("Rock");
  } else if (random <= 1) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
