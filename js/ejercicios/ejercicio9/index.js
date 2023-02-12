// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// // La fecha de hoy
const hoy = new Date();
console.log('Hoy: ', hoy);

// // La fecha de tu nacimiento
const fechaNacimiento = new Date(1996, 3, 4);
console.log('Fecha Nacimiento:', fechaNacimiento);

// // Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const masTarde = fechaNacimiento < hoy;
console.log('Hoy es más tarde, la fecha de nacimiento: ', masTarde);

// // Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log('Día de nacimiento:', diaNacimiento);

// // Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log('Mes de nacimiento:', mesNacimiento);

// // Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const annoNacimiento = fechaNacimiento.getFullYear();
console.log('Año de nacimiento:', annoNacimiento);
