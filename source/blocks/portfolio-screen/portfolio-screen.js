$(document).ready(function(){
  elements = $(".portfolio-screen__example-container");
  for(i = 0; i<= elements.length; i++){
    let element = elements[i] ;
    let square = element.getBoundingClientRect();
    let centerX = square.width/2;
    let centerY = square.height/2;
    element.onmouseenter = ()=>{handler(square,{x:centerX,y:centerY},true)}
  }
})

function handler(square,center,isMouseMovingFromOutside=true){
  let event = window.event; 
  let dx = event.pageX - square.left;//из координаты возбудителя события (мыши) вычетаем координату блока - получаем дэльтаX
  let dy = event.pageY - square.top;
  awaytost($(this));
  if( Math.abs(center.x - dx) > Math.abs(center.y - dy)){
    if(dx > center.x){console.log(`right`)}
    else{console.log(`left`);}
  }else{
    if(dy > center.y){console.log(`bottom`)}
    else{console.log(`top`)}
  }
}

function takeOver(node,direction="left",isMouseMovingFromOutside=true){
  // node
}
function awaytost(node){
  $(node).css({"border":"10px solid red"});
}
