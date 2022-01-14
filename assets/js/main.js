const startGameBtn = document.getElementById("start-game-btn");
// GLOBAL VARIABLES
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER😎";
const RESULT_COMPUTER_WINS = "COMPUTER💻";

let gameIsRunning = false;

const getUserChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComChoice = function () {
  const randomValue = Math.random();
  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue <= 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getUserChoice();
  const comChoice = getComChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(comChoice, playerChoice);
  } else {
    winner = getWinner(comChoice);
  }
  let message = `You picked ${
    playerChoice ? playerChoice : DEFAULT_USER_CHOICE
  }, computer picked ${comChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw.🙁";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won.🏆";
  } else {
    message = message + "lost.😌";
  }
  alert(message);
  gameIsRunning = false;

  console.log(
    `player choice is ${playerChoice} vs computer choice is ${comChoice} and winner is ${winner}🏆`
  );
});
