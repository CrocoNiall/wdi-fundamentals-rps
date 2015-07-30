////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function playTo() {
    console.log("How many points would you like to play to?")
    return prompt();
}


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (playerMove == computerMove) {
        
        winner = 'tie';
        
    } else if ((playerMove =='rock' && computerMove == 'scissors') ||
               (playerMove =='paper' && computerMove == 'rock') ||
               (playerMove =='scissors' && computerMove == 'paper')) {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors" + '\n');
    var maxPoints = playTo();
    
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < maxPoints) && (computerWins < maxPoints)) {
        
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        
        if (getWinner(playerMove, computerMove) == 'player') {
            console.log('Player chose - ' + playerMove + '\n' + 'Computer chose ' + computerMove);
            playerWins += 1;
            
        }
        if (getWinner(playerMove, computerMove) == 'computer') {
            console.log('Player chose - ' + playerMove + '\n' + 'Computer chose - ' + computerMove);
            computerWins += 1;
            
        }
        if (getWinner(playerMove, computerMove) == 'tie') {
            console.log('Player chose - ' + playerMove + '\n' + 'Computer chose - ' + computerMove);
            
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

playToFive();