const defaultBottom = "-70px";
const showedBottom = "10px";
const mobileBottom = "0px";
import worksDB from "./worksDescriptions.js";
$(document).ready(function () {
  //функционал для плавного выплывания фона на примерах работ
  let elements = $(".portfolio-screen__example-container");
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    $(element).on("mouseenter", () => {
      if ($(window).width() > 1199) {
        chachgeBottomValue(element, showedBottom);
      }
    });
    $(element).on("mouseleave", () => {
      if ($(window).width() > 1199) {
        chachgeBottomValue(element, defaultBottom);
      }
    });
    $(window).on("resize", () => {
      if ($(window).width() > 1199) {
        chachgeBottomValue(element, defaultBottom);
      } else {
        chachgeBottomValue(element, mobileBottom);
      }
    });
  }

  //Функционал по фильтрации работ
  $(".portfolio-screen__button").click(
    filterWork
  ); /*При нажатии на клавишу в меню (все, многостраничники, лэндинги ...) выполняется функция filterWork - она определенна ниже*/
});

function chachgeBottomValue(element, bottomValue) {
  $(element)
    .children(".portfolio-screen__example-git-href")
    .css({ bottom: bottomValue });
  $(element)
    .children(".portfolio-screen__example-description-button")
    .css({ bottom: bottomValue });
}

//Эта функция нужна для фильтрации работ в соответсвии с выставленными флагами
function filterWork() {
  let works = $("div.portfolio-screen__example-container");
  for (i = 0; i < works.length; i++) {
    if ($(works[i]).css("display") == "block") {
      $(works[i]).fadeOut();
    }
  }
  let selector =
    $(this).data(
      "selector"
    ); /*Берётся селектор из кнопки в меню, которую нажали*/
  $(this).siblings().removeClass("portfolio-screen__button_active");
  if ($(this).attr("class").indexOf("portfolio-screen__button_active") == -1) {
    $(this).addClass("portfolio-screen__button_active");
  }
  if (selector == "all") {
    $(`.portfolio-screen__example-container`).fadeIn();
  } else {
    for (i = 0; i < works.length; i++) {
      if ($(works[i]).data("mark").indexOf(selector) != -1) {
        $(works[i]).fadeIn();
      }
    }
  }
  // else {$(`.portfolio-screen__example-container[data-mark=${selector}]`).fadeIn();}
}
