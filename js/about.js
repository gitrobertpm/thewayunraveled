

var set = function(idee, bg) {
	var setIdee = document.getElementById(idee);
	setIdee.style.background = bg;
};

set("background", "url('img/misc_icons/about.png')")

set("aTitleIcon", "url('img/misc_icons/title3.jpg')")
set("aObjective_1Icon", "url('img/misc_icons/objectiveBlk.jpg')")
set("aMotivationIcon", "url('img/misc_icons/ember3.jpg')");
set("aTechIcon", "url('img/misc_icons/projectsColor.jpg')");
set("aUraIcon", "url('img/misc_icons/aur1.jpg')");
set("aYyIcon", "url('img/misc_icons/yinyang2.jpg')");
set("aSummaryIcon", "url('img/misc_icons/objectiveBlk.jpg')");
set("aExperienceIcon", "url('img/misc_icons/edExp.jpg')");
set("aContactIcon", "url('img/misc_icons/contact2.jpg')");
set("aSkillsIcon", "url('img/misc_icons/skills2.jpg')");
set("aProjectsIcon", "url('img/misc_icons/projectsBl.jpg')");
set("aBioIcon", "url('img/misc_icons/bio.jpg')");

set("projImg0", "url('img/pageSamples/odom.jpg')");
set("projImg1", "url('img/pageSamples/decider.jpg')");
set("projImg2", "url('img/pageSamples/singleGradientOrb.jpg')");
set("projImg3", "url('img/pageSamples/multipleGradientOrbs.jpg')");
set("projImg4", "url('img/pageSamples/layeredGradients.jpg')");
set("projImg5", "url('img/pageSamples/autumnBlocks.jpg')");
set("projImg6", "url('img/pageSamples/blueLightSaber.jpg')");
set("projImg7", "url('img/pageSamples/greenSnake.jpg')");

set("skillLogo0", "url('img/misc_icons/html.jpg')");
set("skillLogo1", "url('img/misc_icons/css.jpg')");
set("skillLogo2", "url('img/misc_icons/js.jpg')");
set("skillLogo3", "url('img/misc_icons/ai.jpg')");
set("skillLogo4", "url('img/misc_icons/ps.jpg')");
set("skillLogo5", "url('img/misc_icons/github.jpg')");
set("skillLogo6", "url('img/misc_icons/jq.jpg')");
set("skillLogo7", "url('img/misc_icons/ajax.jpg')");
set("skillLogo8", "url('img/misc_icons/node.jpg')");
set("skillLogo9", "url('img/misc_icons/angular.jpg')");
set("skillLogo10", "url('img/misc_icons/php.jpg')");
set("skillLogo11", "url('img/misc_icons/mysql.jpg')");

//set("aboutSection3", "url('img/misc_icons/aboutSm.png')");



//GET WINDOW WIDTH
var width = window.innerWidth;

var set2 = function(idee, h, w, bg, mL, z, t) {
	var setIdee = document.getElementById(idee);
	setIdee.style.height = h;
	setIdee.style.width = w;
	setIdee.style.background = bg;
	setIdee.style.marginLeft = mL;
	setIdee.style.zIndex = z;
	setIdee.style.top= t;
};

function aboutSite() {
	if (width < 600) {
		set2("aboutSection1", "auto", "100%", "white", "auto", "999");
	} else if (width > 599) {
		set2("aboutSection1", "700px", "100%", "white", "-50%", "999", "0");
	}
};

function closeSection1() {
	if (width < 601) {
		set2("aboutSection1", "175px", "250px", "none", "auto", "0");
	} else if (width > 600 && width < 1100) {
		set2("aboutSection1", "175px", "250px", "none", "-250px", "0", "350px");
	} else if (width > 1099) {
		set2("aboutSection1", "175px", "250px", "none", "-350px", "0", "420px");
	}
}

