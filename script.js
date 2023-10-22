function getComputerChoice() {
    const compChoices = ["Rock", "Paper", "Scissors"]

    return compChoices[Math.floor(Math.random() * 3)]
}

var scoreUser = 0;
var scoreBot = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection === "rock") {
        if(computerSelection === "Rock") {
            return "Draw!"
        } else if (computerSelection === "Paper") {
            scoreBot += 1;
            return "You Lose! Paper beats Rock"
        } else {
            scoreUser += 1;
            return "You Win! Rock beats Scissors"
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "Rock") {
            scoreUser += 1;
            return "You Win! Paper beats Rock"
        } else if (computerSelection === "Paper") {
            return "Draw!"
        } else {
            scoreBot += 1;
            return "You Lose! Scissors beat Paper"
        }
    } else {
        if(computerSelection === "Rock") {
            scoreBot += 1;
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === "Paper") {
            scoreUser += 1;
            return "You Win! Scissors beat Paper"
        } else {
            return "Draw!"
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('button')
    const result = document.querySelector('#result')
    const displayScoreUser = document.querySelector('#scoreUser')
    const displayScoreBot = document.querySelector('#scoreBot')
    const winner = document.querySelector('#winner')
    
    buttons.forEach((button) => {
        var userChoice; 
        if (button.id === 'btnRock'){
            userChoice = 'rock'
        } else if (button.id === 'btnPaper') {
            userChoice = 'paper'
        } else {
            userChoice = 'scissors'
        }

     button.addEventListener('click', () => {
          result.textContent = playRound(userChoice, getComputerChoice())
          console.log(scoreUser)
          displayScoreUser.textContent = `${scoreUser}`
          displayScoreBot.textContent = `${scoreBot}`

          if (scoreUser === 5){
            winner.textContent = "Winner is User!"
          } else if(scoreBot === 5) {
            winner.textContent = "Winner is Computer!"
          }
     })

    })

})

