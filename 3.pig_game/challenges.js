/*
Game Rule:

- The game has two players, playing in rounds
- In each turn, a player rolls a dice as many times he wishes. Each result get added to his round score.

- BUT, if the player rolls a 1, all his ROUND scores get lost. After that it's next player turn.
- The player can choose to 'HOLD', which means that his ROUND score get added to his GLOBAL Score.
- The first player to reach 100 points on GLOBAL score wins the game.
*/



var scores, roundScore, activePlayer, gamePlaying, lastDice, winningScore;

init();
//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current--' + activePlayer).textContent = dice;

//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';


document.querySelector('.btn--roll').addEventListener('click', function () {
    
    
    if (gamePlaying){
        
        // 1. random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
        
    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    
    if (dice1 !== 1 && dice2 !== 1){
        roundScore += dice1 + dice2;
        document.getElementById('current--' + activePlayer).textContent = roundScore;
    } else{
        nextPlayer();
    }
    /*
    // 3. Update the round IF the rolled number was 
    
    if (dice === 6 && lastDice == 6){
        
        scores[activePlayer] = 0;
        document.querySelector('#score--' + activePlayer).textContent = 0;
        
        nextPlayer();
        
    }else if ( dice !== 1) {
        // Add Score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    } else{
        nextPlayer();
    }
       lastDice = dice;
       */ 
    }
    
    
    
});


document.querySelector('.btn--hold').addEventListener('click', function () {
    
    
    if (gamePlaying){
        
        
        // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        
    var input = document.querySelector('.final-score').value;
    
        
    if (input){
        winningScore = input;
    }
    
    // Check if the player won the game
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name--' + activePlayer).textContent = 'Winner';
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
        
    }else{
        // Next Player
     nextPlayer();
    }
        
    }
    
    
});


function nextPlayer() {
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        roundScore = 0;
        
        document.getElementById('current--0').textContent = '0';
        document.getElementById('current--1').textContent = '0';
        
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
    
      
}


document.querySelector('.btn--new').addEventListener('click', init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winningScore = 100;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';


    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    
    document.querySelector('#name--0').textContent = 'Player 1';
    
    document.querySelector('#name--1').textContent = 'Player 2';
    
    document.querySelector('.player--0').classList.remove('player--winner');
    
    document.querySelector('.player--1').classList.remove('player--winner');
    
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
}


/*

coding challenges 6

1. A player looses his entire score when he rolls two 6  in a row. After that it's next player turn
*/
