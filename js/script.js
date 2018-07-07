$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });

		
/*===============================
=           JQuery Animate            =
===============================*/

	$('#left').click(function() {
		$('.box').animate ({
			left: "-=40px",
			fontSize: "+=2px"
		}, function() {
			// Animation is complete
		});
	});

	$('#up').click(function() {
		$('.box').animate ({
			top: "-=40px",
			opacity: "+=0.1"
		}, function() {
			// Animation is complete
		});
	});

	$('#right').click(function() {
		$('.box').animate ({
			left: "+=40px",
			fontSize: "-=2px"
		}, function() {
			// Animation is complete
		});
	});

	$('#down').click(function() {
		$('.box').animate ({
			top: "+=40px",
			opacity: "-=0.1"
		}, function() {
			// Animation is complete
		});
	});

	// Click the GO button

	$('#go').click(function() {

		// function to check if a car has won the race 
		function checkIfComplete() {
			if ( isComplete == false) {
				isComplete = true;
			} else { 
				place = 'second';
			}
		}

		//get the width of the car
		var carWidth = $('#car1').width();

		// get the width of the racetrack
		var receTrackWidth = $(window).width() - carWidth;

		// generate a random # between 1 and 5000 

		var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
		var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

		//set a flag variable to FALSE by default
		var isComplete = false;

		// set a flag variable to FIRST by default
		var place = 'first';

		// animate car 1
		$('#car1').animate({
			// move the car the width of the racetrack
			left: receTrackWidth 

			}, raceTime1, function () {
				// animation is complete

				// run a function
				checkIfComplete();

				//Text feedback
				$('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' ms!');
		});

		// animate car 2
		$('#car2').animate({
			// move the car the width of the racetrack
			left: receTrackWidth 
			}, raceTime2, function () {
				// animation is complete

				// run a function
				checkIfComplete();

				//Text feedback
				$('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' ms!');
		});


	});

	// reset 
	$('#reset').click(function() {
		$('.car').css('left', '0');
		$('.raceInfo span').text('');
	});

});
