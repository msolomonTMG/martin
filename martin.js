var is_mobile = false;

$(document).ready(function() {
	$('#tabs a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	  //resizeContent($(this));
	});

    if( $('#mobile-indicator').css('display')=='none') {
        is_mobile = true;
        //resizeContent();    
    }

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

function resizeContent(el) {
	console.log('resizing content');
	console.log(el);
	if (is_mobile == false) {
		console.log('is mobile is false');
		console.log(el.parent().hasClass('active'));
		var sideBarHeight = $('.profile-sidebar-container').height();

		if (el.parent().hasClass('active')) {
			console.log(el[0].hash);
			if (el[0].hash != '#experience') {
				$('.profile-content').css('height', sideBarHeight);
			}
			else {
				$('.profile-content').css('height', '520px');
			}
    		
    	}
	}
	else if (is_mobile == true) {
		$('.profile-content').css('height', '1000px');
		if (el.parent().hasClass('active')) {
			if (el[0].hash == '#contact') {
				$('.profile-content').css('height', '600px');
			}
		}
	}
}