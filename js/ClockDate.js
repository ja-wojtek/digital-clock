export class ClockDate {
  constructor(actualDate, isHourFormat24) {
    this.actualDate = actualDate;

    this.fieldDay = document.querySelector('.extra-day')
    this.fieldHour = document.querySelector('.digit-hour');
    this.fieldHour12 = document.querySelector('.digit-hour-12');
    this.fieldMinute = document.querySelector('.digit-minute');
    this.fieldSeconds = document.querySelector('.extra-seconds');
    this.fieldDate = document.querySelector('.date');
    this.isHourFormat24 = isHourFormat24;
  }

  // Getting number of the day and changing it into three letters
  getActualDay = () => {
    switch (this.actualDate.getActualDayNumber) {
      case 0:
        return this.fieldDay.textContent = 'SUN';
      case 1:
        return this.fieldDay.textContent = 'MON';
      case 2:
        return this.fieldDay.textContent = 'TUE';
      case 3:
        return this.fieldDay.textContent = 'WED';
      case 4:
        return this.fieldDay.textContent = 'THU';
      case 5:
        return this.fieldDay.textContent = 'FRI';
      default:
        return this.fieldDay.textContent = 'SAT';
    }
  }


  // Getting actual year
  getActualYear = () => {
    return this.actualDate.getFullYear();
  }

  // Getting actual month
  getActualMonth = () => {
    return this.actualDate.getMonth() + 1;
  }

  // Getting actual day (number)
  getActualDayNumber = () => {
    return this.actualDate.getDate();
  }

  showFullDate = () => {
    return this.fieldDate.textContent = `${this.setFormat(this.getActualDayNumber())}/${this.setFormat(this.getActualMonth())}/${this.getActualYear()}`;
  }

  // Getting actual hour 24h format
  getActualHour = () => {
    return this.fieldHour.textContent = this.setFormat(this.actualDate.getHours());
  }

  // Getting actual hour 12h format
  getActualHour12 = () => {
    let tempHour = this.actualDate.getHours();
    if (tempHour > 12) {
      return this.fieldHour12.textContent = this.setFormat(tempHour - 12);
    }
    else {
      return this.fieldHour12.textContent = this.setFormat(tempHour);
    }
  }

  // Getting actual minutes
  getActualMinutes = () => {
    return this.fieldMinute.textContent = this.setFormat(this.actualDate.getMinutes());
  }

  // Getting actual seconds
  getActualSeconds = () => {
    return this.fieldSeconds.textContent = this.setFormat(this.actualDate.getSeconds());
  }

  // Format: Two have always two digits 1 -> 01
  setFormat = (time) => {
    if (time < 10) {
      return `0${time}`
    } else {
      return `${time}`
    }
  }

}