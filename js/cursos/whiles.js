let lstLibros = [
	'Erebos',
	'La biblia de los caídos',
	'Good Omens',
	'Shadow Hunters',
	'Las ventajas de ser invisible',
	'El secreto de Tedd y Todd',
]

let i = 0;
// * WHILE => ejecuta solo si cumple la condición
while (i < lstLibros.length) {
	console.log(lstLibros[i]);
	i++;
}

i = 0;
// * DO WHILE => ejecuta siempre una vez
do {
	console.log(i);
	i++;
} while (i < lstLibros.length);
