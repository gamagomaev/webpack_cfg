import * as $ from "jquery";
function getClickNumber(): void {
  render();

  $(".app").on("click", render);

  function render(): void {
    let clickNumber = $(".click-number");
    if (clickNumber.length) {
      let currentCountValue = clickNumber.text();
      let newCountValue = clickCount(currentCountValue);
      clickNumber.text(`${newCountValue}`);
    } else if (!$(".click-counter").length) {
      $(".app").append(
        "<div class='click-counter'>Текущее количество кликов: " +
        "<div class='click-number'>" +
        "0" +
        "</div>" +
        ".</div>"
      );
    }
  }

  function clickCount(clickNumber: string): number {
    let number: number = +clickNumber;
    return number >= 5 ? 0 : (number += 1);
  }
}

export default getClickNumber;
