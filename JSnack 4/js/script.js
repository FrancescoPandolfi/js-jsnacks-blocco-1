// SNACK 3


// var numeri = [];
// var totaleNumeri = 0;

// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// for (var i = 0; i < 5; i++) {
//   numeri.push(parseInt(prompt("Inserisci un numero")));
//   totaleNumeri += numeri[i];
// }
// Il programma stampa la somma di tutti i numeri inseriti.
// console.log(totaleNumeri);



// var i = 0;
// var totaleNumeri = 0;
// while (i < 5) {
//   var numero = parseInt(prompt("Inserisci un numero"));
//   totaleNumeri = totaleNumeri + numero;
//   i++;
// }
// console.log(totaleNumeri);

// SNACK 4

//
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.


var invitati = ["Andrea", "Francesco", "Giacomo", "Marco"];


var nomeUtente = prompt("Scrivi il tuo nome");

for (var i = 0; i < invitati.length; i++) {

  if (nomeUtente == invitati[i]) {
    var esito = true;
  } else {
    var esito = false;
  }
}
if (esito == true) {
  console.log("Puoi partecipare alla festa");
} else {
  console.log("Non puoi partecipare alla festa");
}
