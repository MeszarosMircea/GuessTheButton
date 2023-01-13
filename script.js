var winningButton;
var numberButtons;

//Adds the given number of buttons and picks a random number between 1 and 1000;
function incrementButtons() {
  numberButtons = parseInt(document.getElementById("numberOfButtons").value);
  if (numberButtons <= 0 || numberButtons > 1000) {
    document.getElementById("status").style.color = "black";
    document.getElementById("status").innerHTML = "Status: Please restart and write a number between 1 and 1000!";
  } else if (numberButtons == 1) {
    document.getElementById("status").style.color = "black";
    document.getElementById("status").innerHTML = "Please, increase the number! &#9757;";
  } else {
    winningButton = Math.floor(Math.random() * numberButtons);
    for (let i = 1; i <= numberButtons; ++i) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "btn btn-primary btn-lg";
      button.textContent = `Button: ${i}`;
      button.addEventListener("click", () => guessButton(i));
      document.getElementById("buttons").appendChild(button);
    }
  }
}

//Verifies if the button is winner or not
function guessButton(id) {
  if (id == winningButton) {
    document.getElementById("status").style.color = "white";
    document.getElementById("status").innerHTML = "Status: Winner! &#128512;";
  } else {
    document.getElementById("status").style.color = "black";
    document.getElementById("status").innerHTML = "Status: Loser!!! &#128554;";
  }
}

//Restarts the whole game
function restartGame() {
  location.reload();
}
