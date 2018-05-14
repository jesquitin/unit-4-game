$(document).ready(function () {
	//
	// Selects a random number between 19 - 120
	var random = Math.floor(Math.random() * 101 + 19);

	// Adds random number to html id "randomNumber"
	$('#randomNumber').text(random);

	//random numbers for crystals between 1 and 12
	var rand1 = Math.floor(Math.random() * 11 + 1)
	var rand2 = Math.floor(Math.random() * 11 + 1)
	var rand3 = Math.floor(Math.random() * 11 + 1)
	var rand4 = Math.floor(Math.random() * 11 + 1)
	console.log(rand1, rand2, rand3, rand4);



	// Keeps trak of totals
	var userTotal = 0;
	var wins = 0;
	var losses = 0;
	var crystals = $('#crystals');
	var counter = 0;

	//add html text to wins and loses
	$("#numberWins").text(wins);
	$("#numberLosses").text(losses);

	//Crystal clicks
	$('#blue').on('click', function () {
		userTotal = userTotal + rand1;
		console.log("New userTotal=" + userTotal);
		$('#score').text(userTotal);
		if (userTotal === random) {
			yay();
		} else if (userTotal > random) {
			loser();
		}
	})

	$('#green').on('click', function () {
		userTotal = userTotal + rand2;
		console.log("New userTotal=" + userTotal);
		$('#score').text(userTotal);
		if (userTotal === random) {
			yay();
		} else if (userTotal > random) {
			loser();
		}
	})

	$('#pink').on('click', function () {
		userTotal = userTotal + rand3;
		console.log("New userTotal=" + userTotal);
		$('#score').text(userTotal);
		if (userTotal === random) {
			yay();
		} else if (userTotal > random) {
			loser();
		}
	})

	$('#purple').on('click', function () {
		userTotal = userTotal + rand4;
		console.log("New userTotal=" + userTotal);
		$('#score').text(userTotal);
		if (userTotal === random) {
			yay();
		} else if (userTotal > random) {
			loser();
		}
	});

	//Function and alert for wins
	function yay() {
		alert("Good job! You won!");
		wins++;
		$('#numberWins').text(wins);
		reset();
	}

	//Function and alert for losses
	function loser() {
		alert("Better luck next time!");
		losses++;
		$('#numberLosses').text(losses);
		reset();
	}

	//Function for game reset
	function reset() {
		random = Math.floor(Math.random() * 101 + 19);
		console.log(random)
		$('#randomNumber').text(random);
		num1 = Math.floor(Math.random() * 11 + 1);
		num2 = Math.floor(Math.random() * 11 + 1);
		num3 = Math.floor(Math.random() * 11 + 1);
		num4 = Math.floor(Math.random() * 11 + 1);
		userTotal = 0;
		$('#totalScore').text(userTotal);
	}

});