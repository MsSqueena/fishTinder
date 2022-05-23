/*
Here is the main Javascript for the slidshow of images.
*/
function nextSlide(x){
  var val = Math.floor(Math.random() * x);

  switch (val){
    case 0:
      outputEl.html("<img src='../img/placeholder/cards/CardInfo.png' class='profiles'/>");
      break;
    case 1:
      outputEl.html("<img src='../img/placeholder/cards/card1.png' class='profiles'/>");
      break;
    case 2:
      outputEl.html("<img src='../img/placeholder/cards/card2.png' class='profiles'/>");
      break;
    case 3:
      outputEl.html("<img src='../img/placeholder/cards/card3.png' class='profiles'/>");
      break;
    case 4:
      outputEl.html("<img src='../img/placeholder/cards/card4.png' class='profiles'/>");
      break;
    case 5:
      outputEl.html("<img src='../img/placeholder/cards/card5.png' class='profiles'/>");
      break;
    case 6:
      outputEl.html("<img src='../img/placeholder/cards/card6.png' class='profiles'/>");
      break;
    case 7:
      outputEl.html("<img src='../img/placeholder/cards/card7.png' class='profiles'/>");
      break;
    case 8:
      outputEl.html("<img src='../img/placeholder/cards/card8.png' class='profiles'/>");
      break;
    case 9:
      outputEl.html("<img src='../img/placeholder/cards/card9.png' class='profiles'/>");
      break;
    case 10:
      outputEl.html("<img src='../img/placeholder/cards/card10.png' class='profiles'/>");
      break;
    case 11:
      outputEl.html("<img src='../img/placeholder/cards/card11.png' class='profiles'/>");
      break;
    case 12:
      outputEl.html("<img src='../img/placeholder/cards/card12.png' class='profiles'/>");
      break;
    case 13:
      outputEl.html("<img src='../img/placeholder/cards/card13.png' class='profiles'/>");
      break;
    case 14:
      outputEl.html("<img src='../img/placeholder/cards/card14.png' class='profiles'/>");
      break;
  }
}

outputEl = $("#output");

deathButtEl = $("#deathButt");
nextButtEl = $("#nextButt");

var cardNum = 14;
outputEl.html(nextSlide(0));

deathButtEl.click(function(){
  outputEl.html(nextSlide(cardNum));
});
