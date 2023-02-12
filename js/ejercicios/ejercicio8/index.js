// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// // Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
	nombre: 'Ismael',
	apellido: 'De La Barra Rosas',
	edad: 26,
	altura: 173,
	eresDesarrollador: true,
};

console.log(datos);

// // Una variable que obtenga tu edad a partir del objeto anterior
const { edad } = datos;

console.log(edad);

// // Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lstDatos = [
	{ ...datos },
	{
		nombre: 'Javier',
		apellido: 'Mercado',
		edad: 27,
		altura: 175,
		eresDesarrollador: true,
	},
	{
		nombre: 'Massiel ',
		apellido: 'Espinoza',
		edad: 27,
		altura: 165,
		eresDesarrollador: false,
	}
];


// // Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const lstDatosOrdenados = [ ...lstDatos ].sort((o1, o2) => o2.edad - o1.edad);

console.log(lstDatos);
console.log(lstDatosOrdenados);
