/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
RISPOSTA
In JS esistono 3 differenti tipi di datatypes:

-Strings: righe di testo generiche coprese fra apici singoli o doppi, che possono comprendere parole, frasi ma anche numeri.

-Numbers: includono esclusivamente valori numerici, sia interi (integers) che decimali (floats). A differenza delle stringhe non devono essere racchiusi tra apici. Nel caso di numeri decimali, il decimale è rappresentato dal punto.

-Booleans: un dato booleano può esprimere soltanto due valori: (true) e (false). Qualsiasi dato può essere convertito in un valore booleano all'interno di apposite funzioni. 
*/

let parola = 'Ciao!';
console.log(parola); //String

let numero = 1;
console.log(numero) //Number

let condizione = true;
console.log(condizione) //Boolean


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/


/* RISPOSTA */

// let name = 'Luigi';
const name = 'Luigi';


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* RISPOSTA */

let somma = 12 + 20;
console.log(somma); //esempio 1

let a = 12;
let b = 20;
console.log(a + b); //esempio 2

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* RISPOSTA */

let x = 12;


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* RISPOSTA */

/* let name = 'Di Fraia';
console.log(name); - dimostrazione: Uncaught SyntaxError: Identifier 'name' has already been declared (at D2.js:61:5) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* RISPOSTA */

let sottrazione = (4 - x);
console.log(sottrazione) //esempio 1

let c = 4;
console.log(c - x) //esempio 2

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* RISPOSTA */


let name1 = 'john';
let name2 = 'John';

console.log(name1 === name2);

console.log(name1 === name2.toLowerCase()); //extra