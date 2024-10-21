'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
    modal.style.display = 'block'; // Set the modal display to 'block'
    overlay.style.display = 'block'; // Optionally show the overlay
    modal.style.width = '500px'
}

// Function to close the modal
const closeModal = function () {
    modal.style.display = 'none'; // Set the modal display to 'none' to hide it
    overlay.style.display = 'none'; // Optionally hide the overlay
}

// Using a traditional for loop to add event listeners to each button
for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
}

// Add event listeners for closing the modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e){
if (e.key =='Escape')
{
    modal.style.display = 'none'; // Set the modal display to 'none' to hide it
    overlay.style.display = 'none'; // Optionally hide the overlay 
}
})   

