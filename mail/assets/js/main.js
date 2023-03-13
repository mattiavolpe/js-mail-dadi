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

formElement.insertAdjacentElement('afterend', outputElement);

formElement.addEventListener("submit", function(e) {

  e.preventDefault();

  let authorizationChecker = 0;

  for (let i = 0; i < mailList.length; i++) {
    if (mailList[i] === mailElement.value) {
      outputElement.innerHTML = `${mailElement.value}: mail autorizzata ad accedere`;
      authorizationChecker = 1;
    }
  }

  if (authorizationChecker === 0) {
    outputElement.innerHTML = `${mailElement.value}: mail non autorizzata ad accedere`;
  }

});