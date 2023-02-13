const obj = {
	id: 4,
	nombres: 'Tyliz',
	apellidos: 'Rosas',
	isDeveloper: true,
	lstLibroFavorito: [
		'Erebos',
		'La biblia de los caídos',
	],
};


// * formas de obtener un valor por propiedad
console.log(obj['id']);
console.log(obj.nombres);

const prop = 'isDeveloper';

console.log(obj[prop]);

// const obj2 = obj; // ! forma incorrecta de copiar un objeto, ya que comparten la memoria y actualiza ambos objetos
const obj2 = { ...obj };
obj2.nombres = 'Iñigo'
obj2.apellidos = 'Aguas'

console.log(obj);
console.log(obj2);
