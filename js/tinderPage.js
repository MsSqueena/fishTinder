/*
Here is the main Javascript for the slidshow of images.
*/

//----------------------FUNCTIONS---------------------------------------------//
let fishPrints = [
  { //INFOMRATION CARD          #0
    name:     "Infromation Card",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Sup fish<br>             <b>Location:</b> Everywhere and nowhere fam<br>"+
              "<b>Height:</b> Who knows fam<br>      <b>Age:</b> Who knows fam",

    fishBio:  "Hey, how's it going?<br>"+
              "Fish Tinder Here! Are you interested in finding your match? How about learning about a couple of fish? Here you can find all of that and more! "+
              "To start, press either the fish bones button or the heart button.",
  },
  { //WELS CATIFISH             #1
    name:     "Silurus Glanis",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Wels Catfish <br>         <b>Location:</b> Eastern/Western Europe (Also in Spain & Italy) <br>"+
              "<b>Height:</b> 15ft<br>                <b>Age:</b> 15 - 80yr",

   fishBio:   "Obviously this fish wants to catfish you.<br>"+
              "How do people catfish?<br>"+
              "They could be pretending to be another kind of fish, coul dbe getting a really good camera angle, could have photoshopped in a hot human body, could have a filter. . ."+
              "It's important though that we don't make the punchline that the catfish is ugly, cause that's mean."
  },
  { // OARFISH                   #2
    name:     "Regalecus Glesne",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Oarfish <br>               <b>Location:</b> Worldwide<br>"+
              "<b>Height:</b> 36ft<br>                 <b>Age:</b> N/A",

    fishBio:  "Oarfish are rare. So two ways: <br>"+
              "Mysterious beauty. Like nobody can ever find them so they're super aloof and cool.<br>"+
              "Or like, nobody can ever find them cos they're shy.<br>"+
              "Oarfish have this huge plume of decorative 'feathers' on their head tho and homie defintely thinks it their best feature.",
  },
  { //COMMON CLOWNFISH            #3
    name:     "Amphiprion Ocellaris",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Common Clownfish <br>       <b>Location:</b> The Eastern Indian Ocean & Western Pacific<br>"+
              "<b>Height:</b> 4.3in<br>                 <b>Age:</b> 10yrs",

    fishBio:  "I mean... it's a clown fish so it should probably try and tell jokes in the chat...<br>"+
              "If not in the bio at least. It is the shorest fish we have here if we want to play with it's height."
  },
  { //HUMPBACK ANGLERFISH         #4
    name:     "Ceratioidei",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Humpback Anglerfish <br>    <b>Location:</b> Antarctic & Atlantic Ocean <br>"+
              "<b>Height:</b> Up To 4ft <br>            <b>Age:</b> 30yrs",

    fishBio:  "Ugly cute? Maybe a goth/emo type dude? Maybe has that scary hello kitty dropping xans tattoo chains +"+
              " all black instagram asthetic"
  },
  { //SEAGULL TRYING TO BE A FISH   #5
    name:     "Realus Fishus",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Fihsh <br>                   <b>Location:</b> Wahther<br>"+
              "<b>Height:</b> 2ft<br>                    <b>Age:</b> 5 - 15yr",

    fishBio:  "Def wearing a big fish mascot suit. 'Hi! I like doing normal fish things like breathing water!"+
              "And going for a swim with my school! and eating fi--- eating seaweed!'",
  },
  { //SMOOTH HAMMERHEAD SHARK       #6
    name:     "Sphyrna Zygaena",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Smooth Hammerhead Shark <br>       <b>Location:</b> Worldwide (Tropical & Temperate Waters) <br>"+
              "<b>Height:</b> 4 Meters <br>                    <b>Age:</b> 20yrs",

    fishBio:  "Really into its head shape. Flexes its 360 vision",
  },
  { //REMORA                        #7
    name:     "Echeneidae",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Remora <br>                        <b>Location:</b> Tropical & Subtropical Oceans <br>"+
              "<b>Height:</b> 30-90cm <br>                     <b>Age:</b> Unknown",

    fishBio:  "Looking for Sharks, Sea Turtles and Whales. (Definitely a sugarbaby)"
  },
  { //PORCUPINEFISH                 #8
    name:     "Diodontidae",
    fishImg:  "<img src='../img/placeholder/bubble.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Porcupinefish <br>                 <b>Location:</b> Tropical & Subtropical Environments <br>"+
              "<b>Height</b>: 36 inches <br>                   <b>Age:</b> 10-15yrs",

    fishBio:  "Play into the fact that it has a toxic substance covering it's skin"
  },
  { // GOBLIN SHARK                 #9
    name:     "Mitsukurina Owstoni",
    fishImg:  "<img src='../img/official/profileImage/GoblinShark.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Goblin Shark <br>                  <b>Location:</b> Temperate & Tropical Waters <br>"+
              "<b>Height:</b> 12ft. <br>                       <b>Age:</b> 60yrs",

    fishBio:  "Maybe because we can see it's teeth all the time, we can make it seem like the Goblin Shark "+
              " is really happy all the time or that it's trying to be intimidating all the time."
  },
  { //BLOBFISH                      #10
    name:     "Psychrolutes Marcidus",
    fishImg:  "<img src='../img/official/profileImage/Blobfish.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Blobfish <br>                       <b>Location:</b> Atlantic, Indian & Pacific Ocean <br>"+
              "<b>Height:</b> >30cm <br>                        <b>Age:</b> Up to 130",

    fishBio:  "Refrence the Fact that people usually think it looks weird becuase when it comes to the surface "+
              " it's usually dead. Something about it having very soft bones just makes me think it should be a pushover."
  }
]
//----------------------------------------------------------------------------//

function objContainer(val){
  let curFish = fishPrints[val];

  outputEl.html(curFish.fishImg);
  outputEl.append("<div class='fishBio'>" +curFish.fishBio+ "</div>");
  outputEl.append("<div class='name'> <b>" +curFish.name+ "</b> </div>");
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

var cardNum = 11;                                      //NUMBER OF CARDS
objContainer(0);                                       //START WITH THE INFO CARD
let fishInfo = [];                                     //ARRAY FOR FISHES LIKED
let round = 0;                                         //PLACEHOLDER FOR FISH VALUE
let hidden = false;                                    //CARDS ARE NOT HIDDEN
let prev = 0;

//------------------------BUTTONS & WHAT THEY D0------------------------------//
//FishBONES & HEARTS button shuffle the fish cards shown
deathButtEl.click(function(){
  shuffleCard(cardNum, false);
})
deathButtEl.hover(function(){
  deathButtEl.toggleClass("deathButtTwo");
})
nextButtEl.click(function(){
  shuffleCard(cardNum, true);
})
nextButtEl.hover(function(){
  nextButtEl.toggleClass("nextButtTwo");
})

//MATCHES button hids the fishCards and the buttons on screen so you could see
//everything swimming in the background.
matchesEl.click(function(){
  console.log("click");
  //This turns off the fishCards
  if($("#output").css("visibility") == "hidden"){
    $("#output").css("visibility", "visible");
  } else {
    $("#output").css("visibility", "hidden");
  }
  //this turns off the buttons
  if($(".choiceButtons").css("visibility") == "hidden"){
    $(".choiceButtons").css("visibility", "visible");
  } else {
    $(".choiceButtons").css("visibility", "hidden");
  }
})
