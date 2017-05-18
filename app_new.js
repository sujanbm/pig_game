var scores, roundScore, activePlayer, gamePlaying;
// var lastDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        // 1. Random Number
        //Math.floor for eliminating the decimal values, Math.random generates random values between 0 and 1
        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);
        //2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        //3. Update the round score IF the roll number is not 1
        // if ( dice === 6 && lastDice[activePlayer] === 6 ) {
        //     //reset the Global Score to 0 and switch player
        //     scores [activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // }else if (dice !== 1){
        //     //add score
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // }else{
        //     //next player
        //     nextPlayer();
        // }
        // lastDice[activePlayer] = dice;

        if (dice1 !== 1 || dice2 !==1){
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer()
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        //Add Current Score to the Global Score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input, finalScore;
        input = document.querySelector('.final-score').value;
        if (input){
            finalScore = input;
        }else{
            finalScore = 100;
        }
        //Check if player won the game
        if (scores[activePlayer] >= finalScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //nextPlayer
            nextPlayer();
        }
    }
});

function nextPlayer(){

    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    scores = [0,0];
    // lastDice = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    //hide the dice
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


