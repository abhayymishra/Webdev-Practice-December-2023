// const billAmount = document.getElementById("billAmount");
// const tipPercentage = document.getElementById("tipPercentage");
// // const result = document.getElementsByClassName("result");
// const calcbtn = document.getElementById("calcbtn");
// const totalSpan = document.getElementById("total");
// const discountMoney = 0;
// const answer = 0;

// function calculation() {
//   discountMoney = billAmount.value * (tipPercentage.value / 100);
//   answer = discountMoney + billAmount;
//   totalSpan.innerText = answer.toFixed(2);
// }

// // const spanEle = document.createElement("span");
// // spanEle.textContent = answer;
// // result.appendChild(spanEle);

// calcbtn.addEventListener("click", calculation);

const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const calcbtn = document.getElementById("calcbtn");
const totalSpan = document.getElementById("total");



function calculation(event) {
  //   discountMoney = billAmount.value * (tipPercentage.value / 100);
  //   answer = discountMoney + billAmount;
  event.preventDefault();
  const billval = billAmount.value;
  const tipval = tipPercentage.value;
    const totalamt = billval * (1 + tipval / 100);
  //   const totalamt = [billval * (tipval / 100)] + billval;
//   const tipvalbyhundred = tipval / 100;
//   const billvalintotipval = billval * tipvalbyhundred;
//   const totalamt = billvalintotipval + billval;
  totalSpan.innerText = totalamt.toFixed(2);
  console.log(totalamt);
}

calcbtn.addEventListener("click", calculation);
