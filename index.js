let gameOn, isPlaying, roundScore, globalScores;
let diceSound = new Audio("sons/dice.wav");
let dice1Sound = new Audio("sons/dice1.wav");
let holdSound = new Audio("sons/hold.wav");
let winnerSound = new Audio("sons/winner.wav");
let newGameSound = new Audio("sons/newGame.wav");
      
start();

/* Button rollDice clicked => a random number is generate
the dice from the random number is displayed
if dice isn't 1, the random number value is add to roundScore
if dice = 1, roundScore = 0 and the player is changing*/ 

document.querySelector('.btn-rollDice').addEventListener('click', () => {
  if (gameOn) {
    let dice = Math.floor(Math.random() * 6) + 1;

    let diceIMG = document.querySelector('img');
    diceIMG.style.display = 'block';
    diceIMG.src = 'images/dice' + dice + '.png';
   
      if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current' + isPlaying).textContent = roundScore;
        diceSound.play();

      } else {
        changePlayer();
        dice1Sound.play();
      }
  }
});

/* Button hold clicked => the round score is add to global score
if globalscore is bigger than 100 the player change to winner
if not player is changing*/

document.querySelector('.btn-hold').addEventListener('click', () => {
  if (gameOn) {
    globalScores[isPlaying] += roundScore;
    document.querySelector('#score' + isPlaying).textContent = globalScores[isPlaying];
    holdSound.play();

    if (globalScores[isPlaying] >= 100) {
      document.querySelector('#name' + isPlaying).textContent = 'Winner!';
      winnerSound.play();
      document.querySelector('img').style.display = 'none';
      document.querySelector('.player-' + isPlaying + '-board').classList.add('winner');
      document.querySelector('.player-' + isPlaying + '-board').classList.remove('active');
      gamePlaying = false;
      
    } else {
     changePlayer(); }
    }
});

/* Button new game clicked => all the scores = 0 player 1 starting*/

document.querySelector('.btn-newGame').addEventListener('click', () => start());

// Functions--------------------------------------------------------------------------------------------------

function start() {
  newGameSound.play();
  gameOn = true;
  isPlaying = 0;
  roundScore = 0;
  globalScores = [0, 0];

    document.querySelector('#name0').textContent = 'Player 1';
    document.querySelector('#score0').textContent = '0';
    document.querySelector('#current0').textContent = '0';
    document.querySelector('.player-0-board').classList.remove('winner');
    document.querySelector('.player-0-board').classList.remove('active');
    document.querySelector('.player-0-board').classList.add('active');

    document.querySelector('img').style.display = 'none';

    document.querySelector('#name1').textContent = 'Player 2';
    document.querySelector('#score1').textContent = '0';
    document.querySelector('#current1').textContent = '0';
    document.querySelector('.player-1-board').classList.remove('winner');
    document.querySelector('.player-1-board').classList.remove('active');
}

let changePlayer = () => {
  if (isPlaying === 0) {
    isPlaying = 1;
  } else {
    isPlaying = 0;
  }
  roundScore = 0;

        document.getElementById('current0').textContent = '0';
        document.getElementById('current1').textContent = '0';

        document.querySelector('.player-0-board').classList.toggle('active');
        document.querySelector('.player-1-board').classList.toggle('active');


        document.querySelector('img').style.display = 'none';
}

