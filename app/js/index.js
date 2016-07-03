var Countdown = require('countdown-js')

var end = new Date(2016, 8, 17)

var timer = Countdown.timer(end, function(time) {
	document.getElementById('days').textContent = time.days
  document.getElementById('hours').textContent = time.hours
  document.getElementById('minutes').textContent = time.minutes
  document.getElementById('seconds').textContent = time.seconds
}, function() {
  document.getElementById('countdown-end').setAttribute('display', 'block')
})

$(document).ready(function() {
	$('.countdown-section').each(function () {
		$(this).css('font-size', $(this).width() * 0.18)
	})
})
