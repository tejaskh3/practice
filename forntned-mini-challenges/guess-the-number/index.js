// const min = 0, max= 100;
// const winningNumber = Math.floor(Math.random() * (max - min)) + min; 
// const num = document.getElementById('guess-number-input')
// let value;
// let gameWon = false;
// const numbers = []
// num.onchange  = function(e){
//     console.log(num.val)
//     value = num.value
// }

// const submitButton = document.getElementById('submit-number-button');

// const submit = (e)=>{
//     e.preventDefault()
//     numbers.push(value)
//     if(value === winningNumber){
//         gameWon = true
//         const resultContainer = document.getElementById('result')
//         resultContainer.innerHTML += `<div>You won</div>`
//         // resultContainer.append(`<div>${numbers.splice().toString()}</div>`)
//     }
//     if(value > winningNumber)           resultContainer.innerHTML += `<div>Too high!</div>`
//         resultContainer.innerHTML += `<div> too low!</div>`
// }

// const form = document.getElementById('guess-form');
// form.addEventListener('submit', submit);

// // if(gameWon === true) // show-> this will not work right?

const min = 0, max = 100;
const winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const numInput = document.getElementById('guess-number-input');
const form = document.getElementById('guess-form');
const resultContainer = document.getElementById('result');

let gameWon = false;
const numbers = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const value = Number(numInput.value);
    numbers.push(value);

    if (gameWon) return;

    if (value === winningNumber) {
        gameWon = true;
        resultContainer.innerHTML += `<div>You won!</div>`;
        resultContainer.innerHTML += `<div>Your guesses: ${numbers.join(', ')}</div>`;
    } else if (value > winningNumber) {
        resultContainer.innerHTML += `<div>Too high!</div>`;
    } else {
        resultContainer.innerHTML += `<div>Too low!</div>`;
    }
});
