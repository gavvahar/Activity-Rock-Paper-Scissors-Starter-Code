let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number
let rps = ["rock", "paper", "scissors"];

//Conditional logic goes here to determine the computers selection
switch(true)
{
    case (computerSelection <= 0.34):
        computerSelection = rps[0];
        break;
    case (computerSelection <= 0.67):
        computerSelection = rps[1];
        break;
    default:
        computerSelection = rps[2];
}
//<--Code goes here-->

//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
    
}
console.log(compare(userSelection,computerSelection)); //call the function to compare and display result