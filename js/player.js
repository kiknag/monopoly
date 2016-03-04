var player;
var computer = {
  name: 'Mr.Robot',
  money: 1500,
  logo: '<i class="fa fa-car"></i>',
  business: [],
  position: 1
}

function CreatePlayer() {
  if($('.playerName').val()) {
    this.name = $('.playerName').val();
    this.money = 1500;
    this.logo = '<i class="fa fa-plane player"></i>';
    this.business = [];
    this.position = 1;
      // Hide registration field
    $('.registration').hide();
    $('.errorMessage').hide();
    // Show start button
    $('.start-game').show();
  } else {
    $('.errorMessage').fadeIn();
  }
}

function PersonGenerator() {
  player = new CreatePlayer();
  if(player.name) {
    // Write player name and money
    $('.welcome_name').text(player.name);
    $('.playerMoney').html('<i class="fa fa-money"></i> ' + player.money + " ");
    // Empty input
    $('.playerName').val('');
  }
  console.log(player);
}


// Display info
$('.computer_name').html(computer.name);
$('.computer_money').html('<i class="fa fa-money"></i> ' +computer.money);