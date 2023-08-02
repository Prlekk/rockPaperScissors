var playerScore = 0;
var computerScore = 0;
var roundNumber = 2;

checkScore = () => {
    if(playerScore == 5)
    {
        let winner = document.getElementById('winner');
        winner.textContent = "Player is the winner!";
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
    }else if(computerScore == 5) {
        let winner = document.getElementById('winner');
        winner.textContent = "Computer is the winner!";
        playerScore = 0;
        computerScore = 0;
        roundNumber = 1;
    }                                           
}

getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

playerSelection = (input) => {
    let player = input;
    let computer = getComputerChoice();
    let result = document.getElementById('result');
    let score = document.getElementById('score');
    let rounds = document.getElementById('round');
    let resetWinnerDiv = document.getElementById('winner').textContent = "";

    rounds.textContent = "Round " + roundNumber;
    // Compare player and computer choices
    if (computer === "Paper" && player === "rock") {
        result.textContent = "You Lose! Paper beats Rock";
        computerScore++;
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 0;
    } else if (computer === "Rock" && player === "rock") {
        result.textContent = "You Tie!";
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 2;
    } else if (computer === "Scissors" && player === "rock") {
        result.textContent = "You Win! Rock beats Scissors";
        playerScore++;
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 1;
    } else if (computer === "Paper" && player === "paper") {
        result.textContent = "You Tie!";
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 2;
    } else if (computer === "Rock" && player === "paper") {
        result.textContent = "You Win! Paper beats Rock";
        playerScore++;
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 1;
    } else if (computer === "Scissors" && player === "paper") {
        result.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 0;
    } else if (computer === "Paper" && player === "scissors") {
        result.textContent = "You Win! Scissors beats Paper";
        playerScore++;
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 1;
    } else if (computer === "Rock" && player === "scissors") {
        result.textContent = "You Lose! Rock beats Scissors";
        computerScore++;
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 0;
    } else if (computer === "Scissors" && player === "scissors") {
        result.textContent = "You Tie!";
        score.textContent = "Score is " + playerScore + "-" + computerScore;
        checkScore();
        roundNumber++
        return 2;
    }
};
