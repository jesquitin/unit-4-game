$(document).ready(function() {
	//
	// Selects a random number between 19 - 120
	var random = Math.floor(Math.random() * 101 + 19);

	// Adds random number to html id "randomNumber"
	$('#randomNumber').text(random);

	// Keeps trak of totals
	var userTotal = 0;
	var wins = 0;
	var loses = 0;
	var numberOptions = [10, 5, 3, 7];
    var crystals = $('#crystals');
    var counter = 0;

	//add html text to wins and loses
	$('#numberWins').text(wins);
	$('#numberLoses').text(loses);

	//Creating the crystals images
	for (var i = 0; i < numberOptions.length; i++) {
		var imgRandom = Math.floor(Math.random() * 11) + 1;
		var imageCrystal = $('<img>');
		//give each crystal a class of  of ".crystal-image
        imageCrystal.addClass('crystal-image');
        
        //image path
        imageCrystal.attr("src", "assets/images/blue.jpg");
        imageCrystal.attr("src", "assets/images/green.jpg");
        imageCrystal.attr("src", "assets/images/purple.jpg");
        imageCrystal.attr("src", "assets/images/pink.jpg");

        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        console.log(imgRandom);
        
        //appending crystal images to html div cystals
		crystals.append(imageCrystal);
    }
    
    // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.on("click", ".crystal-image", function() {

  //Assigning the crystals a point value
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    console.log(crystalValue);
  
     });
});
