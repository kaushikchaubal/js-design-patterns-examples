console.log('Everything is inside a module');

var gameModule = (function() {

  var toe = 'Toe';

  function decideAdjectiveForToe() {
    return 'yelling';
  }

  return {
    sayTic: function() {
      $('.tic').text('Tic is talking!');
    },

    sayTac: function() {
      $('.tac').text('Tac is shouting!');
    },

    sayToe: function() {
      $('.toe').text(toe + ' is ' + decideAdjectiveForToe() + '!');
    }
  }
})();

$( document ).ready(function() {
    gameModule.sayTic();
    gameModule.sayToe();
});
