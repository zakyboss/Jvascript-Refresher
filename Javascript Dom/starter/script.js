'use strict';
// console.log(document.querySelector(".message").textContent)
// document.querySelector('.message').textContent = 'You lucky son of a Gun 😂'
// console.log(document.getElementsByClassName('message')[0].textContent);
// document.querySelector('.number').textContent= 13
 let secretNumber = Math.trunc(Math.random()*20)+1
 let score = 20 ;
console.log(secretNumber)
 let x = function (){
    let numberInQuestion = document.querySelector('.number')
    numberInQuestion.innerHTML=secretNumber
    let guess = document.querySelector('.guess').value ;
    guess = Number(guess) ;
    console.log(guess, typeof guess )
    if(!guess){
        document.querySelector('.message').textContent = `You did not fill anything 🤐`
    }
    else if (guess < secretNumber){
        document.querySelector('.message').textContent = `Too low 📉`
        score= score -1 

        document.querySelector('.score').textContent =score


    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = `Too high📈`
        score= score -1 
        document.querySelector('.score').textContent =score


    }
} 
document.querySelector('.check').addEventListener('click',x )
