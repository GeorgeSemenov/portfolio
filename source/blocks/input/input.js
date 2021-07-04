const ruFlag = require('../../img/svg/ru_flag.js')('input__flag');
const enFlag = require('../../img/svg/en_flag.js')('input__flag');

$(document).ready(function(){
  $('.input__select-languages').niceSelect();
  // $('.input__select-languages .current').css({'color': 'red'});
  $('.input__select-languages .current').append(ruFlag);
  //Выставляем флаги в опциях
  $('.input__select-languages').find(`[data-value=RU]`).append(ruFlag);
  $('.input__select-languages').find(`[data-value=EN]`).append(enFlag);
  //Выставляем флаг в current секцию при клике на опцию
  $('.input__select-languages li').click(function(){
    if(this.dataset.value == "RU"){
      //Пришлось добавить отсрочку, т.к. если просто указывать append то оригинальный 
      //скрипт niceSelect перебьёт эту команду и не выполнит.
      setTimeout(()=>{
        $(this).parent().siblings('.current').append(ruFlag);
      }, 5);
      $(this).parents('.input_with_languages').children('.input__input').attr("placeholder", "+7 (123) 456 78-90");
    }else{
      setTimeout(()=>{
        $(this).parent().siblings('.current').append(enFlag);
        $(this).parents('.input_with_languages').children('.input__input').attr("placeholder", "+1 (123) 456 78-90");
      }, 5);
    }
    console.log(this.dataset.value)
  });
  let div= '<div>150 000</div>';
})
