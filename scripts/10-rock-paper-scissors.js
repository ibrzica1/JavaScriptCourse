let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lossees: 0,
  draw: 0
};
function scoreUpdate() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.lossees}, Ties: ${score.draw} `; }

function pickMove() {
      document.querySelector('.js-pick').innerHTML
      = ` You
<img src="images/${playerMove}-emoji.png" 
class="move-icon">
<img src="images/${computerMove2}-emoji.png" class="move-icon">
Computer`;
    }
function outcome() {
    document.querySelector('.js-outcome').innerHTML
    = result;
}

/* if (score === null) {
  score = {
    wins: 0,
    lossees: 0,
    draw: 0
  }
} */

let playerMove;
let result;

  function pickComputerMove() {
    let computerMove2 = '';
    const randomNumber2 = Math.random();
if (randomNumber2 >= 0 && randomNumber2 < 1 / 3) {
  computerMove2 = 'Rock';
}
else if (randomNumber2 > 1 / 3 && randomNumber2 < 2 / 3) {
  computerMove2 = 'Paper';
}
else if (randomNumber2 > 2 / 3 && randomNumber2 < 1) {
  computerMove2 = 'Scissors';
}

return computerMove2;
  }