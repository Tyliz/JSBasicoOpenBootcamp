const fecha = new Date(2018, 0, 1);
const fecha2 = new Date(2018, 0, 1);

console.log(fecha === fecha2); // ! no funciona con el === por que no es posible comparar por igualdad las fechas de esa manera
console.log(fecha.getTime() === fecha2.getTime()); // * para ello es necesario usar el metodo getTime()

console.log(fecha.getMonth() + 1); // * el '+1' es por que el mesa va de `0 -> Enero a 11 -> diciembre`

console.log(fecha.getFullYear()); // * returns => 2018

// * 'en-GB' dd/MM/YYYY => 01/01/2018
console.log(fecha.toLocaleDateString('en-GB'));
