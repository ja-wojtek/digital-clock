import { ClockDate } from "./ClockDate.js";
import { ClockDesign } from "./ClockDesign.js";

const buttonColor = document.querySelector('.colorBtn');

let clockDesign = new ClockDesign();

let showTime = () => {
  let actualDate = new Date();
  let clockDate = new ClockDate(actualDate);
  clockDate.getActualHour();
  clockDate.getActualMinutes();
  clockDate.getActualDay();
  clockDate.getActualSeconds();
}

setInterval(showTime, 1000)


buttonColor.addEventListener('click', clockDesign.changeFontColor);