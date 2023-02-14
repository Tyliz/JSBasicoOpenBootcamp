// Initialize and add the map
let markerLugar1
let markerLugar2
let markerLugar3
let map

function initMap() {
	const cordsCenter = { lat: 18.779478, lng: -31.801036 }
	const cordsLugar1 = { lat: -16.489689, lng: -68.1192936 }
	const cordsLugar2 = { lat: 41.29085, lng: 12.71216 }
	const cordsLugar3 = { lat: 46.8131873, lng: 8.2242101 }
	// The map, centered at Uluru
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: cordsCenter,
	})

	markerLugar1 = new google.maps.Marker({
		position: cordsLugar1,
		map: map,
	})

	markerLugar2 = new google.maps.Marker({
		position: cordsLugar2,
		map: map,
	})

	markerLugar3 = new google.maps.Marker({
		position: cordsLugar3,
		map: map,
	})
}

window.initMap = initMap
