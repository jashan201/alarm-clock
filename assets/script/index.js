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
setInterval(getTime, 1000);


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


// Function to save and print the hours and minutes when "Set alarm" button is clicked
document.querySelector('.set-alarm').addEventListener('click', function() {
    // Get the input values for hours and minutes
    const hoursValue = document.querySelector('.hours').value.trim();
    const minutesValue = document.querySelector('.minutes').value.trim();

    // Validate the input values
    if (hoursValue === '' || minutesValue === '') {
        alert('Please enter both hours and minutes');
        return; // Exit the function if any input field is empty
    }

    // Check if the input values are valid hours and minutes
    const hoursNumber = parseInt(hoursValue, 10);
    const minutesNumber = parseInt(minutesValue, 10);
    if (isNaN(hoursNumber) || isNaN(minutesNumber) || hoursNumber < 0 || hoursNumber > 23 || minutesNumber < 0 || minutesNumber > 59) {
        alert('Please enter valid hours (0-23) and minutes (0-59)');
        return; // Exit the function if input values are invalid
    }

    // Update the content of the set-time h2 element
    document.querySelector('.set-time').textContent = `${hoursValue.padStart(2, '0')}:${minutesValue.padStart(2, '0')}`;
    
    // Optional: You can also clear the input fields if needed
    document.querySelector('.hours').value = '';
    document.querySelector('.minutes').value = '';

    alert('Alarm set for ' + document.querySelector('.set-time').textContent);
});

// Function to compare current time with set alarm time and play audio when they match
function compareTime() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    
    // Get the set alarm time
    const setTimeText = document.querySelector('.set-time').textContent;
    const [setHours, setMinutes] = setTimeText.split(':').map(Number);
    
    // Check if current time matches set alarm time
    if (currentHours === setHours && currentMinutes === setMinutes) {
        // Trigger alarm
        alert('Time to wake up!');
        // Play audio
        const alarmAudio = new Audio('../assets/media/digital-alarm-beeping.mp3');
        alarmAudio.play();
    }
}

// Call the compareTime() function periodically to check for alarm condition
setInterval(compareTime, 1000); // Adjust the interval as needed (e.g., check every second)