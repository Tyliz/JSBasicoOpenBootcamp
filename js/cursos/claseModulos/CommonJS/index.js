// * formas de importar/exportar módulos
// 1. CommonJS -> require => por defecto
// 2. Import ES6 -> import => más moderno

// const moduleOperaciones = require('./modules/operaciones'); // * con CommonJS forma 1
const { Factorial, Mayor } = require('./modules/operaciones'); // * con CommonJS forma 2 por elemento


// const fact = moduleOperaciones.Factorial(5);
// const mayor = moduleOperaciones.Mayor(5, 15, 3);
const fact = Factorial(5);
const mayor = Mayor(5, 15, 3);


console.log(fact);
console.log(mayor);
