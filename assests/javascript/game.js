$(document).ready(function() {
  //Math.floor(Math.random()*101+19) -> returns random integer between 19-101
  var randomNumber = Math.floor(Math.random() * 101 + 19);
  $("#numberToGuess").text(randomNumber);

  //Math.floor(Math.random()*11+1) -> returns random integer between 1-11
  var redCrystal = Math.floor(Math.random() * 11 + 1);
  var blueCrystal = Math.floor(Math.random() * 11 + 1);
  var yellowCrystal = Math.floor(Math.random() * 11 + 1);
  var purpleCrystal = Math.floor(Math.random() * 11 + 1);
  var total = 0;
  var wins = 0;
  var losses = 0;

  //console.log("total",total.value);
  //console.log("wins",wins.value);
  //console.log("loses",loses.value);

  $("#scores2").text(total);
  $("#totalWins").text(wins);
  $("#totalLoses").text(losses);

  // var randomNumber = function(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  function reset() {
    randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#numberToGuess").text(randomNumber);
    redCrystal = Math.floor(Math.random() * 11 + 1);
    blueCrystal = Math.floor(Math.random() * 11 + 1);
    yellowCrystal = Math.floor(Math.random() * 11 + 1);
    purpleCrystal = Math.floor(Math.random() * 11 + 1);
    total = 0;
    $("#scores2").text(total);
  }
  //console.log("#scores2");

  //function win() -> reset function for when var total === var randomNumber
  function win() {
    alert("You win");
    wins++;
    console.log("wins:" + wins);
    $("#totalWins").text(wins);
    reset();
  }
  // console.log("#wins");

  //function lose () -> reset function for when var total >= var randomNumber
  function lose() {
    alert("You lose");
    losses++;
    console.log("losses:" + losses);
    $("#totalLoses").text(losses);
    reset();
  }
  // console.log("#loses");

  $("#red").on("click", function() {
    total += blueCrystal;
    $("#scores2").text(total);
    if (total === randomNumber) {
      win();
    } else if (total >= randomNumber) {
      lose();
    }
  });
  $("#blue").on("click", function() {
    total += redCrystal;
    $("#scores2").text(total);
    if (total === randomNumber) {
      win();
    } else if (total >= randomNumber) {
      lose();
    }
  });
  $("#yellow").on("click", function() {
    total += purpleCrystal;
    $("#scores2").text(total);
    if (total === randomNumber) {
      win();
    } else if (total >= randomNumber) {
      lose();
    }
  });
  $("#purple").on("click", function() {
    total += yellowCrystal;
    $("#scores2").text(total);
    if (total === randomNumber) {
      win();
    } else if (total >= randomNumber) {
      lose();
    }
  });
});
