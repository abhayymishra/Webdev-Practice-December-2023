const answer = document.getElementsByClassName("result");
const calenderDate = document.getElementById("calender");
const finalsol = document.getElementsByClassName("final-solution");
const calcbtn = document.getElementsByClassName("calcbtn");

// function ageCalc() {
//   const todayDate = new Date();
//   const age = todayDate.getFullYear() - calenderDate.getFullYear();
//   if(todayDate.getMonth() < calenderDate.getMonth()) {
//     return age - 1;
//   }
//   else {
//     return age;
//   }
// }

function getAge(birthVal) {
  const currentD = new Date();
  const bdayD = new Date(birthVal);

  const theAge = currentD.getFullYear() - bdayD.getFullYear();
  const theMonth = currentD.getMonth() - bdayD.getMonth();

  if (theMonth < 0 || (month === 0 && currentD.getDate() < bdayD.getDate())) {
    theAge--;
  }
  return theAge;
}


function ageCalc() {
  const birthVal = calenderDate.value;
  if (birthVal === "") {
    alert("please enter the the date..brother");
  } else {
    const age = getAge(birthVal);
    finalsol.innerText = `${age}  ${age > 1 ? "years" : "year"}`;
  }
}

calcbtn.addEventListener("click", ageCalc);
