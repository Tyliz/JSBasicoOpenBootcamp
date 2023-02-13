export default class Estudiante {
	#nombre;
	#asignaturas;

	constructor(
		nombre,
		asignaturas = ['Javascript', 'HTML', 'CSS']
	){
		this.#nombre = nombre;
		this.#asignaturas = asignaturas;
	}

	Nombre() {
		return this.#nombre;
	}

	Asignaturas() {
		return this.#asignaturas;
	}

	obtenerDatos() {
		return { nombre: this.Nombre() , asignaturas: this.Asignaturas() };
	}
}
