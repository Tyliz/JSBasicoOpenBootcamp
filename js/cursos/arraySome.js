const lstNumeros = [1, 15, 7, 48, 5, 54, 48, 6, 4, -2, 72];

let resultado = lstNumeros.some(numero => typeof numero === 'number');

resultado = lstNumeros.some(numero => numero < 0);

console.log(resultado);