function aboutAuthor() {
	if (width < 600) {
		set2("aboutSection2", "auto", "100%", "white", "auto", "999");
	} else if (width > 599) {
		set2("aboutSection2", "700px", "100%", "white", "-50%", "999", "0");
		document.getElementById("myInfo_1").style.transform = "rotate(0deg)";
		document.getElementById("myInfo_2").style.transform = "rotate(0deg)";
	}
};

function closeSection2() {
	if (width < 601) {
		set2("aboutSection2", "175px", "250px", "none", "auto", "0");
	} else if (width > 600 && width < 1100) {
		set2("aboutSection2", "175px", "250px", "none", "25px", "0", "350px");
		document.getElementById("myInfo_1").style.transform = "rotate(-90deg)";
		document.getElementById("myInfo_2").style.transform = "rotate(90deg)";
	} else if (width > 1099) {
		set2("aboutSection2", "175px", "250px", "none", "100px", "0", "420px");
		document.getElementById("myInfo_1").style.transform = "rotate(-90deg)";
		document.getElementById("myInfo_2").style.transform = "rotate(90deg)";
	}
}

function aTitle() {
	if (width < 600) {
		set2("aTitle", "auto", "100%", "white", "auto", "999");
		document.getElementById("aTitle").style.borderTop = "5px solid black";
		document.getElementById("aTitle").style.borderBottom = "5px solid black";
	} else if (width > 599 && width < 1100) {
		set2("aTitle", "750px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection1").style.height = "765px";
		document.getElementById("aTitle").style.borderBottom = "5px solid black";
	} else if (width > 1099) {
		set2("aTitle", "715px", "100%", "white", "-50%", "999", "0");
	}
	set("aTitleIcon", "url('img/misc_icons/title4.jpg')");
	document.getElementById("aTitleIcon").style.width = "250px";
};

function closeTitle() {
	if (width < 601) {
		set2("aTitle", "150px", "250px", "none", "auto", "0");
		document.getElementById("aTitle").style.borderTop = "none";
		document.getElementById("aTitle").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aTitle", "150px", "250px", "none", "-325px", "0", "200px");
		document.getElementById("aboutSection1").style.height = "715px";
		document.getElementById("aTitle").style.borderBottom = "none";
	} else if (width > 1099) {
		set2("aTitle", "150px", "250px", "none", "-450px", "0", "200px");
	}
	set("aTitleIcon", "url('img/misc_icons/title3.jpg')");
	document.getElementById("aTitleIcon").style.width = "75px";
};

var objectives1 = ["illuminate and/or entertain", "encourage and nurture the good in the world", "put a smile on someone's face", "demonstrate my skills to potential employers", "be a laboratory where my ideas can come to life", "be a dojo where I can hone my abilities"];
var ranObj = Math.floor(Math.random() * objectives1.length);
var objectiveTimer1;

function aObjective_1() {
	if (width < 600) {
		set2("aObjective_1", "auto", "100%", "white", "auto", "999");
		document.getElementById("aObjective_1").style.borderTop = "5px solid black";
		document.getElementById("aObjective_1").style.borderBottom = "5px solid black";
	} else if (width > 599) {
		set2("aObjective_1", "700px", "100%", "white", "-50%", "999", "0");
	}
	set("aObjective_1Icon", "url('img/misc_icons/objectiveGr.jpg')");
	document.getElementById("aObjective_1Icon").style.width = "125px";
	document.getElementById("objText1").innerHTML = "<i>wait for it...</i>";
	document.getElementById("objText1").style.animation = "textGrow 5s ease-in-out infinite";
	objectiveTimer1 = setInterval(function(){ randomObjective1(); }, 5000);
	function randomObjective1() {
		if (ranObj < objectives1.length - 1) {
			ranObj += 1;
		} else {ranObj = 0}
		document.getElementById("objText1").innerHTML = objectives1[ranObj];
	};
};

function closeObjective_1() {
	if (width < 601) {
		set2("aObjective_1", "150px", "250px", "none", "auto", "0");
		document.getElementById("aObjective_1").style.borderTop = "none";
		document.getElementById("aObjective_1").style.borderBottom = "none";
	} else if (width > 600) {
		set2("aObjective_1", "150px", "250px", "none", "-125px", "0", "250px");
	}
	set("aObjective_1Icon", "url('img/misc_icons/objectiveBlk.jpg')");
	document.getElementById("aObjective_1Icon").style.width = "75px";
	document.getElementById("objText1").style.animation = "none";
	clearInterval(objectiveTimer1);
};

function aMotivation() {
	if (width < 600) {
		set2("aMotivation", "auto", "100%", "white", "auto", "999");
		document.getElementById("aMotivation").style.borderTop = "5px solid black";
		document.getElementById("aMotivation").style.borderBottom = "5px solid black";
	} else if (width > 599 && width < 1100) {
		set2("aMotivation", "800px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection1").style.height = "815px";
		document.getElementById("aMotivation").style.borderBottom = "5px solid black";
	} else if (width > 1099) {
		set2("aMotivation", "1000px", "100%", "white", "-50%", "999", "0");
	}
	set("aMotivationIcon", "url('img/misc_icons/ember2.jpg')");
};

function closeMotivation() {
	if (width < 601) {
		set2("aMotivation", "150px", "250px", "none", "auto", "0");
		document.getElementById("aMotivation").style.borderTop = "none";
		document.getElementById("aMotivation").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aMotivation", "150px", "250px", "none", "75px", "0", "200px");
		document.getElementById("aboutSection1").style.height = "715px";
		document.getElementById("aMotivation").style.borderBottom = "none";
	} else if (width > 1099) {
		set2("aMotivation", "150px", "250px", "none", "200px", "0", "200px");
	}
	set("aMotivationIcon", "url('img/misc_icons/ember3.jpg')");
};

function aTech() {
	if (width < 600) {
		set2("aTech", "1000px", "100%", "white", "auto", "999");
		document.getElementById("aTech").style.borderTop = "5px solid black";
		document.getElementById("aTech").style.borderBottom = "5px solid black";
	} else if (width > 599) {
		set2("aTech", "725px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection1").style.height = "725px";
	}
	set("aTechIcon", "url('img/misc_icons/projectsColorB.gif')");
	set("aTech", "url('img/backgrounds/code2.jpg')");
	document.getElementById("aTech").style.boxShadow = "0px 25px 10px white inset, 0px -15px 10px white inset";
	document.getElementById("aTechIcon").style.border = "none";
};

function closeTech() {
	if (width < 601) {
		set2("aTech", "150px", "250px", "none", "auto", "0");
		document.getElementById("aTech").style.borderTop = "none";
		document.getElementById("aTech").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aTech", "150px", "250px", "none", "-325px", "0", "375px");
		document.getElementById("aboutSection1").style.height = "715px";
	} else if (width > 1099) {
		set2("aTech", "150px", "250px", "none", "-450px", "0", "375px");
		document.getElementById("aboutSection1").style.height = "715px";
	}
	set("aTechIcon", "url('img/misc_icons/projectsColor.jpg')");
	set("aTech", "none");
	document.getElementById("aTech").style.boxShadow = "none";
	document.getElementById("aTechIcon").style.border = "1px solid black";
};

function aUra() {
	if (width < 600) {
		set2("aUra", "auto", "100%", "white", "auto", "999");
		document.getElementById("aUra").style.borderTop = "5px solid black";
		document.getElementById("aUra").style.borderBottom = "5px solid black";
	} else if (width > 599) {
		set2("aUra", "1100px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection1").style.height = "1100px";
	}
	set("aUraIcon", "url('img/misc_icons/aurGr.jpg')");
};

function closeUra() {
	if (width < 601) {
		set2("aUra", "150px", "250px", "none", "auto", "0");
		document.getElementById("aUra").style.borderTop = "none";
		document.getElementById("aUra").style.borderBottom = "none";
	} else if (width > 600) {
		set2("aUra", "150px", "250px", "none", "-125px", "0", "420px");
		document.getElementById("aboutSection1").style.height = "715px";
	}
	set("aUraIcon", "url('img/misc_icons/aur1.jpg')");
};

function aYy() {
	if (width < 600) {
		set2("aYy", "700px", "100%", "white", "auto", "999");
		document.getElementById("aYy").style.borderTop = "5px solid black";
		document.getElementById("aYy").style.borderBottom = "5px solid black";
	} else if (width > 599) {
		set2("aYy", "700px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection1").style.height = "725px";
	}
	set("aYyIcon", "url('img/misc_icons/yyR.png')");
	set("aYy", "url('img/misc_icons/yys.jpg')");
	document.getElementById("aYy").style.boxShadow = "0 5px 5px white inset, 0 -5px 5px white inset";
	document.getElementById("aYyIcon").style.border = "none";
};

function closeYy() {
	if (width < 601) {
		set2("aYy", "150px", "250px", "none", "auto", "0");
		document.getElementById("aYy").style.borderTop = "none";
		document.getElementById("aYy").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aYy", "150px", "250px", "none", "75px", "0", "375px");
		document.getElementById("aboutSection1").style.height = "715px";
	} else if (width > 1099) {
		set2("aYy", "150px", "250px", "none", "200px", "0", "375px");
		document.getElementById("aboutSection1").style.height = "715px";
	}
	set("aYyIcon", "url('img/misc_icons/yinyang2.jpg')");
	set("aYy", "none");
	document.getElementById("aYy").style.boxShadow = "none";
	document.getElementById("aYyIcon").style.border = "1px solid black";
};

