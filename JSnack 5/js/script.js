// Snack 5


// Crea un array vuoto.
var arrayVuoto = [];

i = 0;

while (i < 6) {
// Chiedi per 6 volte all’utente di inserire un numero
  var numero = prompt("Inserisci un numero");
  // se è dispari inseriscilo nell’array.
  if (numero % 2 != 0) {
    arrayVuoto.push(numero);
  }
  i++;
}

console.log(arrayVuoto);
