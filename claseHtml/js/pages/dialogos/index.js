const btn = document.querySelector('#btn')
const btnInfo = document.querySelector('#info')

btn.addEventListener('click', () => {
	// alert('Se hizo cliik')
	// confirm('¿Estas de acuerdo?') && alert('Ok')
	confirm('¿Estas de acuerdo?') ? console.log('Ok') : console.log('No')
});

btnInfo.addEventListener('click', () => {
	const nombre  = prompt('¿Cuál es tu nombre?')
	if (nombre)
		console.log(`Tu nombre es ${nombre}`)
});


const lstPersonas = [
	{
		nombre: 'Tyliz',
		edad: 26,
	},
	{
		nombre: 'Julen',
		edad: 21,
	},
	{
		nombre: 'Amaia',
		edad: 30,
	},
]

console.table(lstPersonas)
