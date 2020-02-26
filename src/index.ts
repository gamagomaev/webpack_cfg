import * as $ from 'jquery';
import '@src/style.scss';
import { ClickCounter } from '../src/app/modules/click-counter/click-counter.module';


const clickCounter = new ClickCounter();


$(document).ready(() => clickCounter.start());