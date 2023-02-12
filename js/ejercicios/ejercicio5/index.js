// * Crea un archivo JS que contenga las siguientes líneas
// // Una variable que contenga tu altura en centímetros (entero)
let alturaCM = 173;
console.log(alturaCM);

// // Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM = 1.73;
console.log(alturaM);

// // Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 75.3;
console.log(pesoKg);

// // Una variable que contenga tu altura en metros redondeada hacia arriba
let altura = Math.ceil(alturaM)
console.log(altura);

// // Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso = Math.floor(pesoKg);
console.log(peso);

// // Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let esMayor = (Number.MAX_VALUE + 1 > Number.MAX_VALUE);
console.log(esMayor);
