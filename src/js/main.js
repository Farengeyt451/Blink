// ------------------------
// JS код для главного меню
// ------------------------

function toggleClass(element, className){
		if (!element || !className){
				return;
		}
		var classString = element.className, nameIndex = classString.indexOf(className);
		if (nameIndex == -1) {
				classString += " " + className;
		}
		else {
				classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
		}
		element.className = classString;
}

var elNav = document.getElementById("main-nav");
if(elNav){
	document.getElementById("main-nav").addEventListener("click", function() {
		toggleClass(document.getElementById("main-nav"), "nav-is-visible");
	});
}

// ------------------------
// JS код для страницы блинк
// ------------------------

// Определение ширины дисплея
var x = screen.width;
var y = screen.height;

// Перезагрузка страницы при смене оринетации вьюпорта
// window.addEventListener("orientationchange", function() {
// 		location.reload();
// });

// Добавление контейнера (100% вьюпорта) для окружности
var addLinearCont = function() {
	document.getElementById("anim-main").classList.add("linear-cont");
};

// Удаление контейнера (100% вьюпорта) для окружности и окружности
var removeContCircle = function() {
	document.getElementById("anim-circle").classList.add("main-circle-hide");
	document.getElementById("anim-main").classList.remove("linear-cont");
};

// Добавление окружности
var addMainCircle = function() {
	document.getElementById("anim-circle").classList.add("main-circle");
};

// Скрытие кнопки запуска "Начать"
var hideBtn = function() {
	document.getElementById("startanim").classList.add("btn-hide");
};

// Открытие кнопки "На главную"
var showBtn = function() {
	document.getElementById("tomain").classList.remove("btn-end-hide");
	document.getElementById("tomain").classList.add("btn-end-show");
};

// Запуск анимации мигания окружности
var addCircleBlinking = function() {
	document.getElementById("anim-circle").classList.add("circle-blinking");
};

// Запуск анимации мигания окружности после круговой анимации
var addCircleOrbitBlinking = function() {
	document.getElementById("anim-circle").classList.remove("orbit-circle");
	document.getElementById("anim-circle").classList.remove("orbit-circle-4x3");
	document.getElementById("anim-circle").classList.add("main-circle");
	document.getElementById("anim-circle").classList.add("circle-blinking");
};

// Удаление анимации мигания окружности
var removeCircleBlinking = function() {
	document.getElementById("anim-circle").classList.remove("circle-blinking");
};

// Запуск анимации движения окружности (верх - низ)
var addTopBotAnim = function() {
	document.getElementById("anim-main").classList.add("circle-top-bot");
};

// Запуск анимации движения окружности (лево - право)
// и удаление анимации движения окружности (верх - низ)
var addLeftRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-top-bot");
	document.getElementById("anim-main").classList.add("circle-left-right");
};

// Запуск анимации движения окружности по диагонали (верх право - низ лево)
// и удаление анимации движения окружности (лево - право)
var addTopRightBotLeftAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-left-right");
	document.getElementById("anim-main").classList.add("circle-topright-botleft");
};

// Запуск анимации движения окружности по диагонали (верх лево - низ право)
// и удаление анимации движения окружности по диагонали (верх право - низ лево)
var addTopLeftBotRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-topright-botleft");
	document.getElementById("anim-main").classList.add("circle-topleft-botright");
};

// Запуск анимации движения окружности по квадрату (по часовой стрелке)
// и удаление анимации движения окружности по диагонали (верх лево - низ право)
var addCircleSquareClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-topleft-botright");
	document.getElementById("anim-main").classList.add("circle-square-clockwise");
};

// Запуск анимации движения окружности по квадрату (против часовой стрелки)
// и удаление анимации движения окружности по квадрату (по часовой стрелке)
var addCircleSquareCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-clockwise");
	document.getElementById("anim-main").classList.add("circle-square-counterclock-wise");
};

// Запуск анимации движения окружности по кругу (по часовой стрелке)
// и удаление анимации движения окружности по квадрату (против часовой стрелки)
var addCircleOrbitClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-counterclock-wise");
	document.getElementById("anim-circle").classList.remove("main-circle");
	if (x >= y) {
		document.getElementById("anim-circle").classList.add("orbit-circle");
	}
	else {
		document.getElementById("anim-circle").classList.add("orbit-circle-4x3");
		}
	document.getElementById("anim-main").classList.add("circle-orbit-clockwise");
};

