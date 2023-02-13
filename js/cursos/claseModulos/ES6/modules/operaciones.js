// Exportacion por ES6
export function Factorial(number) {
	let resultado = 1;
	for (let i = 2; i <= number; i++) {
		resultado *= i;
	}

	return resultado;
}

// Exportacion por ES6
export function Mayor(a, b, c) {
	return (a > b || (a = b)) && (a > c || (a = c)) && a;
}
