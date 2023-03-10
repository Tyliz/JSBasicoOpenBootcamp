// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)

// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine
const lstParrafo = document.querySelectorAll('.parrafo')
const lstSeccion = document.querySelectorAll('.seccion')
const papelera = document.querySelector('#papelera')

lstParrafo.forEach(parrafo => {
	parrafo.addEventListener('dragstart', (event) => {
		console.log(`Estoy arrastrando el parrafo "${parrafo.innerText}"`)
		parrafo.classList.add('dragging')
		event.dataTransfer.setData('id', parrafo.id)
		// const elementoFantasma = document.querySelector('.img-papel')
		// event.dataTransfer.setDragImage(elementoFantasma, 25, 25)
	})

	parrafo.addEventListener('dragend', () => {
		parrafo.classList.remove('dragging')
		console.log(`He terminado de arrastrar`)
		// console.log(`Estoy arrastrando el parrafo "${parrafo.innerText}"`)
	})
})

lstSeccion.forEach(seccion => {
	seccion.addEventListener('dragover', (event) => {
		event.preventDefault()
		event.dataTransfer.dropEffect = 'copy'
	})

	seccion.addEventListener('drop', (event) => {
		console.log('drop')
		const idParrado =  event.dataTransfer.getData('id')
		const parrafo = document.getElementById(idParrado)
		seccion.appendChild(parrafo)
	})
})

papelera.addEventListener('dragover', (event) => {
	event.preventDefault()
	const papel = document.querySelector('.img-papel')
	event.dataTransfer.dropEffect = 'copy'
})

papelera.addEventListener('drop', (event) => {
	console.log('drop papelera')
	const idParrado =  event.dataTransfer.getData('id')
	const parrafo = document.getElementById(idParrado)
	parrafo.remove()
})
