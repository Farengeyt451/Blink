// Определение ширины дисплея
var x = screen.width;
console.log(x);

// Добавление контейнера (100% вьюпорта) для окружности
var AddLinearCont = function() {
	document.getElementById("anim-main").classList.add("linear-cont");
};

// Добавление окружности
var AddMainCircle = function() {
	document.getElementById("anim-circle").classList.add("main-circle");
};

// Скрытие контейнера таймера
var HideTimer = function() {
	document.getElementById("timer-cont").classList.add("main-timer-hide");
};

// Запуск анимации мигания окружности
var AddCircleBlinking = function() {
	document.getElementById("anim-circle").classList.add("circle-blinking");
};

// Удаление анимации мигания окружности
var RemoveCircleBlinking = function() {
	document.getElementById("anim-circle").classList.remove("circle-blinking");
};

// Запуск анимации движения окружности (верх - низ)
var AddTopBotAnim = function() {
	document.getElementById("anim-main").classList.add("circle-top-bot");
};

// Запуск анимации движения окружности (лево - право) 
// и удаление анимации движения окружности (верх - низ)
var AddLeftRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-top-bot");
	document.getElementById("anim-main").classList.add("circle-left-right");
};

// Запуска анимации движения окружности по диагонали (верх право - низ лево) 
// и удаление анимации движения окружности (лево - право)
var AddTopRightBotLeftAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-left-right");
	document.getElementById("anim-main").classList.add("circle-topright-botleft");
};

// Запуска анимации движения окружности по диагонали (верх лево - низ право)
// и удаление анимации движения окружности по диагонали (верх право - низ лево)
var AddTopLeftBotRoghtAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-topright-botleft");
	document.getElementById("anim-main").classList.add("circle-topleft-botright");
};

// Запуск таймера
startanim.onclick = function() {
	// Таймер, задержка перед началом анимации
	var seconds = 5;
	var StartTimer = function() {
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
	setTimeout(StartTimer, 1000);
	};
	StartTimer();
	AddLinearCont();
	AddMainCircle();
	AddCircleBlinking();
	// Скрытие контейнера таймера
	setTimeout(HideTimer, 5000);
	setTimeout(RemoveCircleBlinking, 4000);
	setTimeout(AddTopBotAnim, 6000);
	setTimeout(AddLeftRightAnim, 26000);
	if(x > 100 && x <= 1083) {
		setTimeout(AddTopRightBotLeftAnim, 43000);
		setTimeout(AddTopLeftBotRoghtAnim, 60000);
	}
	else if(x > 1083 && x <= 1643) {
		setTimeout(AddTopRightBotLeftAnim, 46000);
		setTimeout(AddTopLeftBotRoghtAnim, 66000);
	}
	else if(x > 1643 && x <= 3008) {
		setTimeout(AddTopRightBotLeftAnim, 49000);
		setTimeout(AddTopLeftBotRoghtAnim, 72000);
	}
	else {
		setTimeout(AddTopRightBotLeftAnim, 58000);
		setTimeout(AddTopLeftBotRoghtAnim, 90000);
	}
};