/*
Implementa una función  concat  (inmutable) tal que, dados 2 arrays como entrada,
devuelva la concatenación de ambos. Uliza rest / spread operators.
const concat = (a, b) => {}; // Implementation here. 
Opcional
Implementa una versión del ejercicio anterior donde se acepten múlples arrays de
entrada (más de 2).
*/


const concat = (a, b) => [...a, ...b];
console.log(concat([1, 2, 3, 4], [6, 7, 8]));
// Ejercicio opcional
const concatMultiple = (...arrays) => arrays.flat();
console.log(concatMultiple([1, 2], [3, 4], [5, 6])); 
//Desconocía el uso de reduce, pero me parece una solución más elegante, aunque no tan eficiente como flat.
const concatMultipleReduce = (...arrays) => arrays.reduce((acc, curr) => [...acc, ...curr], []);
console.log(concatMultipleReduce([1, 2], [3, 4], [5, 6]));