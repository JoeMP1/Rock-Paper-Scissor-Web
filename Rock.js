let btn = document.querySelector("button");
let Rock = document.querySelector("#rock");
let Paper = document.querySelector("#paper");
let Scissor = document.querySelector("#scissor");

let body = document.body;
let div = document.createElement("div");
let choice = "";
let humanScore = 0
let ComputerScore = 0
let para = document.createElement("p");
let humanScore_display = document.createElement("h3");
let ComputerScore_display = document.createElement("h3");
let Winner = document.createElement("h2");

humanScore_display.innerText = `Human Score: ${humanScore}`;
ComputerScore_display.innerText = "Computer Score: 0";

let flag = 0;
function playRound(humanChoice, ComputerChoice){
    if(humanChoice == "SCISSOR" && ComputerChoice == "PAPER"){
        humanScore += 1;
        humanScore_display.innerText = `Human Score : ${humanScore}`;
        para.innerText = "You Won!";
    }
    else if (humanChoice == "SCISSOR" && ComputerChoice == "ROCK"){
        ComputerScore += 1;
        ComputerScore_display.innerText = `Computer Score: ${ComputerScore}`;
        para.innerText = "You Lost!";

    }
    else if (humanChoice == "ROCK" && ComputerChoice == "SCISSOR"){
        humanScore += 1;
        humanScore_display.innerText = `Human Score : ${humanScore}`;
        para.innerText = "You Won!";

    }
    else if(humanChoice == "ROCK" && ComputerChoice == "PAPER"){
        ComputerScore += 1;
        ComputerScore_display.innerText = `Computer Score: ${ComputerScore}`;
        para.innerText = "You Lost!";
    }
    else if(humanChoice == "PAPER" && ComputerChoice == "ROCK"){
        humanScore += 1;
        humanScore_display.innerText = `Human Score : ${humanScore}`;
        para.innerText = "You Won!";
    }
    else if(humanChoice == "PAPER" && ComputerChoice == "SCISSOR"){
        ComputerScore += 1;
        ComputerScore_display.innerText = `Computer Score: ${ComputerScore}`;
        para.innerText = "You Lost!";
    }
    else if(humanChoice == ComputerChoice){
        para.innerText = "Its a tie!";
    }

    if(ComputerScore == 5 && flag == 0){
        Winner.innerText = "Computer WON!!! (loser)";
        flag = 1;
    }
    else if(humanScore == 5 && flag == 0){
        Winner.innerText = "Human WON!!!! {good}";
        flag = 1;
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


Rock.addEventListener('click',function() {
    choice = "ROCK";
    playRound(choice, getComputerChoice());
});

Paper.addEventListener('click', function(){
    choice = "PAPER";
    playRound(choice, getComputerChoice());

});

Scissor.addEventListener('click', function(){
    choice = "SCISSOR";
    playRound(choice, getComputerChoice());

})

div.append(para, humanScore_display, ComputerScore_display, Winner);
body.append(div);



