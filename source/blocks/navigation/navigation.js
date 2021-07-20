$(document).ready(function(){
  let timeForFading = 200;
  $( ".navigation__item" ).click(function(){
    if(!$(this).hasClass('active')){
      let target = $(this).data("target");
      let previousTarget = $('.navigation__item.active').data("target");
      
      $('.navigation__item.active').removeClass('active');
      $(this).addClass('active');
      $(`div#${previousTarget}`).fadeOut(timeForFading, ()=>{
        $(`div#${target}`).fadeIn(timeForFading);
      });
    }
  })
})
