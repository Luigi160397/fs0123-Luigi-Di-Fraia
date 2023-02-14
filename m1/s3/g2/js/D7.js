/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function concatenaStringhe(stringa1, stringa2){
  let str1Inizio = stringa1.slice(0, 2);
  let str2Fine = stringa2.slice(-3); 
  let stringaConcatenata = str1Inizio + str2Fine; 
  let stringaMaiuscola = stringaConcatenata.toUpperCase(); 
  console.log(stringaMaiuscola); 
}
concatenaStringhe('hello', 'world');

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

function creaArrDispari() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if(i % 2 ==1){
    arr.push(i);
  }
  }
  return arr;
}
let arrDispari = creaArrDispari();
console.log(arrDispari);

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

  function creaArr5() {
    const arr5 = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0) {
        arr5.push(i);
      }
    }
    return arr5;
  }
  const arr5 = creaArr5();
  console.log(arr5);

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

  function creaRandomArr() {
    let randomArr = [];
    for (let i = 0; i < 10; i++) {
      let numeri = Math.floor(Math.random() * 101);
      randomArr.push(numeri);
    }
    return randomArr;
  }
  let randomArr = creaRandomArr();
  console.log(randomArr);

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

let arrNum = [1,2,3,4,5,6,7,8,9,10];
  function creaArrPari(numeri) {
    let numeriPari = numeri.filter(n => n % 2 == 0);
  return numeriPari;
  }
  let arrPari = creaArrPari(arrNum);
  console.log(arrPari);

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

let numArr = [1,2,3,4,5,6];
  function sommaNumeri(numeri) {
    let somma = 0;
    numeri.forEach(n => {somma += n;});
    return somma;
  }
  let risultato = sommaNumeri(numArr);
  console.log(risultato);

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

function incrementaNumeri(numeri) {
  let numeriIncrementati = [];
  for (let n of numeri) {
    if (typeof n === 'number') {
      numeriIncrementati.push(n + 1);
    } else {
      numeriIncrementati.push(n);
    }
  }
  return numeriIncrementati;
}
let numeriDaIncrementare = [1,2,3,4,'cinque',6,'sette',8];
let incrementati = incrementaNumeri(numeriDaIncrementare);
console.log(incrementati);

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

function sostituisciStringa(arrStr) {
  let risultato = [];
  for (let elementi of arrStr) {
    if (typeof elementi === 'string') {
      risultato.push(elementi.length);
    } else {
      risultato.push(elementi);
    }
  }
  return risultato;
}
let arrStr = ['EPICODE','è','grande',1,2,3];
let lunghezza = sostituisciStringa(arrStr);
console.log(lunghezza);

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

let arrNumeri = [1,2,3,4,5,6,7,8,9,10]
function eliminaPari(array) {
  return array.filter((val) => val % 2 !== 0);
}
let pariEliminati = eliminaPari(arrNumeri)
console.log(pariEliminati);

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

  function generaArray() {
    let array = [];
    while (array.length < 10) {
      let randomValue = Math.floor(Math.random() * 11);
      if (!array.includes(randomValue)) {
        array.push(randomValue);
      }
    }
    return array;
  }
  let nuovoArr = generaArray()
  console.log(nuovoArr);

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

let arrProva = ['fine',9,10,3,2,1,'inizio']
function invertiArr(arr) {
  return arr = arr.reverse()
}
let invertito = invertiArr(arrProva);
console.log(invertito);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function trovaFilmVecchio(movies) {
  let oldestMovie = 0;
  for (let film of movies) {
    if (!oldestMovie || film.Year < oldestMovie.Year) {
      oldestMovie = film;
    }
  }
  return oldestMovie;
}
let oldestMovie = trovaFilmVecchio(movies);
console.log(oldestMovie);

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function contaFilm(movies) {
  return movies.filter(movie => movie.Type === 'movie').length;
}
let numFilm = contaFilm(movies)
console.log(numFilm);

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function trovaTitoli(movies) {
  return movies.map(movie => movie.Title);
}
let titoli = trovaTitoli(movies);
console.log(titoli);

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function millenniumFilm(movies){
  return movies.filter(movie => movie.Year >= 1999);
}
let filmMill = millenniumFilm(movies);
console.log(filmMill);

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function getMovieById(imdbId) {
  return movies.find(movie => movie.imdbID === imdbId);
}
let cercaFilm = getMovieById('tt0087365');
console.log(cercaFilm);

/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaYear(movies) {
  let somma = 0;
  for (let movie of movies) {
    somma += parseInt(movie.Year);
  }
  return somma;
}
let sommaFilm = sommaYear(movies);
console.log(sommaFilm);

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

function cercaParola(keyword) {
  return movies.filter(movie => movie.Title.toLowerCase().includes(keyword.toLowerCase()));
}
let parola = cercaParola('salem')
console.log(parola);