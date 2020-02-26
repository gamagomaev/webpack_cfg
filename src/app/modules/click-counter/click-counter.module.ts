import * as $ from 'jquery';
import { ClickNumber } from "../../interfaces/modules.interface";

export class ClickCounter implements ClickNumber {
  clickNumber: number = 0;

  start(): void {
    this.clickNumber = +$('.click-number').text();
    $('.click-counter').on('click', () => this.clickCount());
  }

  clickCount(): void {
    const clickNumbersContainer = $('.click-number');
    this.clickNumber === 0 ?
      this.clickNumber = 1 :
      this.clickNumber >= 5 ?
        this.clickNumber = 0 :
        (this.clickNumber += 1);

    clickNumbersContainer.text(`${this.clickNumber}.`);
  }
}


