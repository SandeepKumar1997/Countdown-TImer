const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveaway = document.querySelector(".timer-subHeading");
let deadline = document.querySelector(".flex-box-timer");
let timeCounter = document.querySelectorAll(".countdown-area h2");

let currentDate = new Date();
let curDay = currentDate.getDate();
let curMonth = currentDate.getMonth();
let curYear = currentDate.getFullYear();
let curWeekDay = currentDate.getDay();

let futureDate = new Date(curYear, curMonth, curDay + 7, 10, 45, 0);

let futYear = futureDate.getFullYear();
let futDay = futureDate.getDate();

let futHour = futureDate.getHours();
let futMin = futureDate.getMinutes();

let futMonth = months[futureDate.getMonth()];

let futWeekDay = weekdays[futureDate.getDay()];

giveaway.innerHTML = `The Giveaway will begin from ${futWeekDay}, ${futDay} ${futMonth} ${futYear}, ${futHour}:${futMin} am`;

let futTime = futureDate.getTime();


function getRemainingTime() {
  let curTime = new Date().getTime();

  let timeDiff = futTime - curTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = timeDiff / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((timeDiff % oneDay) / oneHour);
  let minutes = Math.floor((timeDiff % oneHour) / oneMinute);
  let seconds = Math.floor((timeDiff % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  timeCounter.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (timeDiff < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h3 class="timer-subHeading">Sorry, this giveaway has expired!</h3>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();

