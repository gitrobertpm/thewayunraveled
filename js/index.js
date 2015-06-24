// INDEX JS

////////////////
//ICON IMAGES//
//////////////

//SHORTHAND FUNCTION FOR SETTING BACKGROUND IMAGES ON ICON DIVS 
function set(idee, value) {
	var setIdee = document.getElementById(idee);
	setIdee.style.backgroundImage = value;
};

//SET ICON IMAGES
set("missionStatementIcon", "url('img/misc_icons/missionStatement.png')")
set("aboutIcon", "url('img/misc_icons/about.png')");
set("resourcesIcon", "url('img/misc_icons/resources.png')");
set("contactIcon", "url('img/misc_icons/contact.png')");
set("deciderIcon", "url('img/misc_icons/decider2.png')");
set("odomIcon", "url('img/misc_icons/odom.png')");
set("projectsIcon", "url('img/misc_icons/projects.png')");
set("quoteIcon", "url('img/misc_icons/quote.png')");
set("encouragementIcon", "url('img/misc_icons/encouragement.png')");
set("bird", "url('img/misc_icons/bird.png')");


//////////////////////
//MISSION STATEMENT//
////////////////////

//GET WINDOW WIDTH
var width = window.innerWidth;

//SHORTHAND STYLING FUNCTION FOR MISSION STATEMENT, QUOTE, & ENCOURAGEMENT
function set2(idee, h, w, mL, bg, z, bT, bB, pT, pB, bS) {
	var setIdee = document.getElementById(idee);
	setIdee.style.height = h;
	setIdee.style.width = w;
	setIdee.style.marginLeft = mL;
	setIdee.style.background = bg;
	setIdee.style.zIndex = z;
	setIdee.style.borderTop = bT;
	setIdee.style.borderBottom = bB;
	setIdee.style.paddingTop = pT;
	setIdee.style.paddingBottom = pB;
	setIdee.style.backgroundSize = bS;
};

//OPEN MISSION STATEMENT DIV
function missionStatement() {
	if (width < 601) {
		set2("missionStatementDiv", "auto", "100%", "-50%", "url('img/backgrounds/obBlocksSm.gif')", "999", "5px solid black", "5px solid black", "35px", "50px", "100% 100%");
	} else if (width > 600) {
		set2("missionStatementDiv", "auto", "100%", "-50%", "url('img/backgrounds/obBlocks.gif')", "999", "5px solid black", "5px solid black", "35px", "50px", "100% 100%");
	}
	document.getElementById("missionStatementIcon").style.filter = "hue-rotate(180deg)";
	document.getElementById("titleMS").style.display = "none";
	document.getElementById("msTextImg").style.display = "inline-block";
	document.getElementById("coolGlobe").style.display = "inline-block";
	document.getElementById("coolGlobe").innerHTML = '<div id="continentalLightshow"><div id="earth"></div></div>';
	set("msTextImg", "url('img/misc_icons/msTextImg.png')");
	if (width > 1099) {
		document.getElementById("missionStatementDiv").style.top = "0";
	}
};

	// GRADIENT FOR SPIINING GLOBE IS AT THE BOTTOM OF THE PAGE

//CLOSE MISSION STATEMENT DIV
function closeMS() {
	set2("missionStatementDiv", "150px", "250px", "-125px", "none", "0", "none", "none", "0", "0");
	document.getElementById("missionStatementIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	document.getElementById("titleMS").style.display = "block";
	document.getElementById("msTextImg").style.display = "none";
	document.getElementById("coolGlobe").style.display = "none";
	if (width > 1099) {
		document.getElementById("missionStatementDiv").style.top = "75px";
	}
};


///////////
//QUOTES//
/////////

//ARRAY OF QUOTES AND ACCOMPANYING IMAGES
var quotes = ['<img src="img/misc_icons/falling.png"><br><br><p class=\"quote\">&ldquo;The bad news is you&rsquo;re falling through the air&#44; nothing to hang on to&#44; no parachute.  The good news is there&rsquo;s no ground.&rdquo;</p><p class=\"quoted\">Chogyam Trungpa Rinpoche</p>', '<img src="img/misc_icons/helpingHands.png"><br><br><p class=\"quote\">&ldquo;Only a life lived for others is a life worthwhile.&rdquo;</p><p class=\"quoted\">Albert Einstein</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;True knowledge exists in knowing that you know nothing.&rdquo;</p><p class=\"quoted\">Socrates</p>', '<img src="img/misc_icons/sunrise.jpg"><br><br><p class=\"quote\">&ldquo;When you rise in the morning&#44 give thanks for the light&#44 for your life&#44 for your strength.  Give thanks for your food and for the joy of living.  If you see no reason to give thanks&#44 the fault lies in yourself.&rdquo;</p><p class=\"quoted\">Tecumseh</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;True happiness is to enjoy the present&#44 without anxious dependence upon the future, not to amuse ourselves with either hopes or fears&#44 but to rest satisfied with what we have&#44 which is sufficient&#44 for he that is so&#44 wants nothing.&rdquo;</p><p class=\"quoted\">Seneca</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;It takes as much energy to wish as it does to plan.&rdquo;</p><p class=\"quoted\">Eleanor Roosevelt</p>', '<img src="img/misc_icons/projects2.png"><br><br><p class=\"quote\">&ldquo;I long to accomplish a great and noble task&#44 but it is my chief duty to accomplish humble tasks as though they were great and noble. The world is moved along&#44 not only by the mighty shoves of its heroes&#44 but also by the aggregate of the tiny pushes of each honest worker.&rdquo;</p><p class=\"quoted\">Helen Keller</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;It&rsquo;s hard to beat a person who never gives up.&rdquo;</p><p class=\"quoted\">Babe Ruth</p>', '<img src="img/misc_icons/helpingHands.png"><br><br><p class=\"quote\">&ldquo;Kindness is the language which the deaf can hear and the blind can see.&rdquo;</p><p class=\"quoted\">Mark Twain</p>', '<img src="img/misc_icons/ember2.jpg"><br><br><p class=\"quote\">&ldquo;The people who are trying to make the world worse never take a day off&#44 why should I. Light up the darkness.&rdquo;</p><p class=\"quoted\">Bob Marley</p>', '<img src="img/misc_icons/dancing.jpg"><br><br><p class=\"quote\">&ldquo;And those who were seen dancing were thought to be insane by those who could not hear the music.&rdquo;</p><p class=\"quoted\">Friedrich Nietzsche</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;The gift of learning to meditate is the greatest gift you can give yourself in this lifetime.&rdquo;</p><p class=\"quoted\">Sogyal Rinpoche</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;By three methods we may learn wisdom. First&#44 by reflection&#44 which is noblest.  Second&#44 by imitation&#44 which is easiest.  And third&#44 by experience&#44 which is the bitterest.&rdquo;</p><p class=\"quoted\">Confucious</p>', '<img src="img/misc_icons/mGlass.jpg"><br><br><p class=\"quote\">&ldquo;The unexamined life is not worth living.&rdquo;</p><p class=\"quoted\">Socrates</p>', '<img src="img/misc_icons/yinyang.jpg"><br><p class=\"quote\">&ldquo;Like water which can clearly mirror the sky and the trees only so long as its surface is undisturbed&#44 the mind can only reflect the true image of the self when it is tranquil and wholly relaxed.&rdquo;</p><p class=\"quoted\">Indra Devi</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;Watch your thoughts&#44 they become words. Watch your words&#44 they become actions.  Watch your actions&#44 they become habits. Watch your habits&#44 they become character.  Watch your character&#44 it becomes your destiny.&rdquo;</p><p class=\"quoted\">Lao Tzu</p>', '<img src="img/misc_icons/sprout.png"><br><br><p class=\"quote\">&ldquo;...The smallest sprout shows that there is really no death&#44 and if ever there was&#44 it led forward life&#44 and does not wait at the end to arrest it&#44 and ceas&rsquo;d the moment life appear&rsquo;d.  All goes onward and outward&#44 nothing collapses&#44 and to die is different from what anyone supposed&#44 and luckier.&rdquo;</p><p class=\"quoted\">Walt Whitman</p>', '<img src="img/misc_icons/helpingHands.png"><br><br><p class=\"quote\">&ldquo;The world is a dangerous place to live&#44 not because of the people who are evil&#44 but because of the people who don&rsquo;t do anything about it.&rdquo;</p><p class=\"quoted\">Albert Einstein</p>', '<img src="img/misc_icons/helpingHands.png"><br><br><p class=\"quote\">&ldquo;At the end of the day&#44 people won&rsquo;t remember what you said or did&#44 they will remember how you made them feel.&rdquo;</p><p class=\"quoted\">Maya Angelou</p>', '<img src="img/misc_icons/yinyang.jpg"><br><br><p class=\"quote\">&ldquo;Life is a series of natural and spontaneous changes.  Don&rsquo;t resist them &mdash; that only creates sorrow.  Let reality be reality.  Let things flow naturally forward in whatever way they like.&rdquo;</p><p class=\"quoted\">Lao Tzu</p>'];

//OPEN QUOTE DIV, CHANGE STYLING, SET QUOTE
function quote() {
	if (width < 601) {
		set2("quoteDiv", "auto", "100%", "-50%", "url('img/backgrounds/obBlocksSm.gif')", "999", "5px solid black", "5px solid black", "35px", "50px", "100% 100%");
	} else if (width > 600) {
		set2("quoteDiv", "auto", "100%", "-50%", "url('img/backgrounds/obBlocks.gif')", "999", "5px solid black", "5px solid black", "35px", "50px", "100% 100%");
	}
	document.getElementById("quoteIcon").style.filter = "hue-rotate(180deg)";
	var randomQuotes = Math.floor(Math.random() * quotes.length);
	var iq = randomQuotes;
	document.getElementById('innerQuoteDiv').innerHTML = quotes[iq];
};

//GENERATE NEW QUOTE
function newQuote() {
	var randomQuotes = Math.floor(Math.random() * quotes.length);
	var inq = randomQuotes;
	document.getElementById('innerQuoteDiv').innerHTML = quotes[inq];
};

//CLOSE QUOTE DIV
function closeQ() {
	if (width < 600) {
		set2("quoteDiv", "175px", "250px", "-125px", "none", "0", "none", "none", "0", "0");
		document.getElementById("quoteIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	} else if (width > 599 && width < 1100) {
		set2("quoteDiv", "175px", "250px", "-300px", "none", "0", "none", "none", "0", "0");
		document.getElementById("quoteIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	} else if (width > 1099) {
		set2("quoteDiv", "175px", "250px", "-550px", "none", "0", "none", "none", "0", "0");
		document.getElementById("quoteIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	}
};

//////////////////
//ENCOURAGEMENT//
////////////////

//ARRAY OF ENCOURAGEMENT SUGGECTIONS
var haveYou = ['said thank you to anyone', 'made a list of the things you want to accomplish', 'worked on something good', 'gotten any exercise', 'learned anything new', 'done a good deed', 'taken the time to have some fun', 'taken the time to relax', 'taken the time to reflect on things&#44 how you are doing&#44 and what you might like to do better', 'admitted your mistakes so that you may learn from them', 'found joy today, or have you helped anyone else find joy in their own lives', 'brought your A-game', 'done enough to feel proud if your last day was'];

//OPEN ENCOURAGEMENT DIV, CHANGE STYLING, GENERATE ENCOURAGEMENT
function encouragement() {
	if (width < 601) {
		set2("encouragementDiv", "auto", "100%", "-50%", "url('img/backgrounds/obBlocksSm.gif')", "999", "5px solid black", "5px solid black", "35px", "50px", "100% 100%");
	} else if (width > 600) {
		set2("encouragementDiv", "auto", "100%", "-50%", "url('img/backgrounds/obBlocks.gif')", "999", "5px solid black", "5px solid black", "35px", "50px", "100% 100%");
	}
	document.getElementById("encouragementIcon").style.filter = "hue-rotate(180deg)";
	var randomEncouragement = Math.floor(Math.random() * haveYou.length);
	var ie = randomEncouragement;
	document.getElementById('innerEncouragementDiv').innerHTML = "<p><span style='font-size: 1.5em; color: blue;'>&#9786;</span><br><br>No pressure or judgement<br><br>This is just about looking out for your life because it's important<br><br>And because what we get out of this life is approximate to what we put into it<br><br><span style='font-size: 1.5em; color: orange;'>&#9786;</span></p><p>So, have you " + haveYou[ie] + " today?</p>";
};

//SHORTHAND FUNCTION FOR SETTING BUTTON STATES 
function but(idee, value) {
	var setIdee = document.getElementById(idee);
	setIdee.disabled = value;
};

// INITIAL BUTTON STATES
but("yes", false);
but("no", false);

//ARRAY OF ENCOUREGEMENT APPROVAL
var affirmative = ['<p>Awesome!</p>', '<p>Well done!</p>', '<p>Way to go!</p>', '<p>Nice Work!</p>', '<p>Keep up the good work!</p>'];

// RESPONSE BUTTONS
function yes() {
	var randomAffirmative = Math.floor(Math.random() * affirmative.length);
	var ia = randomAffirmative;
	document.getElementById('innerEncouragementDiv').innerHTML = affirmative[ia] + "<p><span style='font-size: 1.5em; color: blue;'>&#9786;</span><br><br>Click the &ldquo;<span style='color: blue;'>more encouragement</span>&rdquo; button below, and let's see if you can turn that good thing into a streak of good things.</p>";
	but("yes", true);
	but("no", true);
};

function no() {
	document.getElementById('innerEncouragementDiv').innerHTML = "<p class='message'>It&rsquo;s okay<br><br>Don&rsquo;t feel bad<br><br>If the day's not over, why not take whatever time is left and try to do something awesome<br><br>Otherwise, just try again tomorrow, and hopefully you will have a wonderful day<br><br>Good luck!<br><br><span style='font-size: 1.5em; color: blue;'>&#9786;</span></p>";
	but("yes", true);
	but("no", true);
};

function moreEncouragement() {
	var randomEncouragement = Math.floor(Math.random() * haveYou.length);
	var ime = randomEncouragement;
	document.getElementById('innerEncouragementDiv').innerHTML = "<p>Have you " + haveYou[ime] + " today?<br><br><span style='font-size: 1.5em; color: blue;'>&#9786;</span></p>";
	but("yes", false);
	but("no", false);
};

//CLOSE ENCOURAGEMENT DIV
function closeE() {
	if (width < 600) {
		set2("encouragementDiv", "150px", "250px", "-125px", "none", "0", "none", "none", "0", "0");
		document.getElementById("encouragementIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	} else if (width > 599 && width < 1100) {
		set2("encouragementDiv", "150px", "250px", "50px", "none", "0", "none", "none", "0", "0");
		document.getElementById("encouragementIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	} else if (width > 1099) {
		set2("encouragementDiv", "150px", "250px", "300px", "none", "0", "none", "none", "0", "0");
		document.getElementById("encouragementIcon").style.filter = "drop-shadow(10px 10px 10px rgba(0,0,0,0.3))";
	}
	but("yes", false);
	but("no", false);
};

/////////////////////////////////////////////////////////////////
//BACKGROUND GRADIENT ANIMATION FOR GLOBE IN MISSION STATEMENT//
///////////////////////////////////////////////////////////////

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

setInterval(function(){ randomBackgroundGradient(); }, 25);


function randomBackgroundGradient() {
	document.getElementById("continentalLightshow").style.background = "repeating-linear-gradient(rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1), rgba(" + a + "," + b + "," + c + ", 0.9), rgba(" + d + "," + e + "," + f + ", 1), rgba(" + g + "," + h + "," + i + ", 1), rgba(" + j + "," + k + "," + l + ", 1))";
	
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
};