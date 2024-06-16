let yourScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};
const drawGame = () => {
  msg.innerHTML = "Draw!.PlayAgain";
  msg.style.backgroundColor = "#200e3a";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    yourScore++;
    userScorepara.innerText = yourScore;
    msg.innerHTML = `You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerHTML = `You Lose! ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
