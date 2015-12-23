window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  //t._e = [showTwitterButton];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));


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

function showTwitterButton() {
	twttr.widgets.createFollowButton(
	  'm_pentenrieder',
	  document.getElementById('twitter'),
	  {
	    size: 'large',
	    showCount: false,
	    showScreenName: "false",
	    dnt: true
	  }
	).then(function (el) {
		$('#placeholder-follow-button').hide();
	});
}