console.log('Welcome to Computer Quiz!')
function playGame() {
const prompt = require('prompt-sync')()
const question1 = prompt("What is the brain of the computer? ")
const answer1 = 'cpu';
let correctAnswers = 0;
if(question1.toLowerCase() === answer1) {
    console.log(`Correct! `)
    correctAnswers++;
} else {
    console.log(`Incorrect! `)
}

const question2 = prompt("What is responsible for the visuals of the computer? ")
const answer2 = 'gpu';
if(question2.toLowerCase() === answer2) {
    console.log(`Correct! `)
    correctAnswers++;
} else {
    console.log(`Incorrect! `)
    if(correctAnswers > 0) {
    correctAnswers--;
}
}

const question3 = prompt("The acronym for: Universal Series Bus:  ")
const answer3 = 'usb';
if(question3.toLowerCase() === answer3) {
    console.log(`Correct! `)
    correctAnswers++;
} else {
    console.log(`Incorrect! `)
    if(correctAnswers > 0) {
        correctAnswers--;
    }
}

if(correctAnswers > 1) {
    console.log(`You answered ${correctAnswers}/3 questions. Good Job!`)
} else {
    console.log(`You answered ${correctAnswers}/3 questions. You still have to practice!`)
    let playAgain = prompt(`Do you want to play again? Y or N: `)
    if(playAgain === 'Y') {
      
    console.clear()
    playGame()
    }
   else if(playAgain === 'N') {
    console.log(`Have a nice day!`)
}   
}

}
playGame()
