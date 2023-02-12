// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// // Un nuevo Set con los nombres de tu familia
const setFamilia = new Set(['Leny Rosas', 'Nilza De La Barra Rosas', 'Izan De La Barra Rosas', 'Farid De La Barra Rosas']);
console.log(setFamilia);

// // Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFamilia.add('Ismael De La Barra Rosas');
setFamilia.add('Ismael De La Barra Rosas');
console.log(setFamilia);

// // Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFamilia.add('Javascript');
console.log(setFamilia);

