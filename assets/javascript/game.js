
        // There will be four crystals displayed as buttons on the page.
        var pink = Math.floor(Math.random() * 12) + 1; 
        var yellow = Math.floor(Math.random() * 12) + 1; 
        var purple = Math.floor(Math.random() * 12) + 1; 
        var green = Math.floor(Math.random() * 12) + 1;
        //    * The player will be shown a random number at the start of the game.
        // var randomNumber = Math.floor(Math.random() * 12) + 1; // crystal random number
        // Math.floor(Math.random() * (max - min + 1)) + min;
        var masterNumber= Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        var addition = 0;
        var wins = 0;
        var losses = 0;
        //    * When they do click one, update the player's score counter.
         var updateAddition = function() {
            $("#wins").html("Wins: "+ wins);
            $("#losses").html("Losses: "+ losses);
            $(".addition").html(addition);
        }     
        //    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        //    * Your game will hide this amount until the player clicks a crystal.
        //    * The player wins if their total score matches the random number from the beginning of the game.
        //    * The player loses if their score goes above the random number.
        //    * The game restarts whenever the player wins or loses.
        //    * logic:
        var logic = function() {
        if (addition === masterNumber) {
            wins++;
            restart();
        }else if(addition > masterNumber) {
            losses++;
            restart();
        }else{
            updateAddition();
        };
      };
        // restart
        var restart = function () {
            pink = Math.floor((Math.random() * 12) + 1); 
            yellow = Math.floor((Math.random() * 12) + 1); 
            purple = Math.floor((Math.random() * 12) + 1); 
            green = Math.floor((Math.random() * 12) + 1);
            // $(".crystal").each(function(){ // built in for loop for jquery
            //   var randomNumber = Math.floor((Math.random() * 12) + 1);
            //   $(this).attr("crystalValue", randomNumber)
            // })
            masterNumber= Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $("#masterNumber").empty();
            $("#masterNumber").append(masterNumber);
            addition = 0;
            updateAddition();
        };     
        $(document).ready(function() {
            restart();
            // $(".crystal").on("click", function() {
            //   var crystalValue =  $(this).attr("crystalValue")
            //   console.log(crystalValue)
            //   addition  = addition + parseInt(crystalValue);
            //   console.log(addition)
            //   logic();  
            // });
            $("#pink").on("click", function() {
              console.log(addition)
            addition  = addition + pink;  
            logic();
            });
            $("#yellow").on("click", function() {
              addition = addition + yellow;
              logic();
            });
            $("#purple").on("click", function() {
              addition  = addition + purple;
              logic();
            });
            $("#green").on("click", function() {
              addition = addition + green;
              logic();
            });
        }); 
    