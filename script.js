function getComputerChoice() {
    const compChoices = ["Rock", "Paper", "Scissors"]

    return compChoices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === "rock") {
        if(computerSelection === "Rock") {
            return "Tie!"
        } else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock"
        } else {
            return "You Win! Rock beats Scissors"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "Rock") {
            return "You Win! Paper beats Rock"
        } else if (computerSelection === "Paper") {
            return "Tie!"
        } else {
            return "You Lose! Scissors beat Paper"
        }
    } else {
        if(computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beat Paper"
        } else {
            return "Tie!"
        }
    }
}

let playerSelection;
for (let i = 0; i < 5; i++){
    playerSelection = prompt("What is your choice? Rock Paper Scissors!")
    const computerSelection = getComputerChoice()
    console.log(`Round ${i+1}: ${playRound(playerSelection, computerSelection)}`)
}


