var dice1;
var dice2;
var total;

// Dice roll function - generates numbers 1-6
function roll() {
  var dice = Math.floor((Math.random() * 6) +1);
  return dice;
}

// Dice roll and display
function rollDice() {
  dice1 = roll();
  dice2 = roll();
  total = dice1 + dice2;
  $('.diceDisplay').html(
    '<b>dice 1: </b>' 
    + dice1 + 
    ' <b>dice:2 </b>' 
    + dice2 + 
    ' <b>Total: </b>' 
    + (dice1 + dice2));
}
