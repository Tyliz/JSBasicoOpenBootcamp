// * forma Import ES6 -> import => más moderno; se recomienda utilizar este metodo

import { Factorial, Mayor } from './modules/operaciones.js'; // * para ES6 es necesario tener npm inicializado se puede ejecutar `npm init -y`
import getAutor from './modules/literatura.js';

// const fact = moduleOperaciones.Factorial(5);
// const mayor = moduleOperaciones.Mayor(5, 15, 3);
const fact = Factorial(5);
const mayor = Mayor(5, 15, 3);

console.log(getAutor());

console.log(fact);
console.log(mayor);
