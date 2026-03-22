//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "12 apr 2026 15:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