// Запуск анимации движения окружности по кругу (против часовой стрелки)
// и удаление анимации движения окружности по кругу (по часовой стрелке)
var addCircleOrbitCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-clockwise");
	document.getElementById("anim-main").classList.add("circle-orbit-counterclock-wise");
};

// Запуск анимации движения окружности змейкой (лево - право)
// и удаление анимации движения окружности по кругу (против часовой стрелки)
var addCircleSnakeRightLeft = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-counterclock-wise");
	document.getElementById("anim-main").classList.add("circle-snake-right-left");
};

// Запуск упражнений
// Проверка на существование элемента кнопки
var elAnim = document.getElementById("startanim");
if(elAnim){
	startanim.onclick = function() {
		addLinearCont();
		addMainCircle();
		// Скрытие контейнера таймера
		setTimeout(addCircleBlinking, 1000);
		setTimeout(removeCircleBlinking, 16000);
		setTimeout(hideBtn, 500);
		setTimeout(addTopBotAnim, 22000);
		setTimeout(addLeftRightAnim, 42000);
		if(x > 1 && x <= 1083) {
			setTimeout(addCircleBlinking, 59000);
			setTimeout(removeCircleBlinking, 74000);

			setTimeout(addTopRightBotLeftAnim, 79000);

			setTimeout(addTopLeftBotRightAnim, 96000);

			setTimeout(addCircleBlinking, 113000);
			setTimeout(removeCircleBlinking, 128000);

			setTimeout(addCircleSquareClockwise, 133000);

			setTimeout(addCircleBlinking, 171000);
			setTimeout(removeCircleBlinking, 186000);

			setTimeout(addCircleSquareCounterclockWise, 191000);

			setTimeout(addCircleBlinking, 231000);
			setTimeout(removeCircleBlinking, 246000);

			setTimeout(addCircleOrbitClockwise, 251000);
			setTimeout(addCircleOrbitCounterclockWise, 270000);

			setTimeout(addCircleOrbitBlinking, 291000);
			setTimeout(removeCircleBlinking, 306000);

			setTimeout(addCircleSnakeRightLeft, 311000);
			
			setTimeout(removeContCircle, 342000);
			setTimeout(showBtn, 343000);
		}
		else if(x > 1083 && x <= 1643) {
			setTimeout(addCircleBlinking, 62000);
			setTimeout(removeCircleBlinking, 77000);

			setTimeout(addTopRightBotLeftAnim, 82000);

			setTimeout(addTopLeftBotRightAnim, 102000);

			setTimeout(addCircleBlinking, 122000);
			setTimeout(removeCircleBlinking, 137000);

			setTimeout(addCircleSquareClockwise, 142000);

			setTimeout(addCircleBlinking, 186000);
			setTimeout(removeCircleBlinking, 201000);

			setTimeout(addCircleSquareCounterclockWise, 206000);

			setTimeout(addCircleBlinking, 250000);
			setTimeout(removeCircleBlinking, 265000);

			setTimeout(addCircleOrbitClockwise, 270000);
			setTimeout(addCircleOrbitCounterclockWise, 289000);

			setTimeout(addCircleOrbitBlinking, 310000);
			setTimeout(removeCircleBlinking, 325000);

			setTimeout(addCircleSnakeRightLeft, 330000);

			setTimeout(removeContCircle, 361000);
			setTimeout(showBtn, 362000);
		}
		else if(x > 1643 && x <= 3008) {
			setTimeout(addCircleBlinking, 65000);
			setTimeout(removeCircleBlinking, 80000);

			setTimeout(addTopRightBotLeftAnim, 85000);

			setTimeout(addTopLeftBotRightAnim, 108000);

			setTimeout(addCircleBlinking, 131000);
			setTimeout(removeCircleBlinking, 146000);

			setTimeout(addCircleSquareClockwise, 151000);

			setTimeout(addCircleBlinking, 201000);
			setTimeout(removeCircleBlinking, 216000);

			setTimeout(addCircleSquareCounterclockWise, 221000);

			setTimeout(addCircleBlinking, 271000);
			setTimeout(removeCircleBlinking, 286000);

			setTimeout(addCircleOrbitClockwise, 291000);
			setTimeout(addCircleOrbitCounterclockWise, 310000);

			setTimeout(addCircleOrbitBlinking, 331000);
			setTimeout(removeCircleBlinking, 346000);

			setTimeout(addCircleSnakeRightLeft, 351000);

			setTimeout(removeContCircle, 382000);
			setTimeout(showBtn, 383000);
		}
		else if (x > 3008) {
			setTimeout(addCircleBlinking, 74000);
			setTimeout(removeCircleBlinking, 89000);

			setTimeout(addTopRightBotLeftAnim, 94000);

			setTimeout(addTopLeftBotRightAnim, 126000);

			setTimeout(addCircleBlinking, 158000);
			setTimeout(removeCircleBlinking, 173000);

			setTimeout(addCircleSquareClockwise, 178000);

			setTimeout(addCircleBlinking, 234000);
			setTimeout(removeCircleBlinking, 249000);

			setTimeout(addCircleSquareCounterclockWise, 254000);

			setTimeout(addCircleBlinking, 310000);
			setTimeout(removeCircleBlinking, 325000);

			setTimeout(addCircleOrbitClockwise, 330000);
			setTimeout(addCircleOrbitCounterclockWise, 349000);

			setTimeout(addCircleOrbitBlinking, 370000);
			setTimeout(removeCircleBlinking, 385000);

			setTimeout(addCircleSnakeRightLeft, 390000);

			setTimeout(removeContCircle, 421000);
			setTimeout(showBtn, 422000);
		}
	};
}

