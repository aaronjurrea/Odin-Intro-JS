let humanScore = 0, computerScore = 0;

const dict = {
    'rock' : 2,
    'paper' : 1,
    'scissors' : 0,
};

playGame();


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    console.log("Computer: " + Object.keys(dict).find(key => dict[key] === choice));
    return choice;
}

function getHumanChoice(){

    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log("Human: " + choice);
    if (dict[choice] === undefined){
        console.log("That is not a correct choice");
        return;
    }   

    return dict[choice];


}

function playRound(round){
    console.log("Current round: " + round);
    let humanChoice;
    while (humanChoice === undefined){
        humanChoice = getHumanChoice();
    }

    let computerChoice = getComputerChoice();

    let result = humanChoice - computerChoice;
    console.log();
    switch(result){
        case 1:
        case -2:
            computerScore++;
            console.log("Computer won! Current score: " + humanScore + " to " + computerScore);
            break;
        case 0:
            console.log("It's a tie! Trying again");
            playRound(round);
            break;
        case 2:
        case -1:
            humanScore++;
            console.log("Human won! Current score: " + humanScore + " to " + computerScore);
            break;
    }
}

function playGame(){
    for(let i = 1; i <=5; i++){
        playRound(i);
        console.log();
    }

    console.log("Final scores: " + humanScore + " to " + computerScore);

    if(computerScore > humanScore)
        console.log("Computer won!");
    else if(computerScore === humanScore){
        console.log("It's a tie! (HOW?)");
    }
    else{
        console.log("Human won!");
    }
}



