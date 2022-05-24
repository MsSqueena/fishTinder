/*
Here is the main Javascript for the slidshow of images.
*/
function switchContainer(val){

  switch (val){
    case 0:
      outputEl.html("<img src='../img/placeholder/cards/CardInfo.png' class='profiles' />");
      console.log("Image 0");
      break;
    case 1:
      outputEl.html("<img src='../img/placeholder/cards/card1.png' class='profiles' />");
      console.log("Image 1");
      break;
    case 2:
      outputEl.html("<img src='../img/placeholder/cards/card2.png' class='profiles' />");
      console.log("Image 2");
      break;
    case 3:
      outputEl.html("<img src='../img/placeholder/cards/card3.png' class='profiles' />");
      console.log("Image 3");
      break;
    case 4:
      outputEl.html("<img src='../img/placeholder/cards/card4.png' class='profiles' />");
      console.log("Image 4");
      break;
    case 5:
      outputEl.html("<img src='../img/placeholder/cards/card5.png' class='profiles' />");
      console.log("image 5");
      break;
    case 6:
      outputEl.html("<img src='../img/placeholder/cards/card6.png' class='profiles' />");
      console.log("image 6");
      break;
    case 7:
      outputEl.html("<img src='../img/placeholder/cards/card7.png' class='profiles' />");
      console.log("image 7");
      break;
    case 8:
      outputEl.html("<img src='../img/placeholder/cards/card8.png' class='profiles' />");
      console.log("image 8");
      break;
    case 9:
      outputEl.html("<img src='../img/placeholder/cards/card9.png' class='profiles' />");
      console.log("image 9");
      break;
    case 10:
      outputEl.html("<img src='../img/placeholder/cards/card10.png' class='profiles' />");
      console.log("image 10");
      break;
    case 11:
      outputEl.html("<img src='../img/placeholder/cards/card11.png' class='profiles' />");
      console.log("image 11");
      break;
    case 12:
      outputEl.html("<img src='../img/placeholder/cards/card12.png' class='profiles' />");
      console.log("image 12");
      break;
    case 13:
      outputEl.html("<img src='../img/placeholder/cards/card13.png' class='profiles' />");
      console.log("image 13");
      break;
    case 14:
      outputEl.html("<img src='../img/placeholder/cards/card14.png' class='profiles' />");
      console.log("Image 14");
  }

}
function shuffleCard(x, statment){
  let val = Math.floor(Math.random() * x);
  switchContainer(val);

  if(statment == true){
    fishInfo[round] = val;
    console.log(fishInfo);
    round++;
  }
}

//Start Here !
outputEl    = $("#output");                            //Collect the output location

deathButtEl = $("#deathButt");                         //Collect Button information
nextButtEl  = $("#nextButt");

dmEl        = $("#dm");
matchesEl   = $("#matches");
listEl      = $("#list");
creditsEl   = $("#credits");

profiles  = $(".profiles");

var cardNum = 14;
switchContainer(0);
let fishInfo = [];
let round = 0;
let hidden = false;

//When These button are Clicked, shuffle the cards and check if liked or disliked
deathButtEl.click(function(){
  shuffleCard(cardNum, false);
})
nextButtEl.click(function(){
  shuffleCard(cardNum, true);
})

matchesEl.click(function(){
  console.log("click");
  if(profiles.css("visibility") == "hidden"){
    profiles.css("visibility", "visible");
  } else {
    profiles.css("visibility", "hidden");
  }
})
