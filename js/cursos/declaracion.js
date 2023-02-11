var variable;
let variableLet;

const constante = 'Soy una constante';

console.log(constante);

variable = 'Hola soy una variable VAR';
console.log('var:', variable);

for (var i = 0; i < 3; i++) {
	var variable = 'Hola soy una variable VAR ' + i;
}
console.log('var:', variable);

variableLet = 'Hola soy una variable Let';
console.log('let:', variableLet);

for (var i = 0; i < 3; i++) {
	let variableLet = 'Hola soy una variable Let ' + i;
}
console.log(typeof variableLet);


