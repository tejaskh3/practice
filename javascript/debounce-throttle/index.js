// const mainButton = document.querySelector('#main-button');
// const mainInput = document.querySelector('#main-input')
// let numOfTimeButtonPressed = 0, numOfTimesAPIExecuted = 0;
// let pressedCount = document.querySelector("#pressedCount")
// let triggeredCount = document.querySelector("#triggeredCount")

// // Create the debounced function outside the event listener
// let debouncedAPICall;

// mainButton.addEventListener('click', () => {
//     const thrValue = parseInt(mainInput.value) || 0; // Use || instead of ??
    
//     if(thrValue > parseInt(mainInput.max) || thrValue < parseInt(mainInput.min)) {
//         alert("please enter value between 0 - 10000");
//         return; // Exit early if invalid input
//     }
    
//     // Update button press count
//     pressedCount.innerHTML = ++numOfTimeButtonPressed;
    
//     const incCount = () => {
//         numOfTimesAPIExecuted++;
//         triggeredCount.innerHTML = numOfTimesAPIExecuted; 

//     }
    
//     // Create new debounced function with current timeout value
//     debouncedAPICall = debounce(incCount, thrValue);
//     debouncedAPICall(); // Call the debounced function
    
// });

// function debounce(func, timeout) {
//     let timer;
//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(this, args);
//         }, timeout);
//     };
// }
// above one is increasing x times after delay time and below one is only once

const mainButton = document.querySelector('#main-button');
const mainInput = document.querySelector('#main-input')
let numOfTimeButtonPressed = 0, numOfTimesAPIExecuted = 0;
let pressedCount = document.querySelector("#pressedCount")
let triggeredCount = document.querySelector("#triggeredCount")

let debounceTimer = null;

const incCount = () => {
    numOfTimesAPIExecuted++;
    triggeredCount.innerHTML = numOfTimesAPIExecuted;
}

mainButton.addEventListener('click', () => {
    const thrValue = parseInt(mainInput.value) || 0;
    
    if(thrValue > parseInt(mainInput.max) || thrValue < parseInt(mainInput.min)) {
        alert("please enter value between 0 - 10000");
        return;
    }
    
    pressedCount.innerHTML = ++numOfTimeButtonPressed;
    console.log("Button clicked! Total clicks:", numOfTimeButtonPressed);
    
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        incCount();
    }, thrValue);
});

function debounce(func, timeout) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}