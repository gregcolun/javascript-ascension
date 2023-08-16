const prompt = require("prompt-sync")()
console.log("Welcome to the Computer Hardware Quiz!")
let points = 0;

const answer1 = prompt("What is the brain of the Computer: ")
if(answer1.toLowerCase() === 'cpu') {
    points++;
    console.log(`Correct, you now have ${points} point!`)
} else {
    console.log(`Incorrect, you have ${points} points!`)
}

const answer2 = prompt("What is the acronym for graphics processing unit: ")
if(answer2.toLowerCase() === 'gpu') {
    points++;
    console.log(`Correct, you now have ${points} points!`)
} else {
    if(points > 0) {
    points--;    
    }
  console.log(`Incorrect, you have ${points} points!`)
}

const answer3 = prompt("Which type of connection port is commonly used for plugging in devices like keyboards and mice: ")
if(answer3.toLowerCase() === 'usb') {
    points++;
    console.log(`Correct, you now have ${points} points!`)
} else {
    if(points > 0) {
    points--;  
    }  
  console.log(`Incorrect, you have ${points} points!`)
}

console.log("\nGAME OVER")
if (points > 2) {
console.log(`Thank you for playing! You passed the quiz by answering ${points}/3 questions, CONGRATS!!!`)
} else {
    console.log(`You still have to practice!`)
}
