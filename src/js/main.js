//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/materialize/dist/js/materialize.js
//= partials/app.js

// Перемещение окружности
var movingLeftTop = function() {
	document.getElementById("my-circle").classList.remove("circle-left-bot");
	document.getElementById("my-circle").classList.add("circle-left-top");
};

var movingRightTop = function() {
	document.getElementById("my-circle").classList.add("circle-right-top");
	document.getElementById("my-circle").classList.remove("circle-left-top");
};

var movingRightBot = function() {
	document.getElementById("my-circle").classList.add("circle-right-bot");
	document.getElementById("my-circle").classList.remove("circle-right-top");
};

var movingLeftBot = function() {
	document.getElementById("my-circle").classList.add("circle-left-bot");
	document.getElementById("my-circle").classList.remove("circle-right-bot");
};

var movingCenter = function() {
	document.getElementById("my-circle").classList.remove("circle-left-top");
};

// setTimeout(movingLeftTop, 1000);
// setTimeout(movingRightTop, 5000);
// setTimeout(movingRightBot, 9000);
// setTimeout(movingLeftBot, 13000);
// setTimeout(movingLeftTop, 17000);


// setTimeout(movingRightTop, 21000);
// setTimeout(movingRightBot, 25000);
// setTimeout(movingLeftBot, 29000);
// setTimeout(movingLeftTop, 33000);

// setTimeout(movingCenter, 37000);

// Мигание окружности
// var blink = function() {
// 	var myCircle = document.getElementById("my-circle");
// 	setInterval(function(){
// 		myCircle.style.visibility = (myCircle.style.visibility == "visible" ? "hidden" : "visible");
// 	}, 1000);
// }();