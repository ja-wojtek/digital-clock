export class ClockDesign {
  constructor() {

    this.clockArea = document.querySelector('.clock');
    this.amArea = document.querySelector('.am');
    this.pmArea = document.querySelector('.pm');
    this.fieldHour = document.querySelector('.digit-hour');
    this.fieldHour12 = document.querySelector('.digit-hour-12');
    this.fieldDate = document.querySelector('.date');
  }

  randomColor = () => {
    const colors = ['red', 'blue', 'yellow', 'lime', 'orange', 'brown', 'violet', 'silver', 'green', 'gray'];
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    return colors[randomColorIndex];
  }

  changeFontColor = () => {
    this.clockArea.style.color = this.randomColor();
  }

  showAmPmFormat = (isHourFormat24) => {
    let fieldHourValue = document.querySelector('.digit-hour').textContent
    if (isHourFormat24 === false && fieldHourValue >= 12) {
      this.hideAm();
      this.showPm();
      this.hideHour24();
      this.showHour12();
    } else if (isHourFormat24 === false && fieldHourValue < 12) {
      this.showAm();;
      this.hidePm()
      this.showHour12();
      this.hideHour24();
    } else {
      this.hideHour12();
      this.showHour24();
      this.hideAm();
      this.hidePm();
    }
  }

  showAm = () => {
    this.amArea.style.display = 'block';
  }

  hideAm = () => {
    this.amArea.style.display = 'none';
  }

  showPm = () => {
    this.pmArea.style.display = 'block';
  }

  hidePm = () => {
    this.pmArea.style.display = 'none';
  }

  showHour24 = () => {
    this.fieldHour.style.display = 'block'
  }

  hideHour24 = () => {
    this.fieldHour.style.display = 'none';
  }

  showHour12 = () => {
    this.fieldHour12.style.display = 'block'
  }

  hideHour12 = () => {
    this.fieldHour12.style.display = 'none';
  }

  showDateField = (isDate) => {
    if (isDate === true) {
      this.showDate();
    } else {
      this.hideDate();
    }
  }

  showDate = () => {
    this.fieldDate.style.display = 'block';
    console.log('show');
  }

  hideDate = () => {
    this.fieldDate.style.display = 'none';
    console.log('hide');
  }
}