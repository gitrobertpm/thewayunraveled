// GRADIENT_1 JS

var a = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
var c = Math.floor(Math.random() * 255);
var d = Math.floor(Math.random() * 255);
var e = Math.floor(Math.random() * 255);
var f = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var h = Math.floor(Math.random() * 255);
var i = Math.floor(Math.random() * 255);
var j = Math.floor(Math.random() * 255);
var k = Math.floor(Math.random() * 255);
var l = Math.floor(Math.random() * 255);

setInterval(function(){ randomBackgroundGradient(); }, 100);

function randomBackgroundGradient() {
	document.getElementById("body").style.background = "repeating-radial-gradient(circle, rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
	
	if (a < 255) {
		a += 1;
	} else if (a > 254) {
		a = Math.floor(Math.random() * 255);
	}
	
	if (b < 255) {
		b += 1;
	} else if (b > 254) {
		b = Math.floor(Math.random() * 255);
	}
	
	if (c < 255) {
		c += 1;
	} else if (c > 254) {
		c = Math.floor(Math.random() * 255);
	}
	
	if (d < 256 && d > 0) {
		d -= 1;
	} else if (d < 1) {
		d = Math.floor(Math.random() * 255);
	}
	
	if (e < 256 && e > 0) {
		e -= 1;
	} else if (e < 1) {
		e = Math.floor(Math.random() * 255);
	}
	
	if (f < 256 && f > 0) {
		f -= 1;
	} else if (f < 1) {
		f = Math.floor(Math.random() * 255);
	}
	
	if (g < 255) {
		g += 1;
	} else if (g > 254) {
		g = Math.floor(Math.random() * 255);
	}
	
	if (h < 255) {
		h += 1;
	} else if (h > 254) {
		h = Math.floor(Math.random() * 255);
	}
	
	if (i < 255) {
		i += 1;
	} else if (i > 254) {
		i = Math.floor(Math.random() * 255);
	}
	
	if (j < 256 && j > 0) {
		j -= 1;
	} else if (j < 1) {
		j = Math.floor(Math.random() * 255);
	}
	
	if (k < 256 && k > 0) {
		k -= 1;
	} else if (k < 1) {
		k = Math.floor(Math.random() * 255);
	}
	
	if (l < 256 && l > 0) {
		l -= 1;
	} else if (l < 1) {
		l = Math.floor(Math.random() * 255);
	}
	
	document.getElementById("rgbValue").innerHTML = '<p>RGB (' + a + ', ' + b + ', ' + c + ')<br>RGB (' + d + ', ' + e + ', ' + f + ')<br>RGB (' + g + ', ' + h + ', ' + i + ')<br>RGB (' + j + ', ' + k + ', ' + l + ')</p>';
	
};

function getRGB() {
		document.getElementById("rgbValueNow").innerHTML = '<p>RGB (' + a + ', ' + b + ', ' + c + ')<br>RGB (' + d + ', ' + e + ', ' + f + ')<br>RGB (' + g + ', ' + h + ', ' + i + ')<br>RGB (' + j + ', ' + k + ', ' + l + ')</p>';
	};
	
