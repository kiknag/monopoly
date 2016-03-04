//computer
//player

// Player move
function playerPosition() {
  $('#'+player.position).append('<i class="fa fa-plane player" style="font-size: 2em"></i>'); 
}

// Computer move
function computerPosition() {
  $('#'+computer.position).append('<i class="fa fa-car computer" style="font-size: 2em"></i>'); 
}

// Remove player old position
function removePlayerPosition() {
  $('.player').remove();
}

// Remove computer old positon 
function removeComputerPosition() {
  $('.computer').remove();
}

// Start Game
$('.start-game').on('click', function() {
  // Init players
  playerPosition();
  computerPosition();
  
  // Remove start button
  $('.start-game').remove();
  
  // Remove block from Roll
  $('.dice').removeAttr('disabled');
  
  // Game started message
  message('Game started. Good Luck!');
});

// Player dice
  $('.dice').on('click', function() {
    // Remove block from End Move
    $('.end-move').removeAttr('disabled');
    
    // block roll button
    $('.dice').attr('disabled="disabled"');
    
    // Remove player old position
    removePlayerPosition();
    // Add dice total to player position to move
    player.position += total;
    // Check place
    if(player.position > 12) {
      player.position -= 12;
    }
    // Move player
    playerPosition();
    
    // Output player message
    message('You rolled dice, total ' + total, 'player');
    
    // Console output
    console.log(player.position);
  });

// Computer Dice
// Remove computer's old position   
    $('.end-move').on('click', function() {
      // Block end-move
      $('.end-move').attr('disabled="disabled"');
      
      // Unblock roll
      $('.dice').removeAttr('disabled');
      
      removeComputerPosition();
    
      // Roll dice for Computer
      var roll1 = roll();
      var roll2 = roll();
      var computerTotal = roll1 + roll2;
      
      console.log('Compdice :' + roll1);
      
      
      // Add dice number
      computer.position += computerTotal;
      
      // Check number
      if(computer.position > 12) {
        computer.position -= 12;
      }
      
      // Computer move
      computerPosition();
      
      // Output computer message
      message('Computer rolled, total ' + computerTotal, 'computer');
      }); 
      

// Messages
function message(message, name) {
  name = name || 'to all';
  if(name.toLowerCase() === 'computer'.toLowerCase()) {
    $('#computerConsole').prepend(message + '\n');
  } else if(name.toLowerCase() === 'player'.toLowerCase()) {
    $('#playerConsole').prepend(message + '\n');
  } else if(name === 'to all') {
    $('#computerConsole').prepend(message + '\n');
    $('#playerConsole').prepend(message + '\n');
  } else {
    console.error('There was error while trying to write message');
  }
} 
