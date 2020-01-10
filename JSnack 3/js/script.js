// SNACK 3
//
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

var numero;

for (var i = 1; i < 6; i++) {

  numero = parseInt(prompt(i + " Inserisci un numero"));

  while (isNaN(numero) == true) {
    numero = parseInt(prompt("Devi inserire un numero"));
  }
  var totale = totale + numero;


}

console.log(totale);
