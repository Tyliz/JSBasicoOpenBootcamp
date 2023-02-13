const lstPeliculas = [
	{
		titulo: 'The Swan Princess',
		director: 'Richard Rich',
		fechaEstreno: new Date(1994, 10, 18),
		anno: 1994,
	},
	{
		titulo: 'Split',
		director: 'M. Night Shyamalan',
		fechaEstreno: new Date(2016, 8, 26),
		anno: 2016,
	},
	{
		titulo: 'Enchanted',
		director: 'Kevin Lima',
		fechaEstreno: new Date(2007, 10, 21),
		anno: 2007,
	},
];

// lstPeliculas.sort((p1, p2) => p1.anno - p2.anno);
lstPeliculas.sort((p1, p2) => p1.titulo < p2.titulo ? -1: 1 );

console.log(lstPeliculas);
