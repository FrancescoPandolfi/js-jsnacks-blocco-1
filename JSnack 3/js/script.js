// SNACK 4

//
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.


var invitati = ["Andrea", "Francesco", "Giacomo", "Marco"];


var nomeUtente = prompt("Scrivi il tuo nome");

for (var i = 0; i < invitati.length; i++) {

  if (nomeUtente == invitati[i]) {
    console.log("Puoi partecipare alla festa");
  } else {
    console.log("Non puoi partecipare alla festa");
  }
}
