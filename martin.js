$(document).ready(function() {
	$('#tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	$('#placeholder-follow-button').click(function(event) {
		event.preventDefault();
		window.location.href = 'https://twitter.com/m_pentenrieder';
	});

	$('#msg-btn').click(function(event) {
	    event.preventDefault();
	    var email = 'martin.pentenrieder@gmx.de';
	    var subject = 'Hi Martin!';
	    window.location = 'mailto:' + email + '?subject=' + subject;
	});

});