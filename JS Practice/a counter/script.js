const decrease = document.getElementById("dec");
const increase = document.getElementById("inc");
const reset = document.getElementById("reset");

const countZero = document.getElementById("countValues");

// let countZeroValue = parseInt(countZero.textContent, 10);
// console.log(countZeroValue);

// function increaseIt() {
//   return countZeroValue++;
// }

let countZeroValue = parseInt(countZero.textContent, 10); //convert the text content to integer
function increaseIt() {
  countZeroValue++;
  countZero.textContent = countZeroValue;
}
console.log(countZeroValue); //not running..

increase.addEventListener("click", increaseIt);

function decreaseIt() {
  countZeroValue--;
  countZero.textContent = countZeroValue;
}

decrease.addEventListener("click", decreaseIt);

function resetting() {
  countZeroValue = 0;
  countZero.textContent = countZeroValue;
}

reset.addEventListener("click", resetting);
