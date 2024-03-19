'use strict';

const currentTime = document.querySelector('.time');
const givenTime = document.querySelector('.set-time');
const timerSet = document.querySelector('#timer');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const setAlarm = document.querySelector('.set-alarm');


// function to display current time
function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = `${hours}:${minutes}`;
    currentTime.innerText = time;
};

getTime();


// function to validate the input
hours.addEventListener('input', validateInput);
minutes.addEventListener('input', validateInput);

function validateInput(event) {
    const input = event.target.value;
    const numericInput = input.replace(/\D/g, '');

    event.target.value = numericInput;

    if (numericInput.length > 2 || parseInt(numericInput, 10) >= 59) {
        event.target.style.border = '2px solid red';
    } else {
        event.target.style.border = ''; 
    }
}