getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3)
    if(num == 0)
    {
        return "Rock"
    }
    if(num == 1)
    {
        return "Paper"
    }
    return "Scissors"
}

playerSelection = () => {
    let player = prompt()
    player = player.toLowerCase()
    let computer = getComputerChoice()
    //Computer is rock
    if(computer === "Paper" && player === "rock")
    {
        console.log("You Lose! Paper beats Rock")
        return 0
    }
    if(computer == "Rock" && player === "rock")
    {
        console.log("You Tie!")
        return 2
    }
    if(computer === "Scissors" && player === "rock")
    {
        console.log("You Win! Scissors lose to Rock")
        return 1
    }
    //Computer is paper
    if(computer === "Paper" && player === "paper")
    {
        console.log("You Tie!")
        return 2
    }
    if(computer == "Rock" && player === "paper")
    {
        console.log("You Win! Rock lose to Paper")
        return 1
    }
    if(computer === "Scissors" && player === "paper")
    {
        console.log("You Lose! Scissors beats Paper")
        return 0
    }
    //Computer is scissors
    if(computer === "Paper" && player === "scissors")
    {
        console.log("You Win! Paper lose to Scissors")
        return 1
    }
    if(computer == "Rock" && player === "scissors")
    {
        console.log("You Lose! Rock beats scissors")
        return 0
    }
    if(computer === "Scissors" && player === "scissors")
    {
        console.log("You Tie!")
        return 2
    }
}   

game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        let resultOfRound = playerSelection()
        if(resultOfRound == 1)
        {
            playerScore++
        }
        if(resultOfRound == 0)
        {
            computerScore++
        }                          
    }
    let result
    let winner
    if(playerScore == computerScore)
    {
        result = "Result: " + playerScore + "-" + computerScore
        winner = "No one wins!"
    }
    if(playerScore > computerScore)
    {
        result = "Result: " + playerScore + "-" + computerScore
        winner = "Player wins!"
    }
    if(playerScore < computerScore)
    {
        result = "Result: " + playerScore + "-" + computerScore
        winner = "Computer wins"
    }
    console.log(result)
    console.log(winner)
}

game()
