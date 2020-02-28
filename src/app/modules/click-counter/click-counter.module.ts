import { ClickNumber } from "../../interfaces/modules.interface";
require('velocity-animate');
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
    if (this.clickNumber > 0 && this.clickNumber < 2) {
      (<any>this.countContainer).velocity(
        { height: '88px' },
        { duration: 300 });
    }
    console.log('%cthis.clickNumber:',"color:#0099ff; font-size:1rem; border: 2px solid #00ff00;padding: 0 20px 0 20px;", this.clickNumber);
    if (this.clickNumber === 0) {
      (<any>this.countContainer).velocity(
        { height: '72px' },
        { duration: 300 });
    }
  }
}


