// L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parolaUno = prompt("Inserisci la parola 1");
var parolaDue = prompt("Inserisci la parola 2");

var parolaCorta;
var parolaLunga;

if (parolaUno.length < parolaDue.length) {
  parolaCorta = parolaUno;
  parolaLunga = parolaDue;
} else if (parolaUno.length > parolaDue.length) {
  parolaCorta = parolaDue;
  parolaLunga = parolaUno;
} else {
  alert("hai inserito 2 parole uguali");
}

console.log(parolaCorta);
console.log(parolaLunga);
