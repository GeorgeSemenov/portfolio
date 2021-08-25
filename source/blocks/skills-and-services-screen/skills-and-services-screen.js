const initiateSkillCard = require('../skill-card/skill-card.js');
$(document).ready(function(){
  $( ".navigation__item_skills-and-services" ).click(function(){
    if (!$(this).hasClass('active')) {
      setTimeout(()=>{intiateCards()},400)
    }
  })
})

function intiateCards(){
  initiateSkillCard();
  $(".skills-and-services-screen__service-card").css({"opacity": "1", "filter": "grayscale(0)"})
}