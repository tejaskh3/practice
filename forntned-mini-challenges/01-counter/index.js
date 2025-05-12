const counterSum = document.getElementById("counter-sum");
const counterValue = document.getElementById("counter-value");


counterValue.addEventListener("input",(e)=>{
    const value = e.target.value
    counterValue.innerText = value
})

const incrementButton = document.getElementById("counter-increment");
const decrementButton = document.getElementById("counter-decrement");

incrementButton.addEventListener("click", () => {
  const newValue =
    Number(counterSum.textContent) + Number(counterValue.value);
  counterSum.textContent = newValue;
});

decrementButton.addEventListener("click", () => {
  const newValue =
    Number(counterSum.textContent) - Number(counterValue.value);
  counterSum.textContent = newValue;
});

document.getElementById("counter-reset").addEventListener("click", () => {
  counterSum.innerText = 0;
  counterValue.value = 0;
});

// Learnings: 
// 1. Use counterValue.value consistently for input and operations, not textContent or innerText.
// 2.   