/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.dice').style.display = 'none';
 var scores =[0,0];
 var roundScore = 0;
 var activePlayer = 0;
 var dice; 
 var lastDice;
 document.querySelector('.btn-roll').addEventListener('click',function()
{
    dice = Math.floor(Math.random() * 6) + 1;
    var diceRo = document.querySelector('.dice');
    diceRo.style.display = 'block';
    diceRo.src = 'dice-'+ dice + '.png';
    if(dice == 6 && lastDice == 6)
    {
        scores[activePlayer] = 0;
        document.querySelector('#score-' +activePlayer).textContent = 0;
    } 
    else if(dice !== 1)
    {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else
    {
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    }
    lastDice = dice;

});
document.querySelector('.btn-hold').addEventListener('click',function()
{
        scores[activePlayer] += roundScore;
        document.getElementById('current-' + activePlayer).textContent = '0';
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-' +activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('WINNER');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           }
       else{
             activePlayer ==0 ? activePlayer =1 : activePlayer = 0;
             roundScore = 0;
             document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active');
       }
});

document.querySelector('.btn-new').addEventListener('click',function()
{
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.dice').style.display = 'none';
});


