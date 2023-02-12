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

const persona1 = lstPersona.find(persona => persona.nombres === 'Ismael');

// * Obtener propiedad de un objeto
// const { edad } = lstPersona.find(persona => persona.nombres === 'Izan');
const { nombres, edad } = lstPersona.find(persona => persona.nombres === 'Izan');

console.log(persona1);
console.log(nombres);
console.log(edad);
