 
 
 // NAVIGATION
function nav() {
	var nav = document.getElementById("nav");
	nav.style.width = "99%";
	nav.style.borderRadius = "15px 0 0 0";
	nav.style.cursor = "default";
	document.getElementById("closeNav").style.opacity = "1";
	document.getElementById("navHome").style.left = "50%";
	document.getElementById("navAbout").style.left = "50%";
	document.getElementById("navContact").style.left = "50%";
	document.getElementById("navProjects").style.left = "50%";
};

function closeNav() {
	document.getElementById("closeNav").style.opacity = "0";
	document.getElementById("nav").style.width = "35px";
	document.getElementById("nav").style.borderRadius = "15px 15px 0 0";
	document.getElementById("nav").style.cursor = "pointer";
	document.getElementById("navHome").style.left = "500px";
	document.getElementById("navAbout").style.left = "500px";
	document.getElementById("navContact").style.left = "500px";
	document.getElementById("navProjects").style.left = "500px";
};
 
 // FOOTER IMAGES
 function set(idee, value) {
	var setIdee = document.getElementById(idee);
	setIdee.style.backgroundImage = value;
};

set("innerNavWrapper", "url('img/doorSm.png')")

set("homeLink", "url('img/misc_icons/homeSm.png')");
set("aboutLink", "url('img/misc_icons/aboutSm.png')");
set("contactLink", "url('img/misc_icons/contactSm.png')");
set("projectsLink", "url('img/misc_icons/projectsSm.png')");

set("linkedin", "url('img/social_icons/linkedinSm.png')");
set("github", "url('img/social_icons/githubSm.png')");
set("codepen", "url('img/social_icons/codepenSm.png')");
set("behance", "url('img/social_icons/behanceSm.png')");
set("treehouse", "url('img/social_icons/treehouseSm.png')");


