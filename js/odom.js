// GALACTIC ODOMTER JS


// THIS FUNCTION CREATES THE TICKING CLOCK AND IS CALLED IN THE BODY TAG OF THE HTML.  A LOT OF WHAT I USED FOR THE CLOCK CAME FROM THIS COOL ARTICLE I FOUND: http://www.elated.com/articles/creating-a-javascript-clock/  
// BUT I MADE SOME CHANGES 
function updateClock() {
	var currentTime = new Date ( );
	var currentHours = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );

	// WEEKDAYS FROM NUMBERS TO NAMES
	var weekday = new Array(7);
	weekday[0]=  "Sunday, ";
	weekday[1] = "Monday, ";
	weekday[2] = "Tuesday, ";
	weekday[3] = "Wednesday, ";
	weekday[4] = "Thursday, ";
	weekday[5] = "Friday, ";
	weekday[6] = "Saturday, ";
	var w = weekday[currentTime.getDay()];
	
	// MONTHS FORM NUMBERS TO NAMES
	var month = new Array();
	month[0] = "January ";
	month[1] = "February ";
	month[2] = "March ";
	month[3] = "April ";
	month[4] = "May ";
	month[5] = "June ";
	month[6] = "July ";
	month[7] = "August ";
	month[8] = "September ";
	month[9] = "October ";
	month[10] = "November ";
	month[11] = "December ";
	var m = month[currentTime.getMonth()];
	
	var md = currentTime.getDate(); 
	
	var y = currentTime.getFullYear();
	
	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

	// Convert the hours component to 12-hour format if needed
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

	// Convert an hours component of "0" to "12"
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	// Compose the string for display
	var currentTimeString = "As of " + w + m + md + ", " + y + ", at " + currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay + ", you have traveled approximately, ";

	// Update the time display
	document.getElementById("clockP").innerHTML = currentTimeString;
};

// GETS INPUTS, CALCULATES SPACE-MILES TRAVELED, AND PRINTS TO THE SCREEN IF CONDITIONS ARE RIGHT
function getMiles() {
	var dob_Y = document.getElementById("yearBorn").value;
	var dob_M = document.getElementById("monthBorn").value;
	var dob_D = document.getElementById("dayBorn").value;
	
	if (dob_Y == "" || isNaN(dob_Y) || dob_M == "" || isNaN(dob_M) || dob_D == "" || isNaN(dob_D)) {
		alert("All entries must be in the form of numbers. Try again, please.");
	} else {
	
		setMileCounter = setInterval(function(){ mileCounter(); }, 100);
		function mileCounter() {
			var currentTime = new Date ( );
			var bd = new Date(dob_Y,dob_M - 1,dob_D);
			var odometerReading = (currentTime - bd) / 1000 * 797;
			document.getElementById("odometer").innerHTML = Math.round(odometerReading).toLocaleString();
			document.getElementById("yearBorn").disabled = true;
			document.getElementById("monthBorn").disabled = true;
			document.getElementById("dayBorn").disabled = true;
		}
	}
};

// RESETS EVERYTHING BACK TO SCRATCH
function reset() {
	document.getElementById("yearBorn").disabled = false;
	document.getElementById("monthBorn").disabled = false;
	document.getElementById("dayBorn").disabled = false;
	document.getElementById("yearBorn").value = "";
	document.getElementById("monthBorn").value = "";
	document.getElementById("dayBorn").value = "";
	clearInterval(setMileCounter);
	document.getElementById("odometer").innerHTML = "000,000,000,000,000,000"
}

 // ADD BACKGROUNDIMAGES TO SOCIAL MEDIA ICONS
document.getElementById("linkedin").style.backgroundImage= "url('img/social_icons/linkedin.png')";
document.getElementById("github").style.backgroundImage= "url('img/social_icons/github.png')";
document.getElementById("treehouse").style.backgroundImage= "url('img/social_icons/treehouse.png')";
document.getElementById("codepen").style.backgroundImage= "url('img/social_icons/codepen.png')";
document.getElementById("behance").style.backgroundImage= "url('img/social_icons/behance.png')";