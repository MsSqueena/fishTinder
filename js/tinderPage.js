/*
Author: Jacqueline Castro
        (I'm trying my best, I'm sorry it's kind of ugly.)

Contents: - Card Information and shuffle function,
          - Three.js for the 3d modeled fishes made (hopefully),
          - Button Hover and Click Functions,
          - Probably a couple of more things, but hopefully their labeled on the bottom.
*/

//----------------------FUNCTIONS---------------------------------------------//
    /*Fish Prints is esentially an array of objects that contain:
          - The Name (Scientific and Common)
          - The Image (Or of What images I have at the moment. Sup Fish Is mine)
          - The General information: Name, Location, Height, and Age
          - A bio: This contains more detailed facts about the first. Ideally we would
                   want it to be written as if it was a dating profile but wew shall see
                   where we go with this.

      I managed to make all the information to be jsut inputed into a html thing but img
      couldn't be saved so it get's the whole path in it.

      All Fishs all coem with another comment on top with the name of what fish it is and
      the number that corresponds with the card. The reason I made the comment on top is
      because I think it's a litle quicker to see than actually haveing to read through it.
    */
let fishPrints = [
  { //INFOMRATION CARD          #0    IMAGE ADDED
    name:     "Infromation Card",
    fishImg:  "<img src='../img/official/profileImage/SupFish2.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Sup fish<br>             <b>Location:</b> Everywhere and nowhere fam<br>"+
              "<b>Height:</b> Who knows fam<br>      <b>Age:</b> Who knows fam",

    fishBio:  "Welocme to Fish Tinder!!!<br>"+
              "<br>Are you intereted in finding your match? Do you want to learn a bunch of fish facts?<br>"+
              "<br>Say no more! Here on Fish Tinder, we have a bunch of different fish profiles for you to browse through a learn a couple facts about fish."+
              "To Start, press either the Fish Bones or the Heart Buttons on the side."
  },
  { //WELS CATIFISH             #1    IMAGE ADDED
    name:     "Silurus Glanis",
    fishName: "Catfish",
    fishImg:  "<img src='../img/official/profileImage/catfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Wels Catfish <br>         <b>Location:</b> Eastern/Western Europe (Also in Spain & Italy) <br>"+
              "<b>Height:</b> 15ft<br>                <b>Age:</b> 15 - 80yr",

   fishBio:   "Obviously this fish wants to catfish you.<br>"+
              "How do people catfish?<br>"+
              "They could be pretending to be another kind of fish, coul dbe getting a really good camera angle, could have photoshopped in a hot human body, could have a filter. . ."+
              "It's important though that we don't make the punchline that the catfish is ugly, cause that's mean."
  },
  { // OARFISH                   #2   IMAGE ADDED
    name:     "Regalecus Glesne",
    fishName: "Oarfish",
    fishImg:  "<img src='../img/official/profileImage/Oarfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Oarfish <br>               <b>Location:</b> Worldwide<br>"+
              "<b>Height:</b> 36ft<br>                 <b>Age:</b> N/A",

    fishBio:  "Oarfish are rare. So two ways: <br>"+
              "Mysterious beauty. Like nobody can ever find them so they're super aloof and cool.<br>"+
              "Or like, nobody can ever find them cos they're shy.<br>"+
              "Oarfish have this huge plume of decorative 'feathers' on their head tho and homie defintely thinks it their best feature.",
  },
  { //COMMON CLOWNFISH            #3    IMAGE ADDED
    name:     "Amphiprion Ocellaris",
    fishName: "Clownfish",
    fishImg:  "<img src='../img/official/profileImage/Clownfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Common Clownfish <br>       <b>Location:</b> The Eastern Indian Ocean & Western Pacific<br>"+
              "<b>Height:</b> 4.3in<br>                 <b>Age:</b> 10yrs",

    fishBio:  "I mean... it's a clown fish so it should probably try and tell jokes in the chat...<br>"+
              "If not in the bio at least. It is the shorest fish we have here if we want to play with it's height."
  },
  { //HUMPBACK ANGLERFISH         #4      IMAGE ADDED
    name:     "Ceratioidei",
    fishName: "Anglerfish",
    fishImg:  "<img src='../img/official/profileImage/anglerfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Humpback Anglerfish <br>    <b>Location:</b> Antarctic & Atlantic Ocean <br>"+
              "<b>Height:</b> Up To 4ft <br>            <b>Age:</b> 30yrs",

    fishBio:  "Ugly cute? Maybe a goth/emo type dude? Maybe has that scary hello kitty dropping xans tattoo chains +"+
              " all black instagram asthetic"
  },
  { //SEAGULL TRYING TO BE A FISH   #5     IMAGE ADDED
    name:     "Realus Fishus",
    fishName: "Seagull",
    fishImg:  "<img src='../img/official/profileImage/Seagull.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Fihsh <br>                   <b>Location:</b> Wahther<br>"+
              "<b>Height:</b> 2ft<br>                    <b>Age:</b> 5 - 15yr",

    fishBio:  "Def wearing a big fish mascot suit. 'Hi! I like doing normal fish things like breathing water!"+
              "And going for a swim with my school! and eating fi--- eating seaweed!'",
  },
  { //MUDSKIPPE                      #6     IMAGE ADDED
    name:     "",
    fishName: "Mudskipper",
    fishImg:  "<img src='../img/official/profileImage/Mudskipper.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Mudskipper <br>                        <b>Location:</b>  <br>"+
              "<b>Height:</b> <br>                     <b>Age:</b> ",

    fishBio:  ""
  },
  { //PORCUPINEFISH                 #7        IMAGE ADDED
    name:     "Diodontidae",
    fishName: "Porcupinefish",
    fishImg:  "<img src='../img/official/profileImage/PorcupineFish.jpeg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Porcupinefish <br>                 <b>Location:</b> Tropical & Subtropical Environments <br>"+
              "<b>Height</b>: 36 inches <br>                   <b>Age:</b> 10-15yrs",

    fishBio:  "Play into the fact that it has a toxic substance covering it's skin"
  },
  { // GOBLIN SHARK                 #8         IMAGE ADDED
    name:     "Mitsukurina Owstoni",
    fishName: "Goblin Shark",
    fishImg:  "<img src='../img/official/profileImage/GoblinShark.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Goblin Shark <br>                  <b>Location:</b> Temperate & Tropical Waters <br>"+
              "<b>Height:</b> 12ft. <br>                       <b>Age:</b> 60yrs",

    fishBio:  "Maybe because we can see it's teeth all the time, we can make it seem like the Goblin Shark "+
              " is really happy all the time or that it's trying to be intimidating all the time."
  },
  { //BLOBFISH                      #9       IMAGE ADDED
    name:     "Psychrolutes Marcidus",
    fishName: "Blobfish",
    fishImg:  "<img src='../img/official/profileImage/Blobfish.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Blobfish <br>                       <b>Location:</b> Atlantic, Indian & Pacific Ocean <br>"+
              "<b>Height:</b> >30cm <br>                        <b>Age:</b> Up to 130",

    fishBio:  "Refrence the Fact that people usually think it looks weird becuase when it comes to the surface "+
              " it's usually dead. Something about it having very soft bones just makes me think it should be a pushover."
  }
]
//----------------------------------------------------------------------------//
let randomMessages = [
  "Hey! How's it going? I was wondering if you wanted to meet up one of these days?",
  "I know a good seaweed diner not to far from here if you wanna check it out.",
  "Did you know that Whale Sharks are the biggest fish in the world at 16 meters long!",
  "Did you know that Neotropical fish alone make up about 10% of all the vertebrates in the world with 5,600 speices in it's category.",
  "Did you know that not all animals with the word 'fish' in their name are actually fish!"
]
//----------------------------------------------------------------------------//
function randomChat(){
  let result = Math.floor(Math.random() * randomMessages.length);

  return randomMessages[result];
}
//----------------------------------------------------------------------------//
function fishList(){
  console.log("FishList");
  let stringOfFish = "";
  let value = 0;

  for(let i = 0; i < round; i++){
    value = fishInfo[i]
    let fishArray = fishPrints[value];
    stringOfFish += ("\n"+fishArray.fishName);
  }

  if (round == 0){
    stringOfFish += "\nOh no! It looks like you haven't liked any fish.";
    return stringOfFish;
    stringOfFish == "";
  } else {
    return stringOfFish;
  }
}
function fishChat(){
  let stringOfMessage = "";

  if (round == 0){
    stringOfMessage +="\nOops I lied, I don't think you have any messages at the moment! Please try looking through the matches. Mayeb then you'll catch a match";
    return stringOfMessage;
    stringOfMessage == "";
  } else {
    let value = Math.floor(Math.random() * fishInfo.length);
    let fishValue = fishInfo[value];
    let fishFriend = fishPrints[fishValue];
    console.log(fishFriend);

    stringOfMessage += ("\n"+fishFriend.fishName+": "+randomChat());
    console.log(stringOfMessage);

    return stringOfMessage;
  }
}
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
listBoxEl   = $("#listBox");

