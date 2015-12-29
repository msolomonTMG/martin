$(document).ready(function() {
	$('#tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('#connect-btn').click(function(event) {
		event.preventDefault();
		window.location.href = 'https://www.linkedin.com/in/martinpentenrieder';
	});

	$('#msg-btn').click(function(event) {
	    event.preventDefault();
	    var email = 'martin.pentenrieder@gmx.de';
	    var subject = 'Hi Martin!';
	    window.location = 'mailto:' + email + '?subject=' + subject;
	});

});