/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
*/

/*
TOOLS
- const / let
- input
- button
- eventListener()
- for()
- if / else
- DOM Manipulation methods and properties
*/

const mailList = ["mattiavolpe@gmail.com", "lucapiacentini@gmail.com", "alexandrofioretti@gmail.com", "paolozampa@gmail.com", "lorenzocatalano@gmail.com", "fabiopacifici@gmail.com", "fabrizioguariglia@gmail.com", "gianlucasciacca@gmail.com", "donatoriccio@gmail.com", "giulianogostinfini@gmail.com", "francescominutella@gmail.com", "robertonesta@gmail.com", "nicolafaedo@gmail.com", "riccardocastiglione@gmail.com"];

const formElement = document.querySelector("form");

const mailElement = document.querySelector("input");

const outputElement = document.createElement("div");

outputElement.style.marginTop = "2rem";
outputElement.style.fontSize = "1.125rem";
outputElement.style.wordBreak = "break-all";

formElement.insertAdjacentElement('afterend', outputElement);

formElement.addEventListener("submit", function(e) {

  e.preventDefault();

  let authorizationChecker = false;

  if (mailElement.value === "") {
    outputElement.innerHTML = "Inserisci una mail";
  }
  else {

    for (let i = 0; i < mailList.length; i++) {
      if (mailList[i] === mailElement.value) {
        authorizationChecker = true;
      }
    }

    if (authorizationChecker) {
      outputElement.innerHTML = `BENVENUTO/A ${mailElement.value}`;
    } else {
      outputElement.innerHTML = `ATTENZIONE: ${mailElement.value}: non è una e-mail registrata`;
    }

  }

});