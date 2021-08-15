$(document).ready(function(){
  //функционал для плавного выплывания фона на примерах работ
  elements = $(".portfolio-screen__example-container");
  for(i = 0; i< elements.length; i++){
    let element = elements[i] ;
    $(element).on( "mouseenter", ()=>{handler(element,true)})
    $(element).on( "mouseleave", ()=>{handler(element,false)})
  }

  //Функционал по фильтрации работ
  $(".portfolio-screen__button").click(filterWork);
})

//Эти функции нужны для плавного выдвигания фона на примеры работ
function handler(node,isMouseMovingFromOutside=true){
  let square = node.getBoundingClientRect();
  let center = {};
  center.x = square.width/2;//относительное значение центра
  center.y = square.height/2;//Эти значения у всех блоков будут одинаковыми
  let event = window.event; 
  let dx = event.pageX - $(node).offset().left;//из координаты возбудителя события (мыши) вычетаем координату блока - получаем дэльтаX
  let dy = event.pageY - $(node).offset().top;
  // Этот вывод в консоль нужен для отладки.
  // console.log(`(center.x(${center.x}) - dx(${dx})) > (center.y(${center.y}) - dy(${dy}))
  //   event.pageX(${event.pageX}), event.pageY(${event.pageY})
  //   square.left(${square.left}), square.top(${square.top}), offset(${$(node).offset().top})`);
  //нужно сравнивать процентные соотношения, т.к. в простых числах сравнения будут неверны
  //Если производить круговые движения, то выезжание бэка даст сбой.
  if($(window).width() > 1199){
    if( Math.abs(center.x - dx)/center.x > Math.abs(center.y - dy)/center.y){
      if(dx > center.x){
        //console.log(`right side`);
        isMouseMovingFromOutside ? moveFromRightSide(node) : moveToRightSide(node);
      }
      else{
        //console.log(`left side`);
        isMouseMovingFromOutside ? moveFromLeftSide(node): moveToLeftSide(node);
      }
    }else{
      if(dy > center.y){
        //console.log(`bottom side`);
        isMouseMovingFromOutside ? moveFromBottomSide(node) : moveToBottomSide(node);
      }
      else{
        //console.log(`top side`);
        isMouseMovingFromOutside ? moveFromTopSide(node) : moveToTopSide(node);
      }
    }
  }
}

//Увы, композиция типа node.css({direction: "0"}) - не работает, т.к. переменная direction должна быть изначально определенна. 
//поэтому приходится всё явно указывать, очень неудобно
function moveFromLeftSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'100%',"bottom":"0","transition": "none"});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'right':'0',"transition": "all .25s ease 0s"});
  },10)
}
function moveToLeftSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'100%',"bottom":"0"});
}
function moveFromRightSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'-100%', "bottom": "0","transition": "none"});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'right':'0',"transition": "all .25s ease 0s"});
  },100)
}
function moveToRightSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'-100%'});
}
function moveFromBottomSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right" : "0","bottom":'-100%',"transition": "none"});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({"right" : "0",'bottom':'0',"transition": "all .25s ease 0s"});
  },10)
}
function moveToBottomSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"bottom":'-100%'});
}
function moveFromTopSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right" : "0","bottom":'100%',"transition": "none"});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'bottom':'0',"transition": "all .25s ease 0s"});
  },10)
}
function moveToTopSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"bottom":'100%'});
}

//Эти функции нужны для фильтрации работ в соответсвии с выставленными флагами
function filterWork(){
  let works = $("div.portfolio-screen__example-container");
  for(i = 0; i< works.length; i++){
    if($(works[i]).css("display")=='block'){
      $(works[i]).fadeOut();
    }
  }
  let selector = $(this).data("selector");
  $(this).siblings().removeClass('portfolio-screen__button_active');
  if ($(this).attr('class').indexOf('portfolio-screen__button_active')==-1){
    $(this).addClass("portfolio-screen__button_active");
  }
  if(selector == 'all'){$(`.portfolio-screen__example-container`).fadeIn();}
  else {$(`.portfolio-screen__example-container[data-mark=${selector}]`).fadeIn();}
}
