const lstParrafo = document.querySelectorAll('.parrafo')
const lstSeccion = document.querySelectorAll('.seccion')

lstParrafo.forEach(parrafo => {
	parrafo.addEventListener('dragstart', (event) => {
		console.log(`Estoy arrastrando el parrafo "${parrafo.innerText}"`)
		parrafo.classList.add('dragging')
		event.dataTransfer.setData('id', parrafo.id)
		const elementoFantasma = document.querySelector('.img-fantasma')
		event.dataTransfer.setDragImage(elementoFantasma, 0, 0)
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
		event.dataTransfer.dropEffect = 'copy' // ? copy por defecto [~]https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect
	})

	seccion.addEventListener('drop', (event) => {
		console.log('drop')
		const idParrado =  event.dataTransfer.getData('id')
		const parrafo = document.getElementById(idParrado)
		seccion.appendChild(parrafo)
	})
})
