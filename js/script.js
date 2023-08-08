let day;
let hour;
let minute;
let second;

const fieldDay = document.querySelector('.extra-day')
const fieldHour = document.querySelector('.digit-hour');
const fieldMinute = document.querySelector('.digit-minute');

const date = new Date();

day = date.getDay();
day = date.getDay();
hour = date.getHours();
minute = date.getMinutes();
second = date.getSeconds();

const setFormat = (time) => {
  if (time < 10) {
    return `0${time}`
  } else {
    return `${time}`
  }
}

const setDay = (day) => {
  switch (day) {
    case 0:
      return 'SUN';
    case 1:
      return 'MON';
    case 2:
      return 'TUE';
    case 3:
      return 'WED';
    case 4:
      return 'THU';
    case 5:
      return 'FRI';
    default:
      return 'SAT';
  }
}


const showTime = () => {
  fieldHour.textContent = setFormat(hour);
  fieldMinute.textContent = setFormat(minute);
  fieldDay.textContent = setDay(day);
}

showTime();


