var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const stone_div = document.getElementById("stone");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
function getCompChoice() {
  const choices = ["stone", "paper", "scissor"];
  const randomNumber = Math.round(2 * Math.random());
  return choices[randomNumber];
}
function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = userChoice + " Beats " + compChoice + ". You Win!";
}
function lose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = compChoice + " Beats " + userChoice + ". You Lose!";
}
function tie(userChoice, compChoice) {
  result_div.innerHTML = userChoice + " Draws " + compChoice + ". You Tie!";
}
function game(userChoice) {
  const compChoice = getCompChoice();
  console.log(userChoice);
  console.log(compChoice);
  switch (userChoice + compChoice) {
    case "stonestone":
    case "paperpaper":
    case "scissorscissor":
      console.log("Users Tie");
      tie(userChoice, compChoice);
      break;
    case "stonepaper":
    case "paperscissor":
    case "scissorstone":
      console.log("Users Lose");
      lose(userChoice, compChoice);
      break;
    case "stonescissor":
    case "paperstone":
    case "scissorpaper":
      console.log("Users Win");
      win(userChoice, compChoice);
      break;
  }
}
function main() {
  stone_div.addEventListener("click", function() {
    console.log("Hey! You clicked on Stone");
    game("stone");
  });
  paper_div.addEventListener("click", function() {
    console.log("Hey! You clicked on Paper");
    game("paper");
  });
  scissor_div.addEventListener("click", function() {
    console.log("Hey! You clicked on Scissor");
    game("scissor");
  });
}
main();
