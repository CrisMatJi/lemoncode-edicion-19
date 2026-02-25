/*
- Head -
Implementa una función  head  (inmutable), 
tal que, dado un array como entrada extraiga
y devuelva su primer elemento. Uliza destructuring.
*/
const head = ([first]) => first;
console.log(head([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));

/*
- Tail -
Implementa una función  tail  (inmutable), 
tal que, dado un array como entrada
devuelva todos menos el primer elemento. 
Uliza rest operator.
*/
const tail = ([, ...rest]) => rest;
console.log(tail([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));

/*
- Init -
Implementa una función  init  (inmutable), 
tal que, dado un array como entrada
devuelva todos los elementos menos el úlmo. 
Uliza los métodos que ofrece
Array.prototype.
*/ 
const init = (array) => array.slice(0, -1);
console.log(init([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));

/*
- Last -
Implementa una función  last  (inmutable), 
tal que, dado un array como entrada
devuelva el úlmo elemento.
*/

const last = (array) => array[array.length - 1];
console.log(last([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));




