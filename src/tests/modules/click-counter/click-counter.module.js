"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
class ClickCounter {
    start() {
        let elem = $('.click-number');
        if (!elem.text()) {
            elem.text(0);
            this.clickNumber = 0;
        }
        ;
        $('.click-counter').on('click', () => this.clickCount());
    }
    clickCount() {
        const clickNumbersContainer = $('.click-number');
        this.clickNumber === 0 ?
            this.clickNumber = 1 :
            this.clickNumber >= 5 ?
                this.clickNumber = 0 :
                (this.clickNumber += 1);
        clickNumbersContainer.text(`${this.clickNumber}.`);
    }
}
exports.ClickCounter = ClickCounter;
