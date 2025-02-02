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
let numberOfRounds = 1;

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

function whoWon(humanChoice, getComputerChoice){
    let whoWinsMessage = ``;
    switch(humanChoice){
        case `rock`:
            if(getComputerChoice === `rock`){
                whoWinsMessage = `You tied!`
            }
            else if(getComputerChoice === `paper`){
                whoWinsMessage = `Computer wins!`
                computerScore++
            }
            else if(getComputerChoice === `scissors`){
                whoWinsMessage = `You win!`
                humanScore++
            }
            break;
        case `paper`:
            if(getComputerChoice === `rock`){
                whoWinsMessage = `You win!`
                humanScore++;
            }
            else if(getComputerChoice === `paper`){
                whoWinsMessage = `You tied!`
            }
            else if(getComputerChoice === `scissors`){
                whoWinsMessage = `Computer wins!`
                computerScore++;
            }
            break;
        case `scissors`:
            if(getComputerChoice === `rock`){
                whoWinsMessage = `Computer wins!`
                computerScore++;
            }
            else if(getComputerChoice === `paper`){
                whoWinsMessage = `You win!`
                humanScore++;
            }
            else if(getComputerChoice === `scissors`){
                resultText.textContent = `You tied!`
            }
            break;

    }
    return whoWinsMessage;
}   

//whoWon was not returning anything before, so I had it return the message of who won
//Then i put that message in the resultText p element in my html
function playRound(humanChoice, computerChoice){
    const whoWinsMessage = whoWon(humanChoice, computerChoice);
    resultText.textContent = `Human picked: ${humanChoice}, Computer picked: ${computerChoice}\n${whoWinsMessage}\nThe score is... Human: ${humanScore}  Computer: ${computerScore}`;
    
}

//but they were all on one line. So in order to have the messages appear on new lines
//I used \n. But you need to set the white-space property on the resultText element to pre-line in CSS.
//This preserves the newline characters in text content

resultText.style.whiteSpace = "pre-line";


const roundText = document.querySelector("#roundText");
function playGame(){



    //select the selectionContainer div element
    const selectionContainer = document.querySelector(".selectionContainer");
    //creating ONE event listener and applying it to all buttons, more effecient the looping through all the buttons and creating seperate event listeners for each
    const resultText = document.querySelector("#resultText");
    selectionContainer.addEventListener(`click`, (event) => {

        if (numberOfRounds > 5){
            console.log("GAME OVER");
            return;
        }

        roundText.textContent = `It is round: ${numberOfRounds}`;
        


        //for each click event, grab the target, so <button id="rockButton">
        let target = event.target;
        //delete getHumanChoice() function
        let humanChoice;
        //for each target.id so button id="paperButton"
        switch(target.id){
            case `rockButton`:
                //set the humanChoice to that string
                humanChoice = `rock`;
        
                //then playRound for the choices
                playRound(humanChoice, getComputerChoice());
                break;
            case `paperButton`:
                humanChoice = `paper`;

                playRound(humanChoice, getComputerChoice());
                break;
            case `scissorsButton`:
                humanChoice = `scissors`;
                playRound(humanChoice, getComputerChoice());
                break;
        }
        numberOfRounds++;       
    });
    

    
}

playGame();

