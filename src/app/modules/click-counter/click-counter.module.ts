import { ClickNumber } from "../../interfaces/modules.interface";
import Velocity from 'velocity-animate';
export class ClickCounter implements ClickNumber {
  clickNumber: number;
  countContainer: JQuery<HTMLElement>;
  start(): void {
    let elem = $('.click-number');
    this.countContainer = $('.click-counter');
    if (!elem.text()) {
      this.clickNumber = 0;
      elem.text(` ${this.clickNumber}.`);
    };
    this.countContainer.on('click', () => {
      this.clickCount();
      this.apdateCSS();
      this.animate();
    });
  }

  clickCount(): void {
    const clickNumbersContainer = $('.click-number');
    this.clickNumber === 0 ?
      this.clickNumber = 1 :
      this.clickNumber >= 5 ?
        this.clickNumber = 0 :
        (this.clickNumber += 1);
    clickNumbersContainer.text(` ${this.clickNumber}.`);
  }

  apdateCSS(): void {
    this.clickNumber > 0 ?
      this.countContainer.css({ 'color': 'rgb(89, 196, 169)' }) :
      this.countContainer.css({ 'color': 'rgb(61, 61, 61)' });
  }

  animate() {
    let c: HTMLElement = document.querySelector('.click-counter');

    Velocity(c, {
      width: c.offsetWidth * 1.1,
      height: c.offsetHeight * 1.1
    }, {
      duration: 150, loop: 1
    })

  }
}


