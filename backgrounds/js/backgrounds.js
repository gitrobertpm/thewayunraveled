// INDEX JS

// COLOR THEMES
var coloredBlocks = '<div class="blocks"><div class="red top right"></div><div class="red top left"></div><div class="red bottom right"></div><div class="red bottom left"></div><div class="purple top"></div><div class="purpleSides right"></div><div class="purple bottom"></div><div class="purpleSides left"></div><div class="orange or_right or_first"></div><div class="orange or_left or_second"></div><div class="orange or_right or_third"></div><div class="orange or_left or_fourth"></div><div class="yellow y_left y_first"></div><div class="yellow y_right y_second"></div><div class="yellow y_left y_third"></div><div class="yellow y_right y_fourth"></div></div>';

var blueLightSaber = '<div class="innerColumn"></div>';
var greenEyesLeft = '<div class="smileLeft"></div><div class="greenEyes"><div class="greenEyesPupil"></div></div>';
var greenEyesRight = '<div class="smileRight"></div><div class="greenEyes"><div class="greenEyesPupil"></div></div>';

// BRIGHT BORDERS AND MESAGE WINDOWS
var border1 = document.getElementById("border_1").style;
var border3 = document.getElementById("border_3").style;
var border4 = document.getElementById("border_4").style;
var message1 = document.getElementById("message_1").style;
var message2 = document.getElementById("message_2").style;
var message3 = document.getElementById("message_3").style;
var message4 = document.getElementById("message_4").style;


// COLOR THEME FUNCTIONS
function redTheme() {
	document.getElementById('col_L').innerHTML = coloredBlocks;
	document.getElementById('col_R').innerHTML = coloredBlocks;
	document.getElementById('col_L').style.background = "black";
	document.getElementById('col_R').style.background = "black";
	document.getElementById('cr1').style.color = "red";
	document.getElementById('cr2').style.color = "red";
	border1.background = "rgba(255,0,0,0.5)";
	border1.boxShadow = "0px 2px 3px red inset, 0px -2px 3px red inset";
	border3.background = "rgba(255,0,0,0.5)";
	border3.boxShadow = "0px 2px 3px red inset, 0px -2px 3px red inset";
	border4.background = "rgba(255,0,0,0.5)";
	border4.boxShadow = "0px 2px 3px red inset, 0px -2px 3px red inset";
	message1.background = "rgba(128, 0, 0, 0.5)";
	message1.boxShadow = "2px 2px 3px black inset, 0px -2px 3px black inset";
	message2.background = "rgba(255, 0, 0, 0.5)";
	message2.boxShadow = "2px 2px 3px black inset, 0px -2px 3px black inset";
	message3.background = "rgba(255, 140, 0, 0.5)";
	message3.boxShadow = "2px 2px 3px black inset, 0px -2px 3px black inset";
	message4.background = "rgba(255, 255, 0, 0.5)";
	message4.boxShadow = "2px 2px 3px black inset, 0px -2px 3px black inset";
};

function smallRedTheme() {
	border1.background = "rgba(255,0,0,0.5)";
	border1.boxShadow = "0px 2px 3px red inset, 0px -2px 3px red inset";
	border3.background = "rgba(255,0,0,0.5)";
	border3.boxShadow = "0px 2px 3px red inset, 0px -2px 3px red inset";
	border4.background = "rgba(255,0,0,0.5)";
	border4.boxShadow = "0px 2px 3px red inset, 0px -2px 3px red inset";
	message1.background = "rgba(100, 0, 0, 0.5)";
	message1.boxShadow = "2px 2px 3px red inset, 0px -2px 3px red inset";
	message2.background = "rgba(150, 0, 0, 0.5)";
	message2.boxShadow = "2px 2px 3px red inset, 0px -2px 3px red inset";
	message3.background = "rgba(200, 0, 0, 0.5)";
	message3.boxShadow = "2px 2px 3px red inset, 0px -2px 3px red inset";
	message4.background = "rgba(255, 0, 0, 0.5)";
	message4.boxShadow = "2px 2px 3px red inset, 0px -2px 3px red inset";
	document.getElementById('cr1').style.color = "red";
	document.getElementById('cr2').style.color = "red";
};

function greenTheme() {
	document.getElementById('col_L').innerHTML = greenEyesLeft;
	document.getElementById('col_R').innerHTML = greenEyesRight;
	document.getElementById('col_L').style.background = "linear-gradient(black, darkgreen, green, lightgreen, lightgreen, lightgreen, white)";
	document.getElementById('col_R').style.background = "linear-gradient(black, darkgreen, green, lightgreen, lightgreen, lightgreen, white)";
	document.getElementById('cr1').style.color = "green";
	document.getElementById('cr2').style.color = "green";
	border1.background = "rgba(0,255,0,0.3)";
	border1.boxShadow = "0px 2px 3px lawngreen inset, 0px -2px 3px lawngreen inset";
	border3.background = "rgba(0,255,0,0.3)";
	border3.boxShadow = "0px 2px 3px lawngreen inset, 0px -2px 3px lawngreen inset";
	border4.background = "rgba(0,255,0,0.3)";
	border4.boxShadow = "0px 2px 3px lawngreen inset, 0px -2px 3px lawngreen inset";
	message1.background = "rgba(0, 255, 0, 0.3)";
	message1.boxShadow = "0px 2px 3px black inset, 0px -2px 3px black inset";
	message2.background = "rgba(0, 185, 0, 0.3)";
	message2.boxShadow = "2px 2px 3px black inset, 2px -2px 3px black inset";
	message3.background = "rgba(0, 125, 0, 0.3)";
	message3.boxShadow = "0px 2px 3px black inset, 0px -2px 3px black inset";
	message4.background = "rgba(0, 75, 0, 0.3)";
	message4.boxShadow = "2px 2px 3px black inset, 2px -2px 3px black inset";
};

