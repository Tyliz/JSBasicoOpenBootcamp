// // Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

// // Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function Fibonacci(num) {
	let lstSecuencia = [1, 1];
	if (num < 1)
		return [];
	if (num === 1)
		return [1];

	for (let i = 2; i < num; i++) {
		lstSecuencia.push(lstSecuencia[i - 1] + lstSecuencia[i - 2]);
	}
	return lstSecuencia;
}

console.log(Fibonacci(6));
