let lstLibros = [
	'Erebos',
	'La biblia de los caídos',
	'Good Omens',
	'Shadow Hunters',
	'Las ventajas de ser invisible',
	'El secreto de Tedd y Todd',
];

let lstLenguajes = [
	'Python',
	'JavaScript',
	'PHP',
	'C#',
];

// concat no une las listas pero retorna una nueva lista con todos los elementos
let lstConcat = lstLibros.concat(lstLenguajes);

console.log(lstLibros);
console.log(lstLenguajes);
console.log(lstConcat);

// factor de propagación "..." los tres puntos retorna todos los valores por separado
console.log(...lstConcat);

// esto puede servir para realizar una union
const lstUnion = [...lstLibros, ...lstLenguajes];

// sin los tres puntos no se une, se crea una lista con dos listas por separado
const lstFallaUnion = [lstLibros, lstLenguajes];

console.log(lstUnion);
console.log(lstFallaUnion);
