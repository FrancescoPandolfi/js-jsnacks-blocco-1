// Snack 6

// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var n = parseInt(prompt("Inserisci un numero"));

for (var i = 1; i < n+1; i++) {

  var cubo = Math.pow(i, 3);
  console.log(cubo);
}
