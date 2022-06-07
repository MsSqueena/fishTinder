/*
Here is the main Javascript for the slidshow of images.
*/

//----------------------FUNCTIONS---------------------------------------------//
let fishPrints = [
  { //INFOMRATION CARD WITH ALL THE THINGS IN IT
    name:     "Infromation Card",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Sup fish<br>             Location: Everywhere and nowhere fam<br>"+
              "Height: Who knows fam<br>      Age: Who knows fam",

    fishBio:  "Hey, how's it going?<br>"+
              "Fish Tinder Here! Are you interested in finding your match? How about learning about a couple of fish? Here you can find all of that and more! "+
              "To start, press either the fish bones button or the heart button."
  },
  { //WELS CATIFISH
    name:     "Silurus Glanis",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Wels Catfish <br>         Location: Eastern/Western Europe (Also in Spain & Italy) <br>"+
              "Height: 15ft<br>                Age: 15 - 80yr",

   fishBio:   "Obviously this fish wants to catfish you.<br>"+
              "How do people catfish?<br>"+
              "They could be pretending to be another kind of fish, coul dbe getting a really good camera angle, could have photoshopped in a hot human body, could have a filter. . ."+
              "It's important though that we don't make the punchline that the catfish is ugly, cause that's mean."
  },
  { // OARFISH
    name:     "Regalecus Glesne",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Oarfish <br>               Location: Worldwide<br>"+
              "Height: 36ft<br>                 Age: N/A",

    fishBio:  "Oarfish are rare. So two ways: <br>"+
              "Mysterious beauty. Like nobody can ever find them so they're super aloof and cool.<br>"+
              "Or like, nobody can ever find them cos they're shy.<br>"+
              "Oarfish have this huge plume of decorative 'feathers' on their head tho and homie defintely thinks it their best feature.",
  },
  { //COMMON CLOWNFISH
    name:     "Amphiprion Ocellaris",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Common Clownfish <br>       Location: The Eastern Indian Ocean & Western Pacific<br>"+
              "Height: 4.3in<br>                 Age: 10yrs",

    fishBio:  "I mean... it's a clown fish so it should probably try and tell jokes in the chat...<br>"+
              "If not in the bio at least. It is the shorest fish we have here if we want to play with it's height."
  },
  { //HUMPBACK ANGLERFISH
    name:     "Ceratioidei",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Humpback Anglerfish <br>    Location: Antarctic & Atlantic Ocean <br>"+
              "Height: Up To 4ft <br>            Age: 30yrs",

    fishBio:  "Ugly cute? Maybe a goth/emo type dude? Maybe has that scary hello kitty dropping xans tattoo chains +"+
              " all black instagram asthetic"

  },
  { //SEAGULL TRYING TO BE A FISH
    name:     "Realus Fishus",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Fihsh <br>                   Location: Wahther<br>"+
              "Height: 2ft<br>                    Age: 5 - 15yr",

    fishBio:  "Def wearing a big fish mascot suit. 'Hi! I like doing normal fish things like breathing water!"+
              "And going for a swim with my school! and eating fi--- eating seaweed!'",
  },
  { //SMOOTH HAMMERHEAD SHARK
    name:     "Sphyrna Zygaena",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "Name: Smooth Hammerhead Shark <br>       Location: Worldwide (Tropical & Temperate Waters) <br>"+
              "Height: 4 Meters <br>                    Age: 20yrs",

    fishBio:  "<div class='fishBio'>"+
              "Really into its head shape. Flexes its 360 vision"+
              "</div>",
  },
  {
    name:     ""
  }
]


function objContainer(val){
  let curFish = fishPrints[val];

  outputEl.html(curFish.fishImg);
  outputEl.append("<div class='fishBio'>" +curFish.fishBio+ "</div>");
  outputEl.append("<div class='name'> " +curFish.name+ " </div>");
  outputEl.append("<div class='fishInfo'>" +curFish.fishInfo+ "</div>");

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
    if (val == x){
      val -= 1;
      objContainer(val);
      console.log("prev");
      prev = val;
    } else {
      val += 1;
      objContainer(val);
      console.log("prev");
      prev = val;
    }
  } else{
    objContainer(val);
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

var cardNum = 4;                                      //NUMBER OF CARDS
objContainer(0);                                    //START WITH THE INFO CARD
let fishInfo = [];                                     //ARRAY FOR FISHES LIKED
let round = 0;                                         //PLACEHOLDER FOR FISH VALUE
let hidden = false;                                    //CARDS ARE NOT HIDDEN
let prev = 0;

//------------------------BUTTONS & WHAT THEY D0------------------------------//
//FishBONES & HEARTS button shuffle the fish cards shown
deathButtEl.click(function(){
  outputEl.removeClass("w3-container w3-animate-right");
  outputEl.addClass("w3-container w3-animate-right");
  shuffleCard(cardNum, false);
})
nextButtEl.click(function(){
  outputEl.removeClass("w3-container w3-animate-right");
  outputEl.addClass("w3-container w3-animate-right");
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
