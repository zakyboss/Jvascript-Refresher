'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; // Initialize highScore to 0

console.log(secretNumber);

let x = function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = `You did not fill anything 🤐`;
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = `You won congratulations 🎉`;
        document.querySelector('body').style.backgroundColor = 'green';

        if (score > highScore) {
            highScore = score; // Update highScore
            document.querySelector('.highscore').textContent = highScore; // Reflect the new highscore
        }
    }else if (guess !==secretNumber){
        if (score > 1) {
        guess > secretNumber ? document.querySelector('.message').textContent = `Too high📈`: document.querySelector('.message').textContent = `Too low 📉`;
        score--;


    } } else {
                document.querySelector('.message').textContent = `You lost 😪`;
                score = 0;
    }
    
};

document.querySelector('.check').addEventListener('click', x);

document.querySelector('.again').addEventListener('click', function () {
    // Reset the score to 20
    score = 20;
    document.querySelector('.score').textContent = score;
    
    // Reset the message and game state
    document.querySelector('.message').textContent = `Start guessing ...`;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    // Generate a new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
});
