export class ClockDate {
  constructor(actualDate) {
    this.actualDate = actualDate;

    this.fieldDay = document.querySelector('.extra-day')
    this.fieldHour = document.querySelector('.digit-hour');
    this.fieldMinute = document.querySelector('.digit-minute');
    this.fieldSeconds = document.querySelector('.extra-seconds');
  }

  // Getting number of the day and changing it into three letters
  getActualDay = () => {
    switch (this.actualDate.getDay()) {
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

  // Getting actual hour
  getActualHour = () => {
    return this.fieldHour.textContent = this.setFormat(this.actualDate.getHours());
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