import { ClockDate } from "./ClockDate.js";

const fieldDay = document.querySelector('.extra-day')
const fieldHour = document.querySelector('.digit-hour');
const fieldMinute = document.querySelector('.digit-minute');
const fieldSeconds = document.querySelector('.extra-seconds');

let showTime = () => {
  let actualDate = new Date();
  let clockDate = new ClockDate(actualDate);
  fieldHour.textContent = clockDate.getActualHour();
  fieldMinute.textContent = clockDate.getActualMinutes();
  fieldDay.textContent = clockDate.getActualDay();
  fieldSeconds.textContent = clockDate.getActualSeconds();
}

setInterval(showTime, 1000)