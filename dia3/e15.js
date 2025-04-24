// Combinar arrays usando spread syntax
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log('Combined Array:', combinedArray); // [1, 2, 3, 4, 5, 6]

// Copiar un array usando spread syntax
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log('Copied Array:', copiedArray); // [10, 20, 30]

// Agregar elementos adicionales al combinar arrays
const extendedArray = [...originalArray, 40, 50];
console.log('Extended Array:', extendedArray); // [10, 20, 30, 40, 50]

// Usar spread syntax con strings
const string = "hello";
const stringToArray = [...string];
console.log('String to Array:', stringToArray); // ['h', 'e', 'l', 'l', 'o']