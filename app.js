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

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let on = true;

    while (on){
        let playerSelection = prompt("Choose your weapon");
        let computerSelection = getComputerChoice();

        let result = play(playerSelection, computerSelection);

        if (result == 1){
            playerWins++;
        }
        else if (result == 0){
            computerWins++;
        }
        else {
            ties++;
        }

        if (playerWins == 3){
            on = false;
            console.log("You Win! Congratulations!");
        }
        if (computerWins == 3){
            on = false;
            console.log("You Lose! Try Again!");
        }
    }
}

game();
