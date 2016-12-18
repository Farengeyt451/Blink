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
var AddTopLeftBotRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-topright-botleft");
	document.getElementById("anim-main").classList.add("circle-topleft-botright");
};

// Запуска анимации движения окружности по квадрату (по часовой стрелке)
// и удаление анимации движения окружности по диагонали (верх лево - низ право)
var AddCircleSquareClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-topleft-botright");
	document.getElementById("anim-main").classList.add("circle-square-clockwise");
};

// Запуска анимации движения окружности по квадрату (против часовой стрелки)
// и удаление анимации движения окружности по квадрату (по часовой стрелке)
var AddCircleSquareCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-clockwise");
	document.getElementById("anim-main").classList.add("circle-square-counterclock-wise");
};

// Запуска анимации движения окружности по кругу (по часовой стрелке)
// и удаление анимации движения окружности по квадрату (против часовой стрелки)
var AddCircleOrbitClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-counterclock-wise");
	document.getElementById("anim-circle").classList.remove("main-circle");
	document.getElementById("anim-circle").classList.add("orbit-circle");
	document.getElementById("anim-main").classList.add("circle-orbit-clockwise");
};

// Запуска анимации движения окружности по кругу (против часовой стрелки)
// и удаление анимации движения окружности по кругу (по часовой стрелке)
var AddCircleOrbitCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-clockwise");
	document.getElementById("anim-main").classList.add("circle-orbit-counterclock-wise");
};

// Запуска анимации движения окружности змейкой (лево - право)
// и удаление анимации движения окружности по кругу (против часовой стрелки)
var AddCircleSnakeRightLeft = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-counterclock-wise");
	document.getElementById("anim-circle").classList.remove("orbit-circle");
	document.getElementById("anim-circle").classList.add("main-circle");
	document.getElementById("anim-main").classList.add("circle-snake-right-left");
};

// Запуск таймера
startanim.onclick = function() {
	// Таймер, задержка перед началом анимации
	var seconds = 10;
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
	// Скрытие контейнера таймера
	setTimeout(AddCircleBlinking, 1000);
	setTimeout(RemoveCircleBlinking, 10000);
	setTimeout(HideTimer, 11000);
	setTimeout(AddTopBotAnim, 12000);
	// setTimeout(AddCircleBlinking, 32000);
	// setTimeout(RemoveCircleBlinking, 41000);
	setTimeout(AddLeftRightAnim, 32000);
	if(x > 100 && x <= 1083) {
		setTimeout(AddCircleBlinking, 49000);
		setTimeout(RemoveCircleBlinking, 58000);

		setTimeout(AddTopRightBotLeftAnim, 59000);

		// setTimeout(AddCircleBlinking, 86000);
		// setTimeout(RemoveCircleBlinking, 95000);

		setTimeout(AddTopLeftBotRightAnim, 76000);

		setTimeout(AddCircleBlinking, 93000);
		setTimeout(RemoveCircleBlinking, 102000);

		setTimeout(AddCircleSquareClockwise, 103000);

		setTimeout(AddCircleBlinking, 143000);
		setTimeout(RemoveCircleBlinking, 152000);

		setTimeout(AddCircleSquareCounterclockWise, 153000);

		setTimeout(AddCircleBlinking, 193000);
		setTimeout(RemoveCircleBlinking, 202000);

		setTimeout(AddCircleOrbitClockwise, 203000);
		setTimeout(AddCircleOrbitCounterclockWise, 222000);

		setTimeout(AddCircleBlinking, 243000);
		setTimeout(RemoveCircleBlinking, 252000);

		setTimeout(AddCircleSnakeRightLeft, 253000);
	}
	else if(x > 1083 && x <= 1643) {
		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddTopRightBotLeftAnim, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddTopLeftBotRoghtAnim, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSquareClockwise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSquareCounterclockWise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleOrbitClockwise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleOrbitCounterclockWise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSnakeRightLeft, );
	}
	else if(x > 1643 && x <= 3008) {
		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddTopRightBotLeftAnim, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddTopLeftBotRoghtAnim, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSquareClockwise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSquareCounterclockWise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleOrbitClockwise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleOrbitCounterclockWise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSnakeRightLeft, );
	}
	else {
		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddTopRightBotLeftAnim, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddTopLeftBotRoghtAnim, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSquareClockwise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSquareCounterclockWise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleOrbitClockwise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleOrbitCounterclockWise, );

		// setTimeout(AddCircleBlinking, );
		// setTimeout(RemoveCircleBlinking, );

		// setTimeout(AddCircleSnakeRightLeft, );
	}
};
