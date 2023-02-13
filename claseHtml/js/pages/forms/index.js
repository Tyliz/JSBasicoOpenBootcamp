const formulario = document.getElementById('formulario');

console.log(formulario);

formulario.addEventListener('submit', event => {
	event.preventDefault()
	console.log(event)
})
