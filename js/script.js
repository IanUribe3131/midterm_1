const gameBoard = document.getElementById('game-board');
const choiceButtons = document.querySelectorAll('.choice');
const scoreDisplay = document.getElementById('score');
const rulesButton = document.getElementById('rules-btn');
const resultsDisplay = document.getElementById('results');
const playerPick  = document.getElementById('user-choice');
const housePick = document.getElementById('computer-choice');
const winnerText = document.getElementById('winner-text');

let score = 0;

if(rulesButton && typeof bootstrap !== 'undefined') {
    new bootstrap.Popover(rulesButton);
}

const choices = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock"
];

const rules = {
  scissors: ["paper", "lizard"], //key beats array values 
  paper: ["rock", "spock"],
  rock: ["lizard", "scissors"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
};

function renderChoice(choice){
  return `
    <button class="btn rounded-circle btn-outline-secondary ${choice} choice disabled">
      <img src="./images/icon-${choice}.svg" alt="${choice}">
    </button>
  `;
}

function updateScore(points){
  score += points;

  if(score<0){
    score=0;
  }
  scoreDisplay.textContent = score;

}


function playGame(userChoice){

  const computerChoice=choices[Math.floor(Math.random() * choices.length)];

  showResults(userChoice, computerChoice);
}

function showResults(userChoice, computerChoice){
  gameBoard.parentElement.classList.add('d-none'); //hides pentagon
  resultsDisplay.classList.remove('d-none'); //makes 1v1 layout visible

  playerPick.innerHTML = renderChoice(userChoice);
  housePick.innerHTML = renderChoice(computerChoice);

  if(userChoice === computerChoice){
    winnerText.textContent = "DRAW";
  } else if(rules[userChoice].includes(computerChoice)){
    winnerText.textContent = "YOU WIN";
    updateScore(1);
  } else {
    winnerText.textContent = "YOU LOSE";
    updateScore(-1);
  }

}

function resetGame(){
  resultsDisplay.classList.add('d-none'); //hides outcome screen
  gameBoard.parentElement.classList.remove('d-none'); //reveals pentagon again

  playerPick.innerHTML = '';
  housePick.innerHTML = '';
}

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    playGame(userChoice);

  });
});
