/*
Game Rule:

- The game has two players, playing in rounds
- In each turn, a player rolls a dice as many times he wishes. Each result get added to his round score.

- BUT, if the player rolls a 1, all his ROUND scores get lost. After that it's next player turn.
- The player can choose to 'HOLD', which means that his ROUND score get added to his GLOBAL Score.
- The first player to reach 100 points on GLOBAL score wins the game.
*/

var scores, roundScore, activePlayer;


//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current--' + activePlayer).textContent = dice;

//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';


document.querySelector('.btn--roll').addEventListener('click', function () {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the round IF the rolled number was 
    
    if ( dice !== 1) {
        // Add Score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else{
        nextPlayer();
    }
    
    
});


document.querySelector('.btn--hold').addEventListener('click', function () {
    
    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
    
    // Check if the player won the game
    if(scores[activePlayer] >= 10) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
    }else{
        // Next Player
     nextPlayer();
    }
    
    
});


function nextPlayer() {
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        roundScore = 0;
        
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
        
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        
        document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    document.querySelector('#name--0').textContent = 'Player 1';
    
    document.querySelector('#name--1').textContent = 'Player 2';
}