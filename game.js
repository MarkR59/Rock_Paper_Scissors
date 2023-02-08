function getComputerChoice(){
    num = Math.floor(Math.random() * 3) + 1;
    if (num == 1){
        return "Rock";
    }
    else if (num == 2){
        return "Paper";
    }
    else if (num == 3){
        return "Scissors";
    }
}

//0 means loss
//1 means win
//2 means draw
function play(playerSelection, computerSelection){
    compare1 = playerSelection.toUpperCase();
    compare2 = computerSelection.toUpperCase();

    if (compare1 == "ROCK"){
        if (compare2 == "PAPER"){
            console.log("You Lose! Paper beats Rock");
            return 0;
        }
        else if (compare2 == "SCISSORS"){
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
        else {
            console.log("It's a draw!");
            return 2;
        }
    }

    if (compare1 == "PAPER"){
        if (compare2 == "ROCK"){
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else if (compare2 == "SCISSORS"){
            console.log("You Lose! Scissors beats Paper");
            return 0;
        }
        else {
            console.log("It's a draw!");
            return 2;
        }
    }

    if (compare1 == "SCISSORS"){
        if (compare2 == "PAPER"){
            console.log("You Win! Scissors beats Paper");
            return 1;
        }
        else if (compare2 == "ROCK"){
            console.log("You Lose! Rock beats Scissors");
            return 0;
        }
        else {
            console.log("It's a draw!")
            return 2;
        }
    }
}

//simulates a game of 5 rounds
function game(){
    countPlayer = 0;
    countComputer = 0;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter selection");
        computerSelection = getComputerChoice();
        result = play(playerSelection, computerSelection);
        while (result == 2){
            playerSelection = prompt("Enter new selection");
            computerSelection = getComputerChoice();
            result = play(playerSelection, computerSelection);
        }
        if (result == 1){
            countPlayer++;
        }
        else if (result == 0){
            countComputer++;
        }
    }
    if (countPlayer > countComputer){
        console.log("You Win!");
    }
    else {
        console.log("You Lose!");
    }
}

game();

