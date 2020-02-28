import { ClickCounter } from './modules/click-counter/click-counter.module';

const clickCounter = new ClickCounter();

$(document).ready(() => clickCounter.start());