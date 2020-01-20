// <===========================INIZIO========================>
// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34
// Come fatto assieme analizzate prima cosa deve fare il software, poi scriviamo i passaggi in italiano, solo dopo convertiamo in sintassi js aiutandoci con le slide e con la documenazione ufficiale.
// Proviamo ad inserire delle piccole funzioni, ogni funzione deve svolgere un compito preciso e restiturci qualcosa.

alert('Campo Minato Il computer deve generare 16 numeri casuali da 1 a 100. In seguito deve chiedere all\’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.');


var mine = [];
var numeroUtente;
var check;
var i = 0
for (let i = 0; i < 16; i++) {
  mine.push(getRandomNumber(1,100));
}
console.log('Numero casuale da 1 a 100 generato dal pc: ' + mine);

if (confirm('Pronto per giocare?')) {
  do {
    do {
      var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 100'));
      if (numeroUtente > 100 || numeroUtente < 1 || isNaN(numeroUtente))  {
        alert('Devi inserire un numero da 1 a 100');
      }
    } while (isNaN(numeroUtente));
    console.log('Numeri selezionati: ' + numeroUtente);
    check = checkNum(numeroUtente, mine);
    i++;
  } while (i < 84 && check != true);
  if (check == true) {
    alert('Peccato!!! Hai perso! Ricarica la pagina e ritenta.');
  } else if (check != true) {
    alert('Fantastico!!! Hai Vinto! Per vincere di nuovo, ricarica la pagina.');
  }
} else {
  alert('Hai annullato il gioco, ricarica la pagina per giocare di nuovo');
};

// Funzioni

// Numero random
function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
};

//Trova numero nell'array
function checkNum(num, array) {
  var i = 0;
  do {
    if (num == array[i])
    return true;
    else i++;
  } while (i < array.length);
  return false;
}

// Ricarica pagina
function ricaricaPage() {
  location.replace('file:///Users/danielelanzi/Documents/boolean-courses/consegna-esercizi/js-campominato/index.html');
};

// <===========================FINE========================>
