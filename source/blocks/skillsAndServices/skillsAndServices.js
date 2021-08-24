const initiateSkillCard = require('../skill-card/skill-card.js');
$(document).ready(function(){
  $( ".navigation__item_skills-and-services" ).click(function(){
    if (!$(this).hasClass('active')) {
      setTimeout(()=>{intiateCards()},200)
    }
  })
})

function intiateCards(){
  console.log("lto");
  initiateSkillCard();
  $(".skillsAndServices__service-card").css({"opacity": "1", "filter": "grayscale(0)"})
}