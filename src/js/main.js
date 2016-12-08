console.log("Test");

var seconds = 5;
var funcTimer = function() {
	// if(seconds < 9) {
	// 	seconds = "0" + seconds;
	// }
	if(document.getElementById) {
		timer.innerHTML = seconds;
	}
	if(seconds == 0) {
		return false;
	}
	if(seconds == 0) {
		
	}
	seconds--;
	setTimeout(funcTimer, 1000);
};

funcTimer();

var funcTopBot = function() {
	document.getElementById("anim-main").classList.add("circle-top-bot");
};
setTimeout(funcTopBot, 5000);