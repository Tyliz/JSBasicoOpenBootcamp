const lstNumeros = [1, 15, 7, 48, 5, 54, 48, 6, 4, 2, 72];

console.log(lstNumeros);

// De menor a mayor
lstNumeros.sort((a, b) => a - b);

console.log(lstNumeros);

// De mayor a menor
lstNumeros.sort((a, b) => b - a);

console.log(lstNumeros);

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

console.log(lstPersona);

lstPersona.sort((pA, pB) => pA.edad - pB.edad);

console.log(lstPersona);

lstPersona.sort((pA, pB) => pA.nombres > pB.nombres ? -1 : 1);

console.log(lstPersona);

lstPersona.sort((pA, pB) => pA.nombres > pB.nombres ? 1 : -1);

console.log(lstPersona);
