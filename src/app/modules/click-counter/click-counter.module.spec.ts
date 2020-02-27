import * as $ from 'jquery';
import { ClickCounter } from './click-counter.module'


describe('ClickCounter', () => {
  const user = new ClickCounter();
  let form: any;


  describe('Проверка методов и свойств', () => {

    beforeEach(function () {
      user.clickNumber = 0;
      form = $('<div>', {
        'class': 'click-number',
        text: user.clickNumber
      })

      $(document.body).append(form);
    });

    afterEach(function () {
      form.remove();
      form = null;
    });

    it(`Метод "start" присваивает значение "0" свойству 'clickNumber', если  в елементе 'click-number' нет содержимого.`, () => {
      if (!$('.click-number').text()) {
        user.start();
        expect(user.clickNumber).toEqual(0);
      }
    });

    it(`Метод "start" добавляет содержимое в елемент 'click-number'. Значение должно быть 0.`, () => {
      user.start();
      expect(+$('.click-number').text()).toEqual(0);
    });

    it(`Метод "clickCount" прибавляет 1 "clickNumber". Значение должно быть 1 при изначальном 0.`, () => {
      user.clickCount();
      expect(user.clickNumber).toEqual(1);
    });

    it(`Метод "clickCount" прибавляет 1 к значению '.click-number' при каждом вызове. Значение должно быть 5 при изначальном 0.`, () => {
      user.clickCount();
      user.clickCount();
      user.clickCount();
      user.clickCount();
      user.clickCount();
      expect(user.clickNumber).toEqual(5);
    });

  });



});