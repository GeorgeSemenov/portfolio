$(document).ready(function(){
  elements = $(".portfolio-screen__example-container");
  for(i = 0; i<= elements.length; i++){
    let element = elements[i] ;
    let square = element.getBoundingClientRect();
    let centerX = square.width/2;
    let centerY = square.height/2;
    element.onmouseenter = ()=>{handler(element,square,{x:centerX,y:centerY},true)}
    element.onmouseleave = ()=>{handler(element,square,{x:centerX,y:centerY},false)}
  }
})

function handler(node,square,center,isMouseMovingFromOutside=true){
  let event = window.event; 
  let dx = event.pageX - square.left;//из координаты возбудителя события (мыши) вычетаем координату блока - получаем дэльтаX
  let dy = event.pageY - square.top;
  if( Math.abs(center.x - dx) > Math.abs(center.y - dy)){
    if(dx > center.x){
      console.log(`right side`);
      isMouseMovingFromOutside ? moveFromRightSide(node) : moveToRightSide(node);
    }
    else{
      console.log(`left side`);
      isMouseMovingFromOutside ? moveFromLeftSide(node): moveToLeftSide(node);
    }
  }else{
    if(dy > center.y){
      console.log(`bottom side`);
      isMouseMovingFromOutside ? moveFromBottomSide(node) : moveToBottomSide(node);
    }
    else{
      console.log(`top side`);
      isMouseMovingFromOutside ? moveFromTopSide(node) : moveToTopSide(node);
    }
  }
}

//Увы, композиция типа node.css({direction: "0"}) - не работает, т.к. переменная direction должна быть изначально определенна. 
//поэтому приходится всё явно указывать, очень неудобно
function moveFromLeftSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'100%',"bottom":"0"});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'right':'0'});
  },10)
}
function moveToLeftSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'100%',"bottom":"0"});
}
function moveFromRightSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'-100%'});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'right':'0'});
  },10)
}
function moveToRightSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"right":'-100%'});
}
function moveFromBottomSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"bottom":'-100%'});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'bottom':'0'});
  },10)
}
function moveToBottomSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"bottom":'-100%'});
}
function moveFromTopSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"bottom":'100%'});
  setTimeout(()=>{
    $(node).children(".portfolio-screen__example-hrefs")
          .css({'bottom':'0'});
  },10)
}
function moveToTopSide(node){
  $(node).children(".portfolio-screen__example-hrefs")
             .css({"bottom":'100%'});
}
