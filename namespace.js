console.log('Everything is in a namespace');

var game = {
  toe: 'Toe',

  decideAdjectiveForToe: function() {
    return 'yelling';
  },

  sayTic: function() {
    $('.tic').text('Tic is talking!');
  },

  sayTac: function() {
    $('.tac').text('Tac is shouting!');
  },

  sayToe: function() {
    $('.toe').text(this.toe + ' is ' + this.decideAdjectiveForToe() + '!');
  }
}

$( document ).ready(function() {
    game.sayTic();
    game.sayToe();
});
