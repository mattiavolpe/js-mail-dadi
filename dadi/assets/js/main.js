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

const userRandom = Math.floor(Math.random() * 6) + 1;
const pcRandom = Math.floor(Math.random() * 6) + 1;

const outputElement = document.createElement("div");

outputElement.innerHTML = `Punteggio Utente: ${userRandom}<br>
Punteggio PC: ${pcRandom}<br>`;

if (userRandom > pcRandom) {
  outputElement.innerHTML += "VINCE L'UTENTE";
} else if (pcRandom > userRandom) {
  outputElement.innerHTML += "VINCE IL PC";
} else {
  outputElement.innerHTML += "PAREGGIO";
}

document.body.append(outputElement);