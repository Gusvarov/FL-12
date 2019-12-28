let userInput = 0;
let attempts = 3;
let total = 0;
let currentSum = 100;
let maxSum = 100;
let question = confirm('Do you want to play a game?');
const min = 0;
let max = 8;
let ballLand = min + Math.random() * (max - min);
let round = Math.round(ballLand);
const sumIncrease = 2;
const sumDecrease = 2;
const lessAttempts = 2;
const maxAttempts = 3;
const maxNumIncrease = 4;
const maxStartNum = 8;
const maxStartSum = 100;

if ( question === false ) {
    alert('You did not become a billionaire, but can.');
} else {
    while (question && attempts) {
        userInput = Number(prompt(`
            Choose a roulette pocket number from ${min} to ${max}
            attempts left: ${attempts}
            Total prize: ${total}$
            Possible prize on current attempt ${currentSum}$
        `));       
        if ( isNaN(userInput) ) {
            alert('You must enter only numbers');
        }
        if (userInput !== round) {
            attempts--;
            if (attempts === lessAttempts) {
                currentSum /= sumDecrease;
            }
            if (attempts === 1) {
                currentSum /= sumDecrease;
            }
            if (!attempts) {
                alert(`Thank you for your participation. Your prize is: ${total}$`);
                question = confirm(`Do you want to play again?`);
                if ( !question ) {
                    break;
                }
                attempts = maxAttempts;
                total = 0;
                maxSum = maxStartSum;
                currentSum = maxSum;
                max = maxStartNum;
                ballLand = min + Math.random() * (max - min);
                round = Math.round(ballLand);
            }
        } 
        if ( userInput === round ) {
            while ( question && attempts ) {
                total += currentSum;
                attempts = maxAttempts;
                max += maxNumIncrease;
                maxSum *= sumIncrease;
                currentSum = maxSum;
                ballLand = min + Math.random() * (max - min);
                round = Math.round(ballLand);
                question = confirm(`Congratulation, you won! Your prize is: ${total}$. Do you want to continue?`);
                break;
            }
        } else {
            currentSum / sumDecrease;
        }
    }
}