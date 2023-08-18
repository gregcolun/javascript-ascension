
const prompt = require("prompt-sync")();
console.log(`Welcome to Number Guesser! `);


function playGame() {
const randomNumber = Math.floor(Math.random() * 101)
let numOfGuesses = 1;
console.log(randomNumber)
let personGuess = prompt(`Guess the number between 1 - 100: `)
while(isNaN(personGuess) || personGuess < 1 || personGuess > 100) {
    personGuess = prompt(`Invalid input, please type a number within 1 - 100! `)
}

while(personGuess != randomNumber) {
    if(personGuess < randomNumber) {
    personGuess = prompt(`Try Again. The number is higher: `)
} else if(personGuess > randomNumber) {
    personGuess = prompt(`Try Again. The number is lower: `)
} 
numOfGuesses++;
}
if(numOfGuesses === 1) {
    console.log(`You guessed the number ${randomNumber}. It took you ${numOfGuesses} guess! `)
} else {
console.log(`You guessed the number ${randomNumber}. It took you ${numOfGuesses} guesses! `)
}
const playAgain = prompt('Do you want to play Again? Y or N: ')
if(playAgain.toLowerCase() === 'y') {
    console.clear()
    playGame()
} else {
    console.log('Thank you for your time!')
}
}
playGame()
