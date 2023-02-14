// Initialize and add the map
let marker
let map

function initMap() {
	// navigator.geolocation

	// The location of Uluru
	const uluru = { lat: -25.344, lng: 131.031 }
	// The map, centered at Uluru
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru,
	})
	// The marker, positioned at Uluru
	marker = new google.maps.Marker({
		position: uluru,
		map: map,
	})

	geoPosiciona()
}

function geoPosiciona() {
	if (navigator.geolocation) {
		const options = { timeout: 60000 }
		navigator.geolocation.watchPosition(centraMapa, onError, options)
	} else {
	 alert('Tu navegador no admite geolocalización')
	}
}

function centraMapa(position) {
	const nuevasCorsds = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	}
	marker.setPosition(nuevasCorsds)
	map.setCenter(nuevasCorsds)
}

function onError(error) {
	console.error(error)
}
window.initMap = initMap
