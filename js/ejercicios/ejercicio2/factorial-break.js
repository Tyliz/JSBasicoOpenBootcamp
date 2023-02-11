let numero = 10;

let factorial = 1;

let i = 1;
while (true) {
	factorial *= i;
	i++;
	if (i <= numero)
		break;
}

console.log(`La factorial de ${numero} es: ${factorial}`);
