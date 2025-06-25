const favMovie = "Avatar";
function startGame() {
  let guess = prompt("Enter your movie name");
  while (true) {
    if (guess == "quit") {
      console.log("You quit the game");
      break;
    } else if (guess == favMovie) {
      alert("You Won!!!!!!!!");
      break;
    } else {
      guess = prompt("Wrong guess! Please try again");
    }
  }
}
