function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
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

for (let i = 0; i < 3; i++){
    console.log(getComputerChoice());
}
