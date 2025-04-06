function getComputerChoice() {
    const randomNumber = Math.random()

if (randomNumber < 0.33) {
    return "Rock";
} else if (randomNumber < 0.66) {
    return "Paper";
} else {
    return "Scissors";
}
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper or Scissors");
    userInput = userInput.toLowerCase();
    const capitalizedInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    return capitalizedInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;  
    
    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    } 

    for (let i=0; i<5; i++) {
        console.log(`\nRound ${i + 1}:`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Human choice:", humanSelection);
    console.log("Computer choice:", computerSelection);

    playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("\nYou win the game!");
    } else if (humanScore < computerScore) {
        console.log("\nYou lose the game!");
    } else {
        console.log("\nIt's a tie!");
    }
    console.log(`Final Scores -> You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();



