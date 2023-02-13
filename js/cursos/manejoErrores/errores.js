const miFuncion = (val) => {
	if (typeof val === 'number') {
		return val * 2;
	}
	throw new Error('El valor debe ser de tipo número');
}

try {
	let valor = 6;
	let doble = miFuncion(valor);
	console.log('El valor doble es: ', doble);
	valor = '6dsf';
	doble = miFuncion(valor);
	console.log('El valor doble es: ', doble);
} catch (error) {
	console.log(error.message);
}

