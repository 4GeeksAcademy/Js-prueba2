let randomNumber = Math.floor(Math.random() * 101);

function makeAGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const messageElement = document.getElementById("message");

  //Validación
  if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
    messageElement.textContent = "Por favor, introduce un número entre 0 y 100";
    return;
  }
  if (randomNumber === userGuess) {
    alert("Bien hecho! Has adivinado el número");
    randomNumber = Math.floor(Math.random() * 101);
    messageElement.textContent = "";
    document.getElementById("guessInput").value = "";
  } else if (userGuess < randomNumber) {
    messageElement.textContent = "El número buscado es mayor.";
  } else {
    messageElement.textContent = "El número buscado es menor.";
  }
}
