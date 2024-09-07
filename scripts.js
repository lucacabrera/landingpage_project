let humanScore = 0;
let computerScore = 0;
let run = 1;

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    const computerChoice = document.getElementsByClassName("computerChoice");
    computerChoice[0].textContent = `Computer chose Rock`;
    return "Rock";
  } else if (computerChoice === 2) {
    const computerChoice = document.getElementsByClassName("computerChoice");
    computerChoice[0].textContent = `Computer chose Paper`;
    return "Paper";
  } else {
    const computerChoice = document.getElementsByClassName("computerChoice");
    computerChoice[0].textContent = `Computer chose Scissors`;
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    const result = document.getElementsByClassName("result");
    result[0].textContent = `Result: Tie.`;

  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    const result = document.getElementsByClassName("result");
    result[0].textContent = `Result: You win.`;

    humanScore += 1;
    const humanScoreText = document.getElementsByClassName("playerscore");
    humanScoreText[0].textContent = `Player = ${humanScore}`;
  } else {
    const result = document.getElementsByClassName("result");
    result[0].textContent = `Result: You lose.`;

    computerScore += 1;
    const computerScoreText = document.getElementsByClassName("computerscore");
    computerScoreText[0].textContent = `Computer = ${computerScore}`;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = document.getElementsByClassName("playerChoice");
  playerChoice[0].textContent = `You chose ${button.id}`;
    playRound(button.id, getComputerChoice());
  });
});

