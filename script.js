let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function randomWeapon(weapons) {
    const weaponChoices = Object.keys(weapons);
    return weaponChoices[Math.floor(Math.random()*weaponChoices.length)];
}

function writeChoices(outcome) {
    const playerScoreP = document.querySelector("#playerScore");
    playerScoreP.textContent = `Player score: ${playerScore}`;

    const computerScoreP = document.querySelector("#computerScore");
    computerScoreP.textContent = `Computer score: ${computerScore}`;
    
    const drawScoreP = document.querySelector("#drawScore");
    drawScoreP.textContent = `Draw: ${drawScore}`;
    
    const playerchoiceP = document.querySelector("#playerChoice");
    playerchoiceP.textContent = `Player chooses ${playerChoice}`;
    
    const computerchoiceP = document.querySelector("#computerChoice");
    computerchoiceP.textContent = `Computer chooses ${computerChoice}`;
    
    const resultsP = document.querySelector("#results"); 

    if (outcome == 'draw') {
        resultsP.textContent = `Draw!`;
    } else if (outcome == 'player') {
        resultsP.textContent = `Player wins!`;
    } else {
        resultsP.textContent = `Computer wins!`;
    }
    return;
}

function determineWinner (weapons,computerChoice,playerChoice) {
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
    const weapons = {
        rock: ['scissors'],
        paper: ['rock'],
        scissors: ['paper']
    }
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerChoice = button.id;
                computerChoice = randomWeapon(weapons);
                determineWinner(weapons,playerChoice,computerChoice);
            });
    });
}

game(); 