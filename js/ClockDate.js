export class ClockDate {
  constructor(actualDate) {
    this.actualDate = actualDate;
  }

  // Getting number of the day and changing it into three letters
  getActualDay = () => {
    switch (this.actualDate.getDay()) {
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

  // Getting actual hour
  getActualHour = () => {
    return this.setFormat(this.actualDate.getHours());
  }

  // Getting actual minutes
  getActualMinutes = () => {
    return this.setFormat(this.actualDate.getMinutes());
  }

  // Getting actual seconds
  getActualSeconds = () => {
    return this.setFormat(this.actualDate.getSeconds());
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