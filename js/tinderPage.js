/*
Here is the main Javascript for the slidshow of images.
*/

//----------------------FUNCTIONS---------------------------------------------//
function switchContainer(val){        //Holds all the variations of fish and their fish cards!

  switch (val){
    case 0:                   //INFORMATION card
      outputEl.html("<img src='../img/placeholder/cards/CardInfo.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("Image 0");
      break;
    case 1:                   //CATFISH
      outputEl.html("<img src='../img/placeholder/cards/card1.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("Image 1");
      break;
    case 2:                   //OARFISH
      outputEl.html("<img src='../img/placeholder/cards/card2.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("Image 2");
      break;
    case 3:                   //CLOWNFISH
      outputEl.html("<img src='../img/placeholder/cards/card3.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("Image 3");
      break;
    case 4:                   //ANGLERFISH
      outputEl.html("<img src='../img/placeholder/cards/card4.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("Image 4");
      break;
    case 5:                   //SEAGULL
      outputEl.html("<img src='../img/placeholder/cards/card5.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 5");
      break;
    case 6:                   //HAMMERHEAD
      outputEl.html("<img src='../img/placeholder/cards/card6.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 6");
      break;
    case 7:                   //REMORA
      outputEl.html("<img src='../img/placeholder/cards/card7.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 7");
      break;
    case 8:                   //PORCUPINEFISH
      outputEl.html("<img src='../img/placeholder/cards/card8.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 8");
      break;
    case 9:                   //GOBLIN SHARK
      outputEl.html("<img src='../img/placeholder/cards/card9.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 9");
      break;
    case 10:                   //EEL
      outputEl.html("<img src='../img/placeholder/cards/card10.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 10");
      break;
    case 11:                   //PIRANA
      outputEl.html("<img src='../img/placeholder/cards/card11.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 11");
      break;
    case 12:                   //FLOUNDER
      outputEl.html("<img src='../img/placeholder/cards/card12.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 12");
      break;
    case 13:                   //MUDSKIPPER
      outputEl.html("<img src='../img/placeholder/cards/card13.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("image 13");
      break;
    case 14:                   //BLOBFISH (SHOULD PROBABLY REMOVE HIM)
      outputEl.html("<img src='../img/placeholder/cards/card14.png' id='profiles' class='w3-container w3-animate-right'/>");
      console.log("Image 14");
  }
}
//This function picks a random number and reveals the card.
function shuffleCard(x, statment){
  //IF YOU LIKED THE FISH CARD, SAVE IT
  if((statment == true)&&(prev != 0)){
    fishInfo[round] = prev;
    console.log(fishInfo);
    round++;
    console.log(round);
  }

//ELSE, LET'S SHUFFLE THE CARDS
  let val = Math.floor(Math.random() * x);
  while (val == 0){
    val = Math.floor(Math.random() * x);
  }
//
  if (val == prev){
    if (val == 14){
      val -= 1;
      switchContainer(val);
      console.log("prev");
      prev = val;
    } else {
      val += 1;
      switchContainer(val);
      console.log("prev");
      prev = val;
    }
  } else{
    switchContainer(val);
    prev = val;
  }
}

//------------------------WORKING CODE----------------------------------------//
outputEl    = $("#output");                            //Collect the output location

deathButtEl = $("#deathButt");                         //Collect Button information
nextButtEl  = $("#nextButt");

dmEl        = $("#dm");
matchesEl   = $("#matches");
listEl      = $("#list");
creditsEl   = $("#credits");

var cardNum = 14;                                      //NUMBER OF CARDS
switchContainer(0);                                    //START WITH THE INFO CARD
let fishInfo = [];                                     //ARRAY FOR FISHES LIKED
let round = 0;                                         //PLACEHOLDER FOR FISH VALUE
let hidden = false;                                    //CARDS ARE NOT HIDDEN
let prev = 0;

//------------------------BUTTONS & WHAT THEY D0------------------------------//
//FishBONES & HEARTS button shuffle the fish cards shown
deathButtEl.click(function(){
  shuffleCard(cardNum, false);
})
nextButtEl.click(function(){
  shuffleCard(cardNum, true);
})

//MATCHES button hids the fishCards and the buttons on screen so you could see
//everything swimming in the background.
matchesEl.click(function(){
  console.log("click");

//This turns off the fishCards
  if($("#profiles").css("visibility") == "hidden"){
    $("#profiles").css("visibility", "visible");
  } else {
    $("#profiles").css("visibility", "hidden");
  }
//this turns off the buttons
  if($(".choiceButtons").css("visibility") == "hidden"){
    $(".choiceButtons").css("visibility", "visible");
  } else {
    $(".choiceButtons").css("visibility", "hidden");
  }
})

//-----------------MOVING OBJECTS IN THE BACKGROUND---------------------------//
