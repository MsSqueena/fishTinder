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

   fishBio:   "Hello!<br>"+
              "<br>I'm a Wels Catfish if you didn't know!<br>"+
              "<br>My kind are the largest freshwater fishin in Europe and we're native to Europe and Asia however, as of now we are also an invasive species in Spain and Italy.<br>"+
              "<br>And do you see those little whiskers on my fact? Those are barbles and those barbels act like a tongue. because of that, I have the most taste buds of all animals."+
              "<br>It's really nice for me since I'm such a foodie.<br>"

  },
  { // OARFISH                   #2   IMAGE ADDED
    name:     "Regalecus Glesne",
    fishName: "Oarfish",
    fishImg:  "<img src='../img/official/profileImage/Oarfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Oarfish <br>               <b>Location:</b> Worldwide<br>"+
              "<b>Height:</b> 36ft<br>                 <b>Age:</b> N/A",

    fishBio:  "<br>Why Hello There!<br>"+
              "<br>I am an Oarfish and your rather fortunate to come across me. My species rarely comes to the surface because when we do, it's mostly because we're dying.<br>"+
              "So matching with me KINDA means we're working long distance. After all, I, like many other Oarfish, live deep in the mesopelagic zone.<br>"+
              "Though funny enough, you can still call me Mr.Wordlwide since I'm found world wide as a cosmopolitan species.<br>"+
              "My favorite kind of food are soft since I have no teeth which makes it an interesting feat to find food. He hunt our prey vertically and eat crustaceans, plankton,"+
              "and squid.<br> I guess another little 'fun fact' about me is that I'm the longest bony fish there is.",
  },
  { //COMMON CLOWNFISH            #3    IMAGE ADDED
    name:     "Amphiprion Ocellaris",
    fishName: "Clownfish",
    fishImg:  "<img src='../img/official/profileImage/Clownfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Common Clownfish <br>       <b>Location:</b> The Eastern Indian Ocean & Western Pacific<br>"+
              "<b>Height:</b> 4.3in<br>                 <b>Age:</b> 10yrs",

    fishBio:  "Howdy there!<br>"+
              "<br> I'm your friendly little Clownfish!<br>"+
              "A little fun fact about little old me is that all clownfishes are born male but we can change into a female if you want. We're pretty fluid like that."+
              "<br>We live in seaa anemones and in order to build up our immunity to them, we touch them with all different parts of our bodies making us, gradually, immune "+
              "to the creature's venom. We have a symbiotic relationship with them you could say. They provide us protection and we remove teh parasites from them, scaring intruders away."
  },
  { //HUMPBACK ANGLERFISH         #4      IMAGE ADDED
    name:     "Ceratioidei",
    fishName: "Anglerfish",
    fishImg:  "<img src='../img/official/profileImage/anglerfish.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Humpback Anglerfish <br>    <b>Location:</b> Antarctic & Atlantic Ocean <br>"+
              "<b>Height:</b> Up To 4ft <br>            <b>Age:</b> 30yrs",

    fishBio:  "Who am I?<br>"+
              "<br>Why I'm an Anglerfish!<br>"+
              "<br>I like to eat crustacenas and other small fish that get in my way. And you see that little orb on top of my head? It's a sack of bioluminescent bacteria."+
              "Using that thing on my head, I'm able to get my lunch.<br>"+
              "<br>The dudes in our speices act like parasites towards the females of our kind and they only serve the purpose for us to reproduce."+
              "<br>Since we live in such a dark place, our eyesight tends to be pretty bad and if not, we're practically blind. You wouldn't want to come too close just yet, "+
              " I might just confuse you with my next meal."
  },
  { //SEAGULL TRYING TO BE A FISH   #5     IMAGE ADDED
    name:     "Realus Fishus",
    fishName: "Seagull",
    fishImg:  "<img src='../img/official/profileImage/Seagull.png' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Fihsh <br>                   <b>Location:</b> Wahther<br>"+
              "<b>Height:</b> 2ft<br>                    <b>Age:</b> 5 - 15yr",

    fishBio:  "Hallo fellow Fihsh!<br>"+
              "<br>I am fihsh like you and I like to swim in le wahther with all my fihshy firends. I also like to drink le whather, the salt makes it extra tasty.<br>"+
              "<br>I love to breath...le whather..so trust we homie, let's plan a day to meet and swim!",
  },
  { //MUDSKIPPE                      #6     IMAGE ADDED RETUNR TO MUDSKIPPER
    name:     "Peripthalmodon Schlosseri",
    fishName: "Giant Mudskipper",
    fishImg:  "<img src='../img/official/profileImage/Mudskipper.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Mudskipper <br>                        <b>Location:</b>Tropical Shores in the Eastern Indian Ocean & Western Pacific<br>"+
              "<b>Height:</b>2.75 - 9.75in <br>                     <b>Age:</b> 5yrs",

    fishBio:  "Yo, yo, yo!<br>"+
              "<br> I'm a little Mudskipper and i love to come up every now and then and chill on the rocks.<br>"+
              "<br> Fun little facts about me is that I can walk on land unlike a lot of other spieces. There are very few like us and so we can chill on the beach, vibe a bit together."+
              "We can also get some takeout when we hang. I like to eat flies, crustaceans, mealworms, bettles, and on the occassion other fish."
  },
  { //PORCUPINEFISH                 #7        IMAGE ADDED
    name:     "Diodontidae",
    fishName: "Porcupinefish",
    fishImg:  "<img src='../img/official/profileImage/PorcupineFish.jpeg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Porcupinefish <br>                 <b>Location:</b> Tropical & Subtropical Environments <br>"+
              "<b>Height</b>: 36 inches <br>                   <b>Age:</b> 10-15yrs",

    fishBio:  "Yo!<br>"+
              "<br>If you haven't noticed by my incredible picture (since I'm kinda....deflated), I'm a Porcupinefish!<br>"+
              "<br>Radical!<br><br> Sadly, if you want to hug or do any of the junk, you sadly can't. Now why is that? it's because my skin has a toxic substance.<br>"+
              "<br>On another note, if you want to see me puff up, I absorbe a whole lot of water when prey is around me. And another fun fact I guess, I have a single tooth "+
              "that helps me eat crustaceans and mollusks."
  },
  { // GOBLIN SHARK                 #8         IMAGE ADDED
    name:     "Mitsukurina Owstoni",
    fishName: "Goblin Shark",
    fishImg:  "<img src='../img/official/profileImage/GoblinShark.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Goblin Shark <br>                  <b>Location:</b> Temperate & Tropical Waters <br>"+
              "<b>Height:</b> 12ft. <br>                       <b>Age:</b> 60yrs",

    fishBio:  "Hello there,<br>"+
              "<br>i'm your friendly old Golbin shar, though I don't look too friendly...<br>"+
              "I live deep in the ocean, around 1300ft down. I don't really eatting around other people that that's because our Jaw unhinges in order to devour our meals."+
              "Unlike other animals, our face is always in a toothy grin since our teeth are always showing. We feed off of crustaceans, fish, and squid and we're where mostly active "+
              "during the mornings and the evenings. And we're kinda...slow."
  },
  { //BLOBFISH                      #9       IMAGE ADDED
    name:     "Psychrolutes Marcidus",
    fishName: "Blobfish",
    fishImg:  "<img src='../img/official/profileImage/Blobfish.jpg' class='fishImage'</div>",

    fishInfo: "<b>Name:</b> Blobfish <br>                       <b>Location:</b> Atlantic, Indian & Pacific Ocean <br>"+
              "<b>Height:</b> >30cm <br>                        <b>Age:</b> Up to 130",

    fishBio:  "Hi...<br>"+
              "<br>I'm a Blobfish...that's what people call me since when we're on the surface we kinda of...deflate.<br>"+
              "<br>We're a product of the deep sea itself, with very little muscles and very soft bones. We dont' actually look like blobs back home, we're just under so much "+
              "pressure up here on the surface. After all 600 to 1200m down is a big different...It's actually a miracle how I'm still alive...since we kinda of die when he appear."+
              "Since we're so soft, the water guides us to all the places we go due to the buoyancy by our high fat content."
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

creditsEl.click(function(){
  console.log("Credits Click");
  alert("This website was created by: \n\nJacqueline Castro (Programming) \nDiego Agurto (Art) \nLaiy Joshi (Art) \nSabah Shaikh (Research) \nJulian Johnson (Art)");
})
