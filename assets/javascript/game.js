
//Global variables
 $(document).ready(function() {


// All street fighter players
var streetFighters;
// Player ID 
var player;
// Player selected
var playerSelected;
// Defendr ID
var defender;
// Defender Selected
var defenderSelected = false;

var defeat = false;

// Arry of playable charaters
var characters = [
    ryu = {
        name: "Ryu",
        hp: 120,
        attack: 8,
        counterAttackPower: 15
    }, 

    ken = {
        name: "Ken",
        health: 100,
        attack: 14,
        enemyAttackBack: 5
    }, 

    sagat = {
        name: "Sagat",
        hp: 150,
        attack: 8,
        enemyAttackBack: 20
    }, 

    chunli = {
        name: "Chun Li",
        hp: 180,
        attack: 7,
        enemyAttackBack: 20
    }
];
  
     function pickPlayer(){

      $(".characters").on("click", function() {
      var selectedPlayer = $(this).attr("id");
      console.log(selectedPlayer);

      var audioRyu = document.createElement("audio");
      audioRyu.setAttribute("src", "Assets/audio/ryu.mp3");

      var audioKen = document.createElement("audio");
      audioKen.setAttribute("src", "Assets/audio/ken.mp3");

      var audioSagat = document.createElement("audio");
      audioSagat.setAttribute("src", "Assets/audio/sagat.mp3");

      var audioChunli = document.createElement("audio");
      audioChunli.setAttribute("src", "Assets/audio/chunli.mp3");

     if (selectedPlayer === "ryu") {
         $("#ryu").appendTo("#selectedPlayer");
         $("#ken, #sagat, #chunli").appendTo("#availableDefenders");
         audioRyu.play();

     }

     else if (selectedPlayer === "ken") {
         $("#ken").appendTo("#selectedPlayer");
         $("#ryu, #sagat, #chunli").appendTo("#availableDefenders");
         audioKen.play();
     }

     else if (selectedPlayer === "sagat") {
         $("#sagat").appendTo("#selectedPlayer");
         $("#ken, #ryu, #chunli").appendTo("#availableDefenders");
         audioSagat.play();
     }

     else if (selectedPlayer === "chunli") {
         $("#chunli").appendTo("#selectedPlayer");
         $("#ken, #sagat, #ryu").appendTo("#availableDefenders");
         audioChunli.play();
     }
   
});

   };

// function pickDefender(){

//     if ($("#ryu").on("click", function() {
//         $("#ryu").appendTo("#selectedDefender");
//         console.log("code");
//     }



// });






 
 pickPlayer();

  });
 



