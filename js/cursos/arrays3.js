const lstLibros = [
	'Erebos',
	'La biblia de los caídos',
	'Good Omens',
	'Shadow Hunters',
	'Las ventajas de ser invisible',
	'El secreto de Tedd y Todd',
];

/**
 * Slice retorna una nueva lista, sin modificar la lista original
 * con los datos desde un indice hasta el final o hasta el segundo indice
 */
const lstParte = lstLibros.slice(2, 4)

console.log(lstLibros);
console.log(lstParte);
