// $('li').hide()
// $('h1').hide()

// $(document).ready(() => { })

$(() => {
	$('.btn-hide').click(function (e) {
		e.preventDefault()
		// $('#el1').hide()
		$('#el1').fadeOut()
	})

	$('.btn-show').click(function (e) {
		e.preventDefault()
		// $('#el1').show()
		$('#el1').fadeIn()
	})
	$('li').click(function (e) {
		$('h1').css({ color: 'red' })
	})

	$('.new-element').click(function (e) {
		e.preventDefault();
		$('ul').append('<li>New Element</li>') // al final
		$('ul').prepend('<li>New Element</li>') // al inicio
	});

	$('li').mouseenter(function (event) {
		event.target.style.color = 'blue' //JS Puro
		// $(this).css({ color: 'purple' }) // jquery
	});

	$('li').mouseleave(function (event) {
		event.target.style.color = 'black' //JS Puro
		// $(this).css({ color: 'purple' }) // jquery
	});

})
