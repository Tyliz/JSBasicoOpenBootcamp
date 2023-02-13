function Factorial(number) {
	let resultado = 1;
	for (let i = 2; i <= number; i++) {
		resultado *= i;
	}

	return resultado;
}

function Mayor(a, b, c) {
	return (a > b || (a = b)) && (a > c || (a = c)) && a;
}

module.exports = {
	Factorial,
	Mayor,
}
