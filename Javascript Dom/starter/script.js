'use strict';
// console.log(document.querySelector(".message").textContent)
// document.querySelector('.message').textContent = 'You lucky son of a Gun 😂'
// console.log(document.getElementsByClassName('message')[0].textContent);
// document.querySelector('.number').textContent= 13
 let secretNumber = Math.trunc(Math.random()*20)+1
 let score = 20 ;
console.log(secretNumber)
 let x = function (){

    let guess = document.querySelector('.guess').value ;
    guess = Number(guess) ;
    console.log(guess, typeof guess )
    if(!guess){
        document.querySelector('.message').textContent = `You did not fill anything 🤐`
    } else if (guess===secretNumber){
        document.querySelector('.number').innerHTML=secretNumber ;
        document.querySelector('.number').style.width ='30rem'
    
        document.querySelector('.message').textContent = `You won  congratulations 🎉`
        document.querySelector('body').style.backgroundColor ='green'
 
    }
    else if (guess < secretNumber){
        if (score>1){
            document.querySelector('.message').textContent = `Too low 📉`
            score= score -1 
    
            document.querySelector('.score').textContent =score
    
        } else {
            document.querySelector('.message').textContent = `You lost 😪`
            score=0
            document.querySelector('.score').textContent =score

        }
       

    } else if (guess > secretNumber){
       
        if (score>1){
            document.querySelector('.message').textContent = `Too high📈`
            score= score -1 
    
            document.querySelector('.score').textContent =score
    
        } else {
            document.querySelector('.message').textContent = `You lost 😪`
            score=0
            document.querySelector('.score').textContent =score

        }

    }
} 
document.querySelector('.check').addEventListener('click',x )
