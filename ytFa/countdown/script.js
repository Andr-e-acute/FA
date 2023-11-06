const timeLeft = document.getElementById("time-left");
const percent = document.getElementById("percent-left");
let fullYearSec = getFullYear();
let secLeft = getTimeLeft();
// need it leapYear == percent wrong
function getFullYear() {
  const now = new Date();
  const startOfYear = new Date(`${now.getFullYear()}-01-01T00:00:00`);
  const endOfYear = new Date(`${now.getFullYear()}-12-31T23:59:59`);
  console.log("getFullyear");
  return (endOfYear - startOfYear) / 1000;
}
function getTimeLeft() {
  const now = new Date();
  const endOfYear = new Date(`${now.getFullYear()}-12-31T23:59:59`);
  return Math.floor((endOfYear - now) / 1000);
}

function countDown() {
  let minutes = Math.floor(secLeft / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  //   formating time with padding
  days = days.toString().padStart(2, "0");
  hours = (hours % 60).toString().padStart(2, "0");
  minutes = (minutes % 60).toString().padStart(2, "0");
  sec = (secLeft % 60).toString().padStart(2, "0");
  timeLeft.innerHTML = `${days} days,${hours} hours,${minutes} minutes,${sec} seconds`;

  // newYear  secLeft 0 call both getFunction
  if (secLeft <= 0) {
    console.log("newYear");
    fullYearSec = getFullYear();
    secLeft = getTimeLeft();
  }

  secLeft = secLeft - 1;
}
function changePercentLeft() {
  const percentLeft = secLeft / fullYearSec;
  console.log(percentLeft * 100);
  percent.innerHTML = `${percentLeft.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2,
  })}`;
}
countDown();
changePercentLeft();

setInterval(countDown, 1000);
// percentage only  change every ~53min 10min interval is good enough
// setInterval(changePercentLeft, 600000);
// for testing every min
setInterval(changePercentLeft, 60000);
