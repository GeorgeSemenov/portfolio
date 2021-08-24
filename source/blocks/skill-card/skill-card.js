module.exports = function(){
  let skillCards = $('.skill-card');
  for (var i = 0; i < skillCards.length; i++) {
    let percentage = $(skillCards[i]).children('.skill-card__svg-container').data("percentage");
    let circle = $(skillCards[i]).find('> .skill-card__svg-container > .skill-card__progress-bar-container > .skill-card__progress-bar-line_filled');
    var r = $(circle).attr('r');
    var c = 2*Math.PI*r;

    if (percentage < 0) { percentage = 0;}
    if (percentage > 100) { percentage = 100;}
    // let radial = ((100 - percentage)/100)*c//Это вычисление даёт неверные результаты

    let circleLength = 566-251;
    let radial = ((100 - percentage)/100)*circleLength + 251;

    circle.css({"stroke-dashoffset":radial});
  }
  $('.skill-card skill-card__svg-container').data("selector")
}