function aSummary() {
	if (width < 600) {
		set2("aSummary", "auto", "100%", "white", "auto", "999");
		document.getElementById("aSummary").style.borderTop = "5px solid black";
		document.getElementById("aSummary").style.borderBottom = "5px solid black";
	} else if (width > 599 && width < 1100) {
		set2("aSummary", "750px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "765px";
		document.getElementById("aSummary").style.borderBottom = "5px solid black";
	} else if (width > 1099) {
		set2("aSummary", "700px", "100%", "white", "-50%", "999", "0");
	}
};

function closeSummary() {
	if (width < 601) {
		set2("aSummary", "150px", "250px", "none", "auto", "0");
		document.getElementById("aSummary").style.borderTop = "none";
		document.getElementById("aSummary").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aSummary", "150px", "250px", "none", "-125px", "0", "250px");
		document.getElementById("aboutSection2").style.height = "715px";
		document.getElementById("aSummary").style.borderBottom = "none";
	} else if (width > 1099) {
		set2("aSummary", "150px", "250px", "none", "-125px", "0", "250px");
	}
};

function aExperience() {
	document.getElementById("expTitle").style.display = "none";
	if (width < 600) {
		set2("aExperience", "6025px", "100%", "white", "auto", "999");
		document.getElementById("aboutSection2").style.height = "6025px";
		document.getElementById("aExperience").style.borderTop = "5px solid black";
		document.getElementById("aExperience").style.borderBottom = "5px solid black";
	} else if (width > 599 && width < 1100) {
		set2("aExperience", "3950px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "3950px";
		document.getElementById("aExperience").style.borderBottom = "5px solid black";
		document.getElementById("expBtn").style.position = "fixed";
		document.getElementById("expBtn").style.top = "50px";
		document.getElementById("expBtn").style.right = "5px";
	} else if (width > 1099) {
		set2("aExperience", "3000px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "3000px";
		document.getElementById("expBtn").style.position = "fixed";
		document.getElementById("expBtn").style.top = "50px";
		document.getElementById("expBtn").style.right = "5px";
	}
};

function closeExperience() {
	document.getElementById("expTitle").style.display = "block";
	document.getElementById("expBtn").style.position = "relative";
	if (width < 601) {
		set2("aExperience", "150px", "250px", "none", "auto", "0");
		document.getElementById("aExperience").style.borderTop = "none";
		document.getElementById("aExperience").style.borderBottom = "none";
		document.getElementById("aboutSection2").style.height = "auto";
	} else if (width > 600 && width < 1100) {
		set2("aExperience", "150px", "250px", "none", "-325px", "0", "200px");
		document.getElementById("aboutSection2").style.height = "715px";
		document.getElementById("aExperience").style.borderBottom = "none";
	} else if (width > 1099) {
		set2("aExperience", "150px", "250px", "none", "-450px", "0", "200px");
		document.getElementById("aboutSection2").style.height = "715px";
	}
};

function aSkills() {
	if (width < 600) {
		set2("aSkills", "auto", "100%", "white", "auto", "999");
		document.getElementById("aSkills").style.borderTop = "5px solid black";
		document.getElementById("aSkills").style.borderBottom = "5px solid black";
	} else if (width > 599 && width < 1100) {
		set2("aSkills", "3000px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "3000px";
		document.getElementById("skillBtn").style.position = "fixed";
		document.getElementById("skillBtn").style.top = "50px";
		document.getElementById("skillBtn").style.right = "5px";
	} else if (width > 1099) {
		set2("aSkills", "2600px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "2600px";
		document.getElementById("skillBtn").style.position = "fixed";
		document.getElementById("skillBtn").style.top = "50px";
		document.getElementById("skillBtn").style.right = "5px";
	}
};

function closeSkills() {
	if (width < 601) {
		set2("aSkills", "150px", "250px", "none", "auto", "0");
		document.getElementById("aSkills").style.borderTop = "none";
		document.getElementById("aSkills").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aSkills", "150px", "250px", "none", "-325px", "0", "375px");
		document.getElementById("aboutSection2").style.height = "715px";
		document.getElementById("skillBtn").style.position = "relative";
	} else if (width > 1099) {
		set2("aSkills", "150px", "250px", "none", "-450px", "0", "375px");
		document.getElementById("aboutSection2").style.height = "715px";
		document.getElementById("skillBtn").style.position = "relative";
	}
};

function aBio() {
	if (width < 600) {
		set2("aBio", "auto", "100%", "white", "auto", "999");
		document.getElementById("aBio").style.borderTop = "5px solid black";
		document.getElementById("aBio").style.borderBottom = "5px solid black";
	} else if (width > 599 && width < 1100) {
		set2("aBio", "1525px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "1525px";
		document.getElementById("bioBtn").style.position = "fixed";
		document.getElementById("bioBtn").style.top = "50px";
		document.getElementById("bioBtn").style.right = "5px";
	} else if (width > 1099) {
		set2("aBio", "1250px", "100%", "white", "-50%", "999", "0");
		document.getElementById("aboutSection2").style.height = "1250px";
		document.getElementById("bioBtn").style.position = "fixed";
		document.getElementById("bioBtn").style.top = "50px";
		document.getElementById("bioBtn").style.right = "5px";
	}
};

function closeBio() {
	if (width < 601) {
		set2("aBio", "150px", "250px", "none", "auto", "0");
		document.getElementById("aBio").style.borderTop = "none";
		document.getElementById("aBio").style.borderBottom = "none";
	} else if (width > 600 && width < 1100) {
		set2("aBio", "150px", "250px", "none", "75px", "0", "375px");
		document.getElementById("aboutSection2").style.height = "715px";
		document.getElementById("bioBtn").style.position = "relative";
	} else if (width > 1099) {
		set2("aBio", "150px", "250px", "none", "200px", "0", "375px");
		document.getElementById("aboutSection2").style.height = "715px";
		document.getElementById("bioBtn").style.position = "relative";
	}
};