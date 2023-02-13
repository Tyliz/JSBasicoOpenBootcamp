class Persona {
	constructor(nombre, edad) {
		this._nombre = nombre;
		this._edad = edad;
	}

	saludo() {
		console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`);
	}
}

class Desarrollador extends Persona {
	constructor(nombre, edad, lenguaje) {
		super(nombre, edad);
		this._lenguaje = lenguaje;
	}

	//Polimorfismo
	saludo() {
		super.saludo(); // se ejecuta la funcion original y lo siguiente
		console.log(`Y soy desarrollador de ${this._lenguaje}.`);
	}
}


const developer = new Desarrollador('Tyliz', 26, 'JavaScript');
console.log(developer);

developer.saludo();
