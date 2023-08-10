import { ClockDate } from "./ClockDate.js";
import { ClockDesign } from "./ClockDesign.js";

const buttonColor = document.querySelector('.colorBtn');
const buttonHourFormat = document.querySelector('.formatHourBtn');
const buttonDate = document.querySelector('.dateBtn');
let isHourFormat24 = true;
let isDate = false;

let showTime = () => {
  let actualDate = new Date();
  let clockDate = new ClockDate(actualDate, isHourFormat24);
  clockDate.showFullDate();
  clockDate.getActualHour();
  clockDate.getActualHour12();
  clockDate.getActualMinutes();
  clockDate.getActualDay();
  clockDate.getActualSeconds();
}

let clockDesign = new ClockDesign(isHourFormat24);

let hourFormat = () => {
  if (isHourFormat24 === true) {
    isHourFormat24 = false;
  } else {
    isHourFormat24 = true;
  }
  clockDesign.showAmPmFormat(isHourFormat24);
}

let showDate = () => {
  if (isDate === false) {
    isDate = true;
  } else {
    isDate = false;
  }
  clockDesign.showDateField(isDate)
}

setInterval(showTime, 1000)

buttonColor.addEventListener('click', clockDesign.changeFontColor);
buttonHourFormat.addEventListener('click', hourFormat);
buttonDate.addEventListener('click', showDate);