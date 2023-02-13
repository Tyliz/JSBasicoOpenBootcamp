let lstLibros = [
	'Erebos',
	'La biblia de los caídos',
	'Good Omens',
	'Shadow Hunters',
	'Las ventajas de ser invisible',
	'El secreto de Tedd y Todd',
]

for (let i = 0; i < lstLibros.length; i++) {
	console.log('for', lstLibros[i], i);
}

for (let libro of lstLibros) {
	console.log('for of', libro);
}

lstLibros.forEach((libro, i) => { // * i => index opcional
	console.log('each', libro, i);
});

let persona = {
	nombres: 'Ismael',
	apellidos: 'De La Barra Rosas',
	isDeveloper: true,
	fechaNacimiento: new Date(1996, 3, 4),
}

for (const propiedad in persona) {
	console.log('for in', propiedad, persona[propiedad]);
}
