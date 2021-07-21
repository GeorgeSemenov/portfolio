$(document).ready(function(){
  let timeForFading = 200;
  //Убираем display с помощью js, чтобы fadein запомнил оригинальное значение disple:flex, а не block
  $("main>div[class*='-screen']").css({"display": 'none'})
  //Находим тот блок, который должен быть видимым изначально и делаем его таковым
  $("main>div[data-visible='true']").css({"display": 'flex'})
  
  $( ".navigation__item" ).click(function(){
    if(!$(this).hasClass('active')){
      let target = $(this).data("target");
      let previousTarget = $('.navigation__item.active').data("target");
      
      $('.navigation__item.active').removeClass('active');
      $(this).addClass('active');
      $(`div#${previousTarget}`).fadeOut(timeForFading, ()=>{
        $(`div#${target}`).fadeIn(timeForFading, ()=>{
        });
      });
    }
  })
})
