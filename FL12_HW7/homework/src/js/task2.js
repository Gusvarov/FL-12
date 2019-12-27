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
const two = 2;
const three = 3;
const four = 4;
const eight = 8;
const hundred = 100;

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
            if (attempts === two) {
                currentSum /= two;
            }
            if (attempts === 1) {
                currentSum /= two;
            }
            if (!attempts) {
                alert(`Thank you for your participation. Your prize is: ${total}$`);
                question = confirm(`Do you want to play again?`);
                if ( !question ) {
                    break;
                }
                attempts = three;
                total = 0;
                maxSum = hundred;
                currentSum = maxSum;
                max = eight;
                ballLand = min + Math.random() * (max - min);
                round = Math.round(ballLand);
            }
        } 
        if ( userInput === round ) {
            while ( question && attempts ) {
                total += currentSum;
                attempts = three;
                max += four;
                maxSum *= two;
                currentSum = maxSum;
                ballLand = min + Math.random() * (max - min);
                round = Math.round(ballLand);
                question = confirm(`Congratulation, you won! Your prize is: ${total}$. Do you want to continue?`);
                break;
            }
        } else {
            currentSum / two;
        }
    }
}