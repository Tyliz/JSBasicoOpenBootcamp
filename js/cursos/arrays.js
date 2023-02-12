let list = [
	'Erebos',
	'La biblia de los caídos',
	'Good Omens',
	'Shadow Hunters',
	'Las ventajas de ser invisible',
	'El secreto de Tedd y Todd',
];

//remueve el primero
list.shift();

//remueve el ultimo
list.pop();

// añade al final
list.push('nuevo1');

// añade al inicio
list.unshift('nuevo2');

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
list.splice(2, 1);

// Remover y remplazar => remueve 1 y remplaza al 2do
list.splice(2, 1, 'Dirk Gently');

// Remover y remplazar => solo reemplaza remplaza al 3ro
list.splice(2, 0, 'Dirk Gently');

console.log(list);
