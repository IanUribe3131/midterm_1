const gameBoard = document.getElementById('game-board');
const choiceButtons = document.querySelectorAll('.choice');
const scoreDisplay = document.getElementById('score');
const rulesButton = document.getElementById('rules-btn');
const resultDisplay = document.getElementById('results');

let score = 0;

const choices = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock"
];

if(rulesButton) {
    new bootstrap.Popover(rulesButton);
}

function playGame(userChoice){

  const computerChoice=choices[Math.floor(Math.random() * choices.length)];

  showResults(userChoice, computerChoice);
}

