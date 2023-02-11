let nombres = 'Ismael';
let apellidos = 'De La Barra Rosas';

let estudiante = nombres.concat(' ', apellidos);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let caracteresEstudiante = estudiante.length;

let primeraLetraNombre = nombres[0];
let ultimaLetraApellidos = apellidos[apellidos.length - 1];

let estudianteSinEspacios = estudiante.replace(/ /g, '');

let contiene = estudiante.includes(nombres);

console.log('nombres', nombres);
console.log('apellidos', apellidos);
console.log('estudiante', estudiante);
console.log('estudianteMayus', estudianteMayus);
console.log('estudianteMinus', estudianteMinus);
console.log('caracteresEstudiante', caracteresEstudiante);
console.log('primeraLetraNombre', primeraLetraNombre);
console.log('ultimaLetraApellidos', ultimaLetraApellidos);
console.log('estudianteSinEspacios', estudianteSinEspacios);
console.log('contiene', contiene);