deathButtEl = $("#deathButt");                         //Collect Button information
nextButtEl  = $("#nextButt");

dmEl        = $("#dm");
matchesEl   = $("#matches");
listEl      = $("#list");
creditsEl   = $("#credits");

var cardNum = 10;                                      //NUMBER OF CARDS
objContainer(0);                                       //START WITH THE INFO CARD
let fishInfo = [];                                     //ARRAY FOR FISHES LIKED
let round = 0;                                         //PLACEHOLDER FOR FISH VALUE
let hidden = false;                                    //CARDS ARE NOT HIDDEN
let prev = 0;
listBoxEl.css("visibility", "hidden");

//------------------------BUTTONS & WHAT THEY D0------------------------------//
//FishBONES & HEARTS button shuffle the fish cards shown
deathButtEl.click(function(){
  shuffleCard(cardNum, false);
})
deathButtEl.hover(function(){                           //WHEN MOUSE HOVES, CHANGE COLOR
  deathButtEl.toggleClass("deathButtTwo");
})
nextButtEl.click(function(){
  shuffleCard(cardNum, true);
})
nextButtEl.hover(function(){                            //WHEN MOUSE HOVES, CHANGE COLOR
  nextButtEl.toggleClass("nextButtTwo");
})

dmEl.hover(function(){
  dmEl.toggleClass("hoverDm");
})
matchesEl.hover(function(){
  matchesEl.toggleClass("hoverMat");
})
listEl.hover(function(){
  listEl.toggleClass("hoverList");
})
creditsEl.hover(function(){
  creditsEl.toggleClass("hoverCredit");
})
//------------------------NAVIGATION BAR BUTTONS------------------------------//
//MATCHES button hids the fishCards and the buttons on screen so you could see
//everything swimming in the background.
matchesEl.click(function(){
  console.log("Matches Click");
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
//
listEl.click(function(){
  console.log("List Click");
  alert("So far you have collected "+round+" fish. Here all all the fishes you have collected so far:\n"+fishList());
})

dmEl.click(function(){
  console.log("DM Click");
  alert("You got a message! \n"+fishChat());
})
