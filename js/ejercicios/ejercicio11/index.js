// Crea un archivo JS que contenga las siguientes líneas
// // Una función sin parámetros que devuelva siempre "true"
function FuncionVacia() {
	return true;
}

// // Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const funcPromesa = new Promise((resolve, reason) => {
	setTimeout(() => {
		resolve(console.log('Hola soy una promesa'))
	}, 5000);
});

funcPromesa.then();

// // Una función generadora de índices pares automáticos

const generadorIndice = function* () {
	let indice = 0;
	while(true) {
		indice+=2;
		yield indice;
		if (indice === 10) {
			return indice;
		}
	}
}();

console.log(generadorIndice.next());
console.log(generadorIndice.next());
console.log(generadorIndice.next());
console.log(generadorIndice.next());
console.log(generadorIndice.next());
console.log(generadorIndice.next());
console.log(generadorIndice.next());