function smallGreenTheme() {
	border1.background = "rgba(0,255,0,0.3)";
	border1.boxShadow = "0px 2px 3px lawngreen inset, 0px -2px 3px lawngreen inset";
	border3.background = "rgba(0,255,0,0.3)";
	border3.boxShadow = "0px 2px 3px lawngreen inset, 0px -2px 3px lawngreen inset";
	border4.background = "rgba(0,255,0,0.3)";
	border4.boxShadow = "0px 2px 3px lawngreen inset, 0px -2px 3px lawngreen inset";
	message1.background = "rgba(0, 255, 0, 0.3)";
	message1.boxShadow = "0px 2px 3px green inset, 0px -2px 3px green inset";
	message2.background = "rgba(0, 185, 0, 0.3)";
	message2.boxShadow = "2px 2px 3px green inset, 2px -2px 3px green inset";
	message3.background = "rgba(0, 125, 0, 0.3)";
	message3.boxShadow = "0px 2px 3px green inset, 0px -2px 3px green inset";
	message4.background = "rgba(0, 75, 0, 0.3)";
	message4.boxShadow = "2px 2px 3px green inset, 2px -2px 3px green inset";
	document.getElementById('cr1').style.color = "green";
	document.getElementById('cr2').style.color = "green";
};

function blueTheme() {
	document.getElementById('col_L').innerHTML = blueLightSaber;
	document.getElementById('col_R').innerHTML = blueLightSaber;
	document.getElementById('col_L').style.background = "black";
	document.getElementById('col_R').style.background = "black";
	document.getElementById('cr1').style.color = "blue";
	document.getElementById('cr2').style.color = "blue";
	border1.background = "rgba(0,0,255,0.5)";
	border1.boxShadow = "0px 2px 3px blue inset, 0px -2px 3px blue inset";
	border3.background = "rgba(0,0,255,0.5)";
	border3.boxShadow = "0px 2px 3px blue inset, 0px -2px 3px blue inset";
	border4.background = "rgba(0,0,255,0.5)";
	border4.boxShadow = "0px 2px 3px blue inset, 0px -2px 3px blue inset";
	message1.background = "rgba(0, 235, 255, 0.5)";
	message1.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	message2.background = "rgba(0, 200, 255, 0.5)";
	message2.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	message3.background = "rgba(0, 165, 255, 0.5)";
	message3.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	message4.background = "rgba(0, 125, 255, 0.5)";
	message4.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
};

function smallBlueTheme() {
	border1.background = "rgba(0,0,255,0.5)";
	border1.boxShadow = "0px 2px 3px blue inset, 0px -2px 3px blue inset";
	border3.background = "rgba(0,0,255,0.5)";
	border3.boxShadow = "0px 2px 3px blue inset, 0px -2px 3px blue inset";
	border4.background = "rgba(0,0,255,0.5)";
	border4.boxShadow = "0px 2px 3px blue inset, 0px -2px 3px blue inset";
	message1.background = "rgba(0, 235, 255, 0.5)";
	message1.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	message2.background = "rgba(0, 200, 255, 0.5)";
	message2.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	message3.background = "rgba(0, 165, 255, 0.5)";
	message3.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	message4.background = "rgba(0, 125, 255, 0.5)";
	message4.boxShadow = "2px 2px 3px deepskyblue inset, 0px -2px 3px deepskyblue inset";
	document.getElementById('cr1').style.color = "blue";
	document.getElementById('cr2').style.color = "blue";
};

// GET RANDOM NUMBERS
var randomTheme = Math.floor(Math.random() * 12);

// GET WINDOW WIDTH
var width = window.innerWidth;

// SET PAGE COLOR THEME
setInterval(function(){ backgroundShift(); }, 1000);

function backgroundShift() {
	if (randomTheme < 5 && width > 1199) {
		redTheme();
		if (randomTheme < 12) {
			randomTheme += 1;
		} else if (randomTheme > 11) {
			randomTheme = Math.floor(Math.random() * 12);
		}
	} else if (randomTheme > 4 && randomTheme < 9 && width > 1199) {
		blueTheme();
		if (randomTheme < 12) {
			randomTheme += 1;
		} else if (randomTheme > 11) {
			randomTheme = Math.floor(Math.random() * 12);
		}
	} else if (randomTheme > 8 && width > 1199) {
		greenTheme();
		if (randomTheme < 12) {
			randomTheme += 1;
		} else if (randomTheme > 11) {
			randomTheme = Math.floor(Math.random() * 12);
		}
	} else if (randomTheme < 4 && width < 1200) {
		smallRedTheme();
		if (randomTheme < 12) {
			randomTheme += 1;
		} else if (randomTheme > 11) {
			randomTheme = Math.floor(Math.random() * 12);
		}
	} else if (randomTheme > 3 && randomTheme < 9 && width < 1200) {
		smallBlueTheme();
		if (randomTheme < 12) {
			randomTheme += 1;
		} else if (randomTheme > 11) {
			randomTheme = Math.floor(Math.random() * 12);
		}
	} else if (randomTheme > 8 && width < 1200) {
		smallGreenTheme();
		if (randomTheme < 12) {
			randomTheme += 1;
		} else if (randomTheme > 11) {
			randomTheme = Math.floor(Math.random() * 12);
		}
	}
};
