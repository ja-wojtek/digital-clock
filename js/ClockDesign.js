export class ClockDesign {
  constructor() {

    this.clockArea = document.querySelector('.clock');
  }

  randomColor = () => {
    const colors = ['red', 'blue', 'yellow', 'lime', 'orange', 'brown', 'violet', 'silver', 'green', 'gray'];
    const randomColorIndex = Math.floor(Math.random() * colors.length)
    return colors[randomColorIndex];
  }

  changeFontColor = () => {
    this.clockArea.style.color = this.randomColor();
  }
}