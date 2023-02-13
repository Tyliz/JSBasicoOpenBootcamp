// Listas, arrays

// primera forma de crear más comun
// * o si es vacio ```lst = []
const lst = [1, 'hola', true, undefined, null]

const lst2 = new Array(1, 'hola', true, undefined, null); // * segunda opción */

const lst3 = new Array(3); // * segunda opción */

const lst4 = [lst, lst2, lst3];

// Objetos

const movil = {
	altura: 10,
	anchura: 5,
	marca: 'Xiaomi',
	isRoot: false,
	lstContact: ['Nila', 'Mamá', 'Fari'],
	tarjeta: {
		marca: 'Sandisck',
		almacenamiento: 32,
	}
}

console.log(movil);
