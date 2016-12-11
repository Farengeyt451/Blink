// Определение ширины дисплея
var x = screen.width;

// Добавление контейнера (100% вьюпорта) для окружности
var funcLinearCont = function() {
	document.getElementById("anim-main").classList.add("linear-cont");
};

// Добавление окружности
var funcMainCircle = function() {
	document.getElementById("anim-circle").classList.add("main-circle");
	document.getElementById("anim-circle").classList.add("circle-blinking");
};

// Скрытие контейнера таймера
var funcHideTimer = function() {
	document.getElementById("timer-cont").classList.add("main-timer-hide");
};

// // Запуск анимации движения окружности (верх - низ)
// var funcTopBot = function() {
// 	document.getElementById("anim-main").classList.add("circle-top-bot");
// };
// setTimeout(funcTopBot, 5000);

// // Запуск анимации движения окружности (лево - право)
// var funcLeftRight = function() {
// 	document.getElementById("anim-main").classList.remove("circle-top-bot");
// 	document.getElementById("anim-main").classList.add("circle-left-right");
// };

// if(x < 1500) {
// 	setTimeout(funcLeftRight, 10000);
// 	console.log("X < 1500");
// };

// Запуск таймера
startanim.onclick = function() {
	// Таймер, задержка перед началом анимации
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
	seconds--;
	setTimeout(funcTimer, 1000);
	};
	funcTimer();
	funcLinearCont();
	funcMainCircle();
	setTimeout(funcHideTimer, 5000);
};