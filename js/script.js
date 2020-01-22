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

// Push in array solo se il numero non è già stato generato dal pc
  var randomArray = [];
  for (var i = 0; i < 16; i++) {
    var randomPc = getRandomNumber(1,100);
    if (randomArray.includes(randomPc) == false) {
      randomArray.push(randomPc);
    }
  }
  console.log('Numeri casuali da 1 a 100 generati dal pc: ' + randomArray.sort());

if (confirm('Pronto per giocare?')) {
    var numLevel = 0;
    var selectionLevel;
    var attempts;
    var exit;
    while (numLevel == 0) {
      if (selectionLevel = parseInt(prompt('Scegli il livello di difficoltà: \nFacile: inserisci 1\nMedio: inserisci 2\nDifficile: inserisci 3'))) {
        switch (selectionLevel) {
          case 1:
            numLevel = 100;
            attempts = 84;
            break;
          case 2:
          numLevel = 80;
          attempts = 64;
            break;
          case 3:
          numLevel = 50;
          attempts = 34;
            break;
          case 5:
          numLevel = 100;
          attempts = 5;
            break;
        }
        exit = attempts;
      }else {
        alert('Hai annullato il gioco, ricarica la pagina per giocare di nuovo');
      }
    }
    var numArray = [];
    var points = 0
    var findBomb = false;
    while (numArray.length < attempts && findBomb == false) {
      var numUser = parseInt(prompt('Scegli un numero da 1 a 100'));
      console.log('Inserimento utente:' + numUser);
      if (checkNum(randomArray, numUser) == true) {
        alert('Peccato!!! Hai perso! Ricarica la pagina e ritenta.');
        findBomb = true;
        points++;
        alert('Il tuo punteggio è di: ' + points);
      }
      else if (numUser > 100 || numUser < 1 || isNaN(numUser)) {
        alert('Devi inserire un numero da 1 a 100');
      }
      else if (checkNum(numArray, numUser) == false) {
        numArray.push(numUser);
      }
      else {
        alert('Hai già inserito questo numero!')
      }
    }
    console.log('Numeri inseriti da 1 a 100 dall\'utente: ' + numArray.sort());
    if (checkNum(randomArray, numUser) != true) {
      alert('Fantastico!!! Hai Vinto! Per vincere di nuovo, ricarica la pagina.');
      points++;
      alert('Il tuo punteggio è di: ' + points);
    }
  }else {
    alert('Hai annullato il gioco, ricarica la pagina per giocare di nuovo');
  };



// // Funzioni

// Numero random
function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};

// Ricarica pagina
function ricaricaPage() {
  location.replace('file:///Users/danielelanzi/Documents/boolean-courses/consegna-esercizi/js-campominato/index.html');
};

//Trova numero nell'array
function checkNum(array, num){
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == num) {
      result = true;
    }
    i++;
  }
  return result;
}

// <===========================FINE========================>
