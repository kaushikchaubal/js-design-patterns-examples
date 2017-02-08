console.log('Everything is global');

var toe = 'Toe';

function decideAdjectiveForToe() {
  return 'yelling';
}

function sayTic() {
  $('.tic').text('Tic is talking!');
}

function sayTac() {
  $('.tac').text('Tac is shouting!');
}

function sayToe() {
  $('.toe').text(toe + ' is ' + decideAdjectiveForToe() + '!');
}

$( document ).ready(function() {
    sayTic();
});
