const lstNumeros = [1, 15, 7, 48, 5, 54, 48, 6, 4, -2, 72];

let resultado = lstNumeros.every(numero => typeof numero === 'number');

console.log(resultado);

resultado = lstNumeros.every(numero => numero > 0);

console.log(resultado);

// comparacion de listas
const lst1 = [1, 15, 7, 48];
const lst2 = [1, 15, 7, 48];

// Esto no funciona con listas
console.log(lst1 === lst2);
console.log(lst1 == lst2);


const compararListas = (lst_1, lst_2) => {
	if (lst_1.length !== lst_2.length)
		return false;

	return lst_1.every((valor, i) => valor === lst_2[i]);
};

const lst3 = [1, 15, 7, 4];

console.log('compararListas(lst1, lst2):', compararListas(lst1, lst2));
console.log('compararListas(lst1, lst3):', compararListas(lst1, lst3));