// Генератор градиентов
var elGradient = document.getElementById("gradient");
if(elGradient) {
	// target to give background to
	var $div = document.getElementById("gradient");
	// Rgb vals of the gradients
	var gradients = [
		{ start: [11,72,107], stop: [103,178,111] },
		{ start: [24, 90, 157], stop: [68,160,141] },
		{ start: [11, 135, 147], stop: [69,104,220] }
	];
	// How long for each transition
	var transition_time = 16;

	// Internal type vars
	var currentIndex = 0; // where we are in the gradients array
	var nextIndex = 1; // what index of the gradients array is next
	var steps_count = 0; // steps counter
	var steps_total = Math.round(transition_time*60); // total amount of steps
	var rgb_steps = {
		start: [0,0,0],
		stop: [0,0,0]
	}; // How much to alter each rgb value
	var rgb_values = {
		start: [0,0,0],
		stop: [0,0,0]
	}; // The current rgb values, gets altered by rgb steps on each interval
	var prefixes = ["-webkit-","-moz-","-o-","-ms-",""]; // for looping through adding styles
	var div_style = $div.style; // short cut to actually adding styles
	var color1, color2;

	// Sets next current and next index of gradients array
	function set_next(num) {
		return (num + 1 < gradients.length) ? num + 1 : 0;
	}

	// Work out how big each rgb step is
	function calc_step_size(a,b) {
		return (a - b) / steps_total;
	}

	// Populate the rgb_values and rgb_steps objects
	function calc_steps() {
		for (var key in rgb_values) {
			if (rgb_values.hasOwnProperty(key)) {
				for(var i = 0; i < 3; i++) {
					rgb_values[key][i] = gradients[currentIndex][key][i];
					rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
				}
			}
		}
	}

	// Update current rgb vals, update DOM element with new CSS background
	function updateGradient(){
		// update the current rgb vals
		for (var key in rgb_values) {
			if (rgb_values.hasOwnProperty(key)) {
				for(var i = 0; i < 3; i++) {
					rgb_values[key][i] += rgb_steps[key][i];
				}
			}
		}

		// Generate CSS rgb values
		var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
		var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

		// Has anything changed on this interation
		if (t_color1 != color1 || t_color2 != color2) {

			// Update cols strings
			color1 = t_color1;
			color2 = t_color2;

			// Update DOM element style attribute
			div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
			for (var i = 0; i < 4; i++) {
				div_style.backgroundImage = prefixes[i]+"linear-gradient(45deg, "+color1+", "+color2+")";
			}
		}

		// We did another step
		steps_count++;
		// Did we do too many steps?
		if (steps_count > steps_total) {
			// Reset steps count
			steps_count = 0;
			// Set new indexs
			currentIndex = set_next(currentIndex);
			nextIndex = set_next(nextIndex);
			// Calc steps
			calc_steps();
		}

		if (div_style.backgroundImage.indexOf("gradient") != -1) {
			window.requestAnimationFrame(updateGradient);
		}
	}

	// Initial step calc
	calc_steps();

	// Start
	window.requestAnimationFrame(updateGradient);
};