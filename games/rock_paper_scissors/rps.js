const prompt = require("prompt-sync")();
function playGame () {
let playerChoice;
let losses = 0;
let draw = 0;
let wins = 0;
let numOfRounds = prompt(`How many rounds do you want to play: `)
while(isNaN(numOfRounds) || numOfRounds < 1 || numOfRounds > 100) {
    numOfRounds = prompt(`Please enter a number between (1-100)! `)
}
for(let i = 1; i <= numOfRounds; i++) {
    
playerChoice = (prompt('Choose rock, paper or scissors: ')).toLowerCase()
while(true) {
    if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        break;
    } else {
        playerChoice = prompt('Please enter a valid Choice: ')
    }
}
const options = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = options[randomIndex].toLowerCase();
console.log(
  `You chose ${playerChoice} and the computer chose ${computerChoice}!`
);
if (playerChoice === computerChoice) {
  console.log(`Draw!`);
  draw++;
} else if (
  (playerChoice === "rock" && computerChoice === "scissors") ||
  (playerChoice === "paper" && computerChoice === "rock") ||
  (playerChoice === "scissors" && computerChoice === "paper")
) {
  console.log(`You win!`);
  wins++;
} else {
  console.log(`You lost!`);
  losses++
}
}
if(numOfRounds > 1) {
console.log(`During this game of ${numOfRounds} rounds, YOUR STATS ARE:
WINS: ${wins}
LOSSES: ${losses}
DRAWS: ${draw}`)
} else {
    console.log(`During this game of ${numOfRounds} rounds, YOUR STATS ARE:
    WINS: ${wins}
    LOSSES: ${losses}
    DRAWS: ${draw}`)
}

const again = prompt('Do you want to play again? Y or N: ')
if(again.toLowerCase() === 'y') {
    console.clear()
    playGame()
} else if (again.toLowerCase() === 'n') {
    console.log(`Have a nice Day! `)
} 
} 
playGame()


