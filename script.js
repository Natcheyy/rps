/* 
Rock Paper Scissors

Played against computer who picks rock,paper, scissors

Could make array: ["rock","paper","scissors"]
then pick a random index, with Math.random().

For the user it can be a prompt, if the prompt equals rock, then it displays a result

Rock > Scissors, Scissors > Paper, Paper > Rock, could be switch statement maybe

Lets make a function to grab the random computer choice
And a function to take the human choice from a prompt
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const rpsChoices = ["rock", "paper", "scissors"];
    //length of array is 3, Math.random() gives us a random number from 0 to 1.
    //So we multiply that number by the length of the array, so 3. 
    //Example would be 0.2 * 3 = 3.2. But we need to round down
    //So Math.floor() does that to nearest integer
    let randomIndex = Math.floor(Math.random() * rpsChoices.length);
    //Then we return the element at that random index, so rock, paper, or scissors
    return rpsChoices[randomIndex];
}

function getHumanChoice(){
    //make array of choices so user does not enter random string
    const validChoices = [`rock`, `paper`, `scissors`];
    let humanChoice;
    //have not learned yet but basially
    //prompt the user over and over, while....
    do {
        humanChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    //the validChoices array does NOT include the humanChoice
    while(!validChoices.includes(humanChoice));

    return humanChoice;
}

function whoWon(getHumanChoice, getComputerChoice){
    switch(getHumanChoice.toLowerCase()){
        case `rock`:
            if(getComputerChoice === `rock`){
                console.log(`You tied!`)
            }
            else if(getComputerChoice === `paper`){
                console.log(`Computer wins!`);
                computerScore++
            }
            else if(getComputerChoice === `scissors`){
                console.log(`Human wins!`);
                humanScore++
            }
            break;
        case `paper`:
            if(getComputerChoice === `rock`){
                console.log(`Human wins!`)
                humanScore++;
            }
            else if(getComputerChoice === `paper`){
                console.log(`You tied!`);
            }
            else if(getComputerChoice === `scissors`){
                console.log(`Computer wins!`);
                computerScore++;
            }
            break;
        case `scissors`:
            if(getComputerChoice === `rock`){
                console.log(`Computer wins!`)
                computerScore++;
            }
            else if(getComputerChoice === `paper`){
                console.log(`Human wins!`);
                humanScore++;
            }
            else if(getComputerChoice === `scissors`){
                console.log(`You tied!`);
            }
            break;

    }
}   


function playRound(humanChoice, computerChoice){
    console.log(`Human picked: ${humanChoice}, Computer picked: ${computerChoice}`);
    whoWon(humanChoice, computerChoice);
    console.log(`The score is... Human: ${humanScore}  Computer: ${computerScore}`);
}

function playGame(){

    

    let numberOfRounds = 1;
    while (numberOfRounds <= 5){
        console.log(`It is round: ${numberOfRounds}`);
        playRound(getHumanChoice(), getComputerChoice());
        numberOfRounds++;
    }

}

playGame();

