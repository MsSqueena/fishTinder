//-----KINDA WORKING CODE. SO THIS CODE REMOVES THE NUMBER FRM THE LIST-------//
/*
  deathButtEl.click(function(){
    val = Math.floor(Math.random() * cardLeft.length);
    console.log("val: "+val+" & cardLeft: "+ cardLeft);
    switchContainer(val);
  })
  nextButtEl.click(function(){
    if (val == 0){
      val = Math.floor(Math.random() * cardLeft.length);
      console.log("val: "+val+" & cardLeft: "+cardLeft);
      switchContainer(val);
    } else {
      cardLeft.splice(val-1, 1);
      val = Math.floor(Math.random() * cardLeft.length);
      switchContainer(val);
      console.log("val: "+val+" & cardLeft: "+cardLeft);
    }

    console.log(cardLeft);
  })
*/

//-------------------------------SWITCHES SAVED-------------------------------//
/*
function switchContainer(val){
  switch (val){
    case 0:
      outputEl.html("<img src='../img/placeholder/cards/CardInfo.png' class='profiles'/>");
      console.log("Image 0");
      break;
    case 1:
      outputEl.html("<img src='../img/placeholder/cards/card1.png' class='profiles'/>");
      console.log("Image 1");
      break;
    case 2:
      outputEl.html("<img src='../img/placeholder/cards/card2.png' class='profiles'/>");
      console.log("Image 2");
      break;
    case 3:
      outputEl.html("<img src='../img/placeholder/cards/card3.png' class='profiles'/>");
      console.log("Image 3");
      break;
    case 4:
      outputEl.html("<img src='../img/placeholder/cards/card4.png' class='profiles'/>");
      console.log("Image 4");
      break;
    case 5:
      outputEl.html("<img src='../img/placeholder/cards/card5.png' class='profiles'/>");
      console.log("image 5");
      break;
    case 6:
      outputEl.html("<img src='../img/placeholder/cards/card6.png' class='profiles'/>");
      console.log("image 6");
      break;
    case 7:
      outputEl.html("<img src='../img/placeholder/cards/card7.png' class='profiles'/>");
      console.log("image 7");
      break;
    case 8:
      outputEl.html("<img src='../img/placeholder/cards/card8.png' class='profiles'/>");
      console.log("image 8");
      break;
    case 9:
      outputEl.html("<img src='../img/placeholder/cards/card9.png' class='profiles'/>");
      console.log("image 9");
      break;
    case 10:
      outputEl.html("<img src='../img/placeholder/cards/card10.png' class='profiles'/>");
      console.log("image 10");
      break;
    case 11:
      outputEl.html("<img src='../img/placeholder/cards/card11.png' class='profiles'/>");
      console.log("image 11");
      break;
    case 12:
      outputEl.html("<img src='../img/placeholder/cards/card12.png' class='profiles'/>");
      console.log("image 12");
      break;
    case 13:
      outputEl.html("<img src='../img/placeholder/cards/card13.png' class='profiles'/>");
      console.log("image 13");
      break;
    case 14:
      outputEl.html("<img src='../img/placeholder/cards/card14.png' class='profiles'/>");
      console.log("Image 14");
      break;
  }
}
*/


/*//-----------------FISHES ON THE BACKGROUND!!!!-------------------------------//
function switchFish(val){        //contains the individual fish images

  switch (val){
    case 0:                   //INFORMATION card
      outputEl.html("<img src='../img/placeholder/cards/FishMovng.png' id='fishes'/>");
      console.log("Image 0");
      break;
    case 1:                   //CATFISH
      outputEl.html("<img src='../img/placeholder/cards/bubble.png' id='fishes'/>");
      console.log("Image 1");
      break;
    case 2:                   //OARFISH
      outputEl.html("<img src='../img/placeholder/cards/card2.png' id='fishes'/>");
      console.log("Image 2");
      break;
    case 3:                   //CLOWNFISH
      outputEl.html("<img src='../img/placeholder/cards/card3.png' id='fishes'/>");
      console.log("Image 3");
      break;
    case 4:                   //ANGLERFISH
      outputEl.html("<img src='../img/placeholder/cards/card4.png' id='fishes'/>");
      console.log("Image 4");
      break;
    case 5:                   //SEAGULL
      outputEl.html("<img src='../img/placeholder/cards/card5.png' id='fishes'/>");
      console.log("image 5");
      break;
    case 6:                   //HAMMERHEAD
      outputEl.html("<img src='../img/placeholder/cards/card6.png' id='fishes'/>");
      console.log("image 6");
      break;
    case 7:                   //REMORA
      outputEl.html("<img src='../img/placeholder/cards/card7.png' id='fishes'/>");
      console.log("image 7");
      break;
    case 8:                   //PORCUPINEFISH
      outputEl.html("<img src='../img/placeholder/cards/card8.png' id='fishes'/>");
      console.log("image 8");
      break;
    case 9:                   //GOBLIN SHARK
      outputEl.html("<img src='../img/placeholder/cards/card9.png' id='fishes'/>");
      console.log("image 9");
      break;
    case 10:                   //EEL
      outputEl.html("<img src='../img/placeholder/cards/card10.png' id='fishes'/>");
      console.log("image 10");
      break;
    case 11:                   //PIRANA
      outputEl.html("<img src='../img/placeholder/cards/card11.png' id='fishes'/>");
      console.log("image 11");
      break;
    case 12:                   //FLOUNDER
      outputEl.html("<img src='../img/placeholder/cards/card12.png' id='fishes'/>");
      console.log("image 12");
      break;
    case 13:                   //MUDSKIPPER
      outputEl.html("<img src='../img/placeholder/cards/card13.png' id='fishes'/>");
      console.log("image 13");
      break;
    case 14:                   //BLOBFISH (SHOULD PROBABLY REMOVE HIM)
      outputEl.html("<img src='../img/placeholder/cards/card14.png' id='fishes'/>");
      console.log("Image 14");
  }
}
//THIS FUNCTION IS LIKE shuffleCard EXCEPT IT USES THE INDIVIDUAL FISH IMAGES
function runFish(){
  let value = Math.floor(Math.random() * round);
  switchfish(value-1);
}
//----------------------------------------------------------------------------//
let fish;
function setup(){
  let canv = createCanvas(windowWidth, windowHeight);
  canv.parent('bgCanvas');
}

*/





//ORIGINAL SWITCH code
/*
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
*/
