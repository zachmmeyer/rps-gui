function main() {
    const weapons = {
        rock: ['scissors'],
        paper: ['rock'],
        scissors: ['paper']
        //lizard: ['spock', 'paper'],
        //pock: ['scissors', 'rock'],
        //nuke: ['rock', 'paper', 'scissors', 'lizard', 'spock']
    }
        
    function randomWeapon() {
        const weaponChoices = Object.keys(weapons);
        return weaponChoices[Math.floor(Math.random()*weaponChoices.length)];
    }
    
    let playerChoice;
    let computerChoice;
    const drawResult = `Draw!`;
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    function writeChoices(outcome) {

        const playerScoreP = document.querySelector("#playerScore");
        const computerScoreP = document.querySelector("#computerScore");
        const drawScoreP = document.querySelector("#drawScore");

        const playerchoiceP = document.querySelector("#playerChoice");
        const computerchoiceP = document.querySelector("#computerChoice");
        const resultsP = document.querySelector("#results");

        const playerChoicePrintOut = `Player chooses ${playerChoice}`;
        const computerChoicePrintOut = `Computer chooses ${computerChoice}`;
        playerchoiceP.textContent = playerChoicePrintOut;
        computerchoiceP.textContent = computerChoicePrintOut;

        playerScoreP.textContent = `Player score: ${playerScore}`;
        computerScoreP.textContent = `Computer score: ${computerScore}`;
        drawScoreP.textContent = `Draw: ${drawScore}`;
        if (outcome == 'draw') {
            resultsP.textContent = `Draw!`;
        } else if (outcome == 'player') {
            resultsP.textContent = `Player wins!`;
        } else {
            resultsP.textContent = `Computer wins!`;
        }
        return;
    }
        
    function determineWinner (){
        if (computerChoice === playerChoice) {
            drawScore++;
            writeChoices('draw');
            return;
        } else {
            if (weapons[computerChoice].includes(playerChoice)) {
                computerScore++;
                writeChoices('computer');
            } else {
                playerScore++;
                writeChoices('player');
            }
            return;
        }
    }
    function game() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerChoice = button.id;
                computerChoice = randomWeapon();
                determineWinner();
            });
        });
    }
    game();
    
}

main();

/*
function playerPrompt() {
            let prompt = window.prompt("Enter 'rock','paper' or 'scissors':");
            if (prompt === null) {
                return;
            }
            while (!Object.keys(weapons).includes(prompt)) {
                prompt = window.prompt("Please enter 'rock', 'paper' or 'scissors' only:");
                if (prompt === null) {
                    return;
                }
            }
            return prompt;
        }



*/