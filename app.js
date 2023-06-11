function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    let choice;
    switch(num){
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

function play(playerSelection, computerSelection){
    if (playerSelection.localeCompare("rock", undefined, {sensitivity: 'base'}) == 0){
        if (computerSelection == "Rock"){
            console.log("Tie!");
            return 2;
        }
        if (computerSelection == "Paper"){
            console.log("You Lose! Paper beats Rock");
            return 0;
        }
        if (computerSelection == "Scissors"){
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    }
    if (playerSelection.localeCompare("paper", undefined, {sensitivity: 'base'}) == 0){
        if (computerSelection == "Paper"){
            console.log("Tie!");
            return 2;
        }
        if (computerSelection == "Scissors"){
            console.log("You Lose! Scissors beats Paper");
            return 0;
        }
        if (computerSelection == "Rock"){
            console.log("You Win! Paper beats Rock");
            return 1;
        }
    }
    if (playerSelection.localeCompare("scissors", undefined, {sensitivity: 'base'}) == 0){
        if (computerSelection == "Scissors"){
            console.log("Tie!");
            return 2;
        }
        if (computerSelection == "Rock"){
            console.log("You Lose! Rock beats Scissors");
            return 0;
        }
        if (computerSelection == "Paper"){
            console.log("You Win! Scissors beats Paper");
            return 1;
        }
    }
}
let pWins = 0;
let cWins = 0;
let tieCount = 0;
let buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let playerSelection = btn.id;
        let computerSelection = getComputerChoice();
        const pScore = document.querySelector('#pNum');
        const cScore = document.querySelector('#cNum');
        const tieScore = document.querySelector('#tieNum');
        const message = document.querySelector('.Message');
        message.textContent = null;
        let result = play(playerSelection, computerSelection);
        if (result == 1){
            pWins++;
            pScore.textContent = pWins;
        }
        if (result == 0){
            cWins++;
            cScore.textContent = cWins;
        }
        if (result == 2){
            tieCount++;
            tieScore.textContent = tieCount;
        }
        if (pWins == 5 || cWins == 5){
            if (pWins == 5){
               message.textContent = "Congratulations! You Won!";
            }
            else {
                message.textContent = "You Lost:( Try Again!";
            }
            pWins = 0;
            cWins = 0;
            tieCount = 0;
            pScore.textContent = pWins;
            cScore.textContent = cWins;
            tieScore.textContent = tieCount;
        }
    });
});        
