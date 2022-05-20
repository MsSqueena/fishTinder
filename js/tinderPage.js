/*
Here is the main Javascript for the slidshow of images.
*/
function nextSlide(x){
  var val = Math.floor(Math.random() * x);

  switch (val){
    case 0:
      outputEl.html("<img src='../img/placeholder/cards/Card1.png' class='profiles'/>");
      break;
    case 1:
      outputEl.html("<img src='../img/placeholder/cards/Card2.png' class='profiles'/>");
      break;
    case 2:
      outputEl.html("<img src='../img/placeholder/cards/Card3.png' class='profiles'/>");
      break;
  }
}

outputEl = $("#output");

deathButtEl = $("#deathButt");
nextButtEl = $("#nextButt");

var cardNum = 3;

deathButtEl.click(function(){
  outputEl.html(nextSlide(cardNum));
});
