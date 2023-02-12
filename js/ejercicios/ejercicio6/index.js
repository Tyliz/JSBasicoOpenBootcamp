// * Crea un archivo JS que contenga las siguientes líneas
// // Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = [
	'Papa',
	'Tomate',
	'Pan',
	'Refresco',
	'Fideos',
];

// // Modifica la lista de la compra y añádele "Aceite de Girasol"
console.log(listaCompra);
listaCompra.push('Aceite de Girasol');
console.log(listaCompra);

// // Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);


// // Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const lstPeliculas = [
	{
		titulo: 'The Swan Princess',
		director: 'Richard Rich',
		fechaEstreno: new Date(1994, 10, 18),
	},
	{
		titulo: 'Enchanted',
		director: 'Kevin Lima',
		fechaEstreno: new Date(2007, 10, 21),
	},
	{
		titulo: 'Split',
		director: 'M. Night Shyamalan',
		fechaEstreno: new Date(2016, 8, 26),
	},
];


// // Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const fecha = new Date(2010, 0, 1);
const lstPelicula2010 = lstPeliculas.filter(p => p.fechaEstreno > fecha);

console.log(lstPeliculas);
console.log(lstPelicula2010);

// // Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const lstDirectores = lstPeliculas.map(p => p.director);
console.log(lstDirectores);

// // Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const lstTitulos = lstPeliculas.map(p => p.titulo);
console.log(lstTitulos);

// // Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const lstConcat = lstDirectores.concat(lstTitulos);
console.log(lstConcat);

// // Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const lstPropagacion = [...lstDirectores, ...lstTitulos];
console.log(lstPropagacion);
