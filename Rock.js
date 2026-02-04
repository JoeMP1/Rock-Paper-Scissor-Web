

let humanScore = 0
let ComputerScore = 0

function playRound(humanChoice, ComputerChoice){
    if(humanChoice == "SCISSOR" && ComputerChoice == "PAPER"){
        humanScore += 1;
        console.log("You Won!")
    }
    else if (humanChoice == "SCISSOR" && ComputerChoice == "ROCK"){
        ComputerScore += 1;
        console.log("You Lost!")

    }
    else if (humanChoice == "ROCK" && ComputerChoice == "SCISSOR"){
        humanScore += 1;
        console.log("You Won!")

    }
    else if(humanChoice == "ROCK" && ComputerChoice == "PAPER"){
        ComputerScore += 1;
        console.log("You Lost!")
    }
    else if(humanChoice == "PAPER" && ComputerChoice == "ROCK"){
        humanScore += 1;
        console.log("You Won!")

    }
    else if(humanChoice == "PAPER" && ComputerChoice == "SCISSOR"){
        ComputerScore += 1;
        console.log("You Lost!")
    }
    else if(humanChoice == ComputerChoice){
        console.log("Its a tie")
    }
}

function getComputerChoice(){
    let ran = Math.random();
    if (ran < 0.3){
        return "ROCK"
    }
    else if(ran >= 0.3 && ran < 0.6){
        return "PAPER"
    }
    else if (ran >= 0.6){
        return "SCISSOR"
    }
}

function getHumanChoice(){
    let user = prompt("Enter (ROCK), (PAPER) or (SCISSOR): ");
    return user;
}

function playGame(){

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    console.log("You got: " + humanScore + " points");
    console.log("Computer got: " + ComputerScore + " points");
}

playGame()

