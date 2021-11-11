// const startGameBtn = document.getElementById("start-game-btn");
// // GLOBAL VARIABLES
// const ROCK = "ROCK";
// const PAPER = "PAPER";
// const SCISSORS = "SCISSORS";
// const DEFAULT_USER_CHOICE = ROCK;
// const RESULT_DRAW = "DRAW";
// const RESULT_PLAYER_WINS = "PLAYER😎";
// const RESULT_COMPUTER_WINS = "COMPUTER💻";

// let gameIsRunning = false;

// const getUserChoice = function () {
//   const selection = prompt(
//     `${ROCK}, ${PAPER} or ${SCISSORS}?`,
//     ""
//   ).toUpperCase();
//   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
//     alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
//     return;
//   }
//   return selection;
// };

// const getComChoice = function () {
//   const randomValue = Math.random();
//   if (randomValue <= 0.34) {
//     return ROCK;
//   } else if (randomValue <= 0.67) {
//     return PAPER;
//   } else {
//     return SCISSORS;
//   }
// };

// // const getWinner = (cChoice, pChoice) =>
// //   cChoice === pChoice
// //     ? RESULT_DRAW
// //     : (cChoice === ROCK && pChoice === PAPER) ||
// //       (cChoice === PAPER && pChoice === SCISSORS) ||
// //       (cChoice === SCISSORS && pChoice === ROCK)
// //     ? RESULT_PLAYER_WINS
// //     : RESULT_COMPUTER_WINS;

// const getWinner = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

// startGameBtn.addEventListener("click", function () {
//   if (gameIsRunning) {
//     return;
//   }
//   gameIsRunning = true;
//   console.log("Game is starting...");
//   const playerChoice = getUserChoice();
//   const comChoice = getComChoice();
//   let winner;
//   if (playerChoice) {
//     winner = getWinner(comChoice, playerChoice);
//   } else {
//     winner = getWinner(comChoice);
//   }
//   let message = `You picked ${
//     playerChoice ? playerChoice : DEFAULT_USER_CHOICE
//   }, computer picked ${comChoice}, therefore you `;
//   if (winner === RESULT_DRAW) {
//     message = message + "had a draw.🙁";
//   } else if (winner === RESULT_PLAYER_WINS) {
//     message = message + "won.🏆";
//   } else {
//     message = message + "lost.😌";
//   }
//   alert(message);
//   gameIsRunning = false;

//   //   console.log(
//   //     `player choice is ${playerChoice} vs computer choice is ${comChoice} and winner is ${winner}🏆`
//   //   );
// });

// not for game logic

// const sumUp = (numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum = sum + num;
//   }
//   return sum;
// };

// console.log(sumUp([1, 5, 10, -3, 6, 10, 5, -6, -6]));
// rest parameter
// const sumUp = (a, b, ...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum = sum + num;
//   }
//   return sum;
// };

// console.log(sumUp(1, 5, 10, -3, 6, 10, 5, -6, -6));
// new method arguments

// const subUp = function (numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum = sum + num;
//   }
//   return sum;
// };

// console.log(subUp([1, 5, 10, -3, 6, 10, 5, -6, -6]));

// const subUp = function () {
//   let sum = 0;
//   for (const num of arguments) {
//     sum = sum + num;
//   }
//   return sum;
// };

// console.log(subUp(1, 5, 10, -3, 6, 10, 5, -6, -6));

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     // don't use that
//     sum -= num;
//   }
//   resultHandler(sum, 'The result after adding all numbers is');
// };

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combine(
  showResult.bind(this, "The result after adding all numbers is:"),
  "ADD",
  1,
  5,
  "fdsa",
  -3
);
combine(
  showResult.bind(this, "The result after adding all numbers is:"),
  "ADD",
  1,
  5,
  10
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is:"),
  "SUBTRACT",
  1,
  10,
  15
);

// const combine = (resultHandler, operation, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };

//   let sum = 0;
//   for (const num of numbers) {
//     if (operation === "ADD") {
//       sum += validateNumber(num);
//     } else {
//       sum -= validateNumber(num);
//     }
//   }
//   resultHandler(sum, "The result after adding all numbers is:");
// };

// // const subtractUp = function (resultHandler, ...numbers) {
// //   let sum = 0;
// //   for (const num of numbers) {
// //     // don't use that
// //     sum -= num;
// //   }
// //   resultHandler(sum, "The result after adding all numbers is:");
// // };

// const showResult = (result, messageText) => {
//   alert(messageText + " " + result);
// };

// combine(showResult.bind(), "ADD", 1, 5, "fdsa", -3, 6, 10);
// combine(showResult, "ADD", 1, 5, 10, -3, 6, 10, 25, 88);
// combine(showResult, "SUBTRACT", 1, 10, 15, 20);
