// L'utente inserisce due numeri in successione con due prompt.
// Il software stampa il maggiore

var num1 = parseInt(prompt("Scrivi numero 1"));
var num2 = parseInt(prompt("Scrivi numero 2"));

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1){
  console.log(num2);
}
