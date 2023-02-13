// * map - filter - reduce

const lstCiudades = [
	'La Paz',
	'Cochabamba',
	'Santiago',
	'Cali',
	'Barcelona',
];

const number = lstCiudades.forEach(ciudad => {
	console.log(ciudad);
	return 4; // en foreach no importa el return
});

console.log(number);

// *map: retorna una nueva lista con los valores modificados
const lstNew = lstCiudades.map((ciudad, index) => `${index + 1} ${ciudad}`);

console.log(lstNew);


const lstPersona = [
	{
		nombres: 'Leny Graciela',
		apellidos: 'Rosas Guzman',
		edad: 53,
	},
	{
		nombres: 'Ismael',
		apellidos: 'De La Barra Rosas',
		edad: 26,
	},
	{
		nombres: 'Nilza Anely',
		apellidos: 'De La Barra Rosas',
		edad: 29,
	},
	{
		nombres: 'Farid Eduaro',
		apellidos: 'De La Barra Rosas',
		edad: 25,
	},
	{
		nombres: 'Izan',
		apellidos: 'De La Barra Rosas',
		edad: 4,
	},
];

// personas mayores a 25
const lstFilterEdad = lstPersona.filter(persona => persona.edad > 25);
const lstFilterNombre = lstPersona.filter(persona => persona.nombres !== 'Ismael');

console.log(lstFilterEdad);
console.log(lstFilterNombre);

const sumEdades = { edad } = lstPersona.reduce((ant , current) => {
	return { edad : ant.edad + current.edad };
});

console.log('sumEdades', sumEdades);
