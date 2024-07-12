let humanScore = 0, computerScore = 0;
const buttons = document.querySelectorAll("button");
const dict = {
    'rock' : 2,
    'paper' : 1,
    'scissors' : 0,
};


buttons.forEach((button) => {
    button.addEventListener("click", function() {
        playRound(button.textContent.toLowerCase());})});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    document.querySelector('#cChoice').textContent=Object.keys(dict).find(key => dict[key] === choice);;
    return choice;
}


function playRound(choice){
    document.querySelector('#hChoice').textContent=choice;
    let humanChoice = dict[choice];

    let computerChoice = getComputerChoice();

    let result = humanChoice - computerChoice;

    console.log();
    switch(result){
        case 1:
        case -2:
            computerScore++;
            document.querySelector("#cScore").textContent = computerScore;
            document.querySelector('#result').textContent = "Computer win this round!";

            break;
        case 0:
            document.querySelector('#result').textContent = "It's a tie!";
            break;
        case 2:
        case -1:
            humanScore++;
            document.querySelector("#hScore").textContent = humanScore;
            document.querySelector('#result').textContent = "You win this round!";
            break;
    }
    if(humanScore === 5){
        document.querySelector('#result').textContent = "You win the game!";

    }
    else if(computerScore === 5){
        document.querySelector('#result').textContent = "Computer wins the game!";

    }
}



