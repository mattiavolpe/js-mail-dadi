/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/* 
TOOLS
- const / let
- Math.floor()
- Math.random()
- if / else
- DOM Manipulation methods and properties
 */

const cardElement = document.querySelector(".card");

const btnElement = document.querySelector("button");

const outputElement = document.createElement("div");
outputElement.style.marginBottom = "2rem";
outputElement.style.fontSize = "1.125rem";
outputElement.style.lineHeight = "50px";

btnElement.addEventListener("click", function() {

  cardElement.style.backgroundColor = "#00000033";

  const userRandom = Math.floor(Math.random() * 6) + 1;
  const pcRandom = Math.floor(Math.random() * 6) + 1;

  outputElement.innerHTML = `Punteggio Utente:<br><strong>${userRandom}</strong><br>
  Punteggio PC:<br><strong>${pcRandom}</strong><br>`;

  if (userRandom > pcRandom) {
    outputElement.innerHTML += "<strong>COMPLIMENTI<br>HAI VINTO</strong>";
    cardElement.style.backgroundColor = "#00ff0033";
  } else if (pcRandom > userRandom) {
    outputElement.innerHTML += "<strong>RITENTA<br>HAI PERSO</strong>";
    cardElement.style.backgroundColor = "#ff000033";
  } else {
    outputElement.innerHTML += "<strong>PAREGGIO<br>PROVA ANCORA</ strong>";
    cardElement.style.backgroundColor = "#ffff0033";
  }

  cardElement.prepend(outputElement);

});