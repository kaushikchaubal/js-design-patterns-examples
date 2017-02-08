console.log('Everything is inside a module-reveal');

var gameModule = (function() {

  var _toe = 'Toe';

  function _decideAdjectiveForToe() {
    return 'yelling';
  }

  function sayTic() {
    $('.tic').text('Tic is talking!');
  }

  function sayTac() {
    $('.tac').text('Tac is shouting!');
  }

  function sayToe() {
    $('.toe').text(_toe + ' is ' + _decideAdjectiveForToe() + '!');
  }

  return {
    sayTic: sayTic,
    sayTac: sayTac,
    sayToe: sayToe
  }
})();

$( document ).ready(function() {
    gameModule.sayTic();
    gameModule.sayToe();
});
