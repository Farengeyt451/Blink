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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSlMg0LrQvtC0INC00LvRjyDQs9C70LDQstC90L7Qs9C+INC80LXQvdGOXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKXtcblx0XHRpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSl7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGNsYXNzU3RyaW5nID0gZWxlbWVudC5jbGFzc05hbWUsIG5hbWVJbmRleCA9IGNsYXNzU3RyaW5nLmluZGV4T2YoY2xhc3NOYW1lKTtcblx0XHRpZiAobmFtZUluZGV4ID09IC0xKSB7XG5cdFx0XHRcdGNsYXNzU3RyaW5nICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdFx0Y2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZy5zdWJzdHIoMCwgbmFtZUluZGV4KSArIGNsYXNzU3RyaW5nLnN1YnN0cihuYW1lSW5kZXgrY2xhc3NOYW1lLmxlbmd0aCk7XG5cdFx0fVxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NTdHJpbmc7XG59XG5cbnZhciBlbE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIik7XG5pZihlbE5hdil7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHRvZ2dsZUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIiksIFwibmF2LWlzLXZpc2libGVcIik7XG5cdH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEpTINC60L7QtCDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiyDQsdC70LjQvdC6XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDRiNC40YDQuNC90Ysg0LTQuNGB0L/Qu9C10Y9cbnZhciB4ID0gc2NyZWVuLndpZHRoO1xudmFyIHkgPSBzY3JlZW4uaGVpZ2h0O1xuXG4vLyDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0YHQvNC10L3QtSDQvtGA0LjQvdC10YLQsNGG0LjQuCDQstGM0Y7Qv9C+0YDRgtCwXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuLy8gfSk7XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwICgxMDAlINCy0YzRjtC/0L7RgNGC0LApINC00LvRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZExpbmVhckNvbnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImxpbmVhci1jb250XCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0Lgg0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDb250Q2lyY2xlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlLWhpZGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lYXItY29udFwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCBcItCd0LDRh9Cw0YLRjFwiXG52YXIgaGlkZUJ0biA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0YW5pbVwiKS5jbGFzc0xpc3QuYWRkKFwiYnRuLWhpZGVcIik7XG59O1xuXG4vLyDQntGC0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCBcItCd0LAg0LPQu9Cw0LLQvdGD0Y5cIlxudmFyIHNob3dCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1lbmQtaGlkZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1lbmQtc2hvd1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkQ2lyY2xlQmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QvtGB0LvQtSDQutGA0YPQs9C+0LLQvtC5INCw0L3QuNC80LDRhtC40LhcbnZhciBhZGRDaXJjbGVPcmJpdEJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3JiaXQtY2lyY2xlLTR4M1wiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIHJlbW92ZUNpcmNsZUJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIGFkZFRvcEJvdEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3AtYm90XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIGFkZExlZnRSaWdodEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3AtYm90XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQv9GA0LDQstC+IC0g0L3QuNC3INC70LXQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbnZhciBhZGRUb3BSaWdodEJvdExlZnRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtbGVmdC1yaWdodFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3ByaWdodC1ib3RsZWZ0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0LvQtdCy0L4gLSDQvdC40Lcg0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQv9GA0LDQstC+IC0g0L3QuNC3INC70LXQstC+KVxudmFyIGFkZFRvcExlZnRCb3RSaWdodEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3ByaWdodC1ib3RsZWZ0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvcGxlZnQtYm90cmlnaHRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQu9C10LLQviAtINC90LjQtyDQv9GA0LDQstC+KVxudmFyIGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcGxlZnQtYm90cmlnaHRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG52YXIgYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNvdW50ZXJjbG9jay13aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbnZhciBhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXNxdWFyZS1jb3VudGVyY2xvY2std2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpbi1jaXJjbGVcIik7XG5cdGlmICh4ID49IHkpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJvcmJpdC1jaXJjbGVcIik7XG5cdH1cblx0ZWxzZSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlLTR4M1wiKTtcblx0XHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY2xvY2t3aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC30LzQtdC50LrQvtC5ICjQu9C10LLQviAtINC/0YDQsNCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbnZhciBhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLW9yYml0LWNvdW50ZXJjbG9jay13aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNuYWtlLXJpZ2h0LWxlZnRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0YPQv9GA0LDQttC90LXQvdC40Llcbi8vINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGD0YnQtdGB0YLQstC+0LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINC60L3QvtC/0LrQuFxudmFyIGVsQW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRhbmltXCIpO1xuaWYoZWxBbmltKXtcblx0c3RhcnRhbmltLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRhZGRMaW5lYXJDb250KCk7XG5cdFx0YWRkTWFpbkNpcmNsZSgpO1xuXHRcdC8vINCh0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQudC90LXRgNCwINGC0LDQudC80LXRgNCwXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTYwMDApO1xuXHRcdHNldFRpbWVvdXQoaGlkZUJ0biwgNTAwKTtcblx0XHRzZXRUaW1lb3V0KGFkZFRvcEJvdEFuaW0sIDIyMDAwKTtcblx0XHRzZXRUaW1lb3V0KGFkZExlZnRSaWdodEFuaW0sIDQyMDAwKTtcblx0XHRpZih4ID4gMSAmJiB4IDw9IDEwODMpIHtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDU5MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDc0MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA3OTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgOTYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxMTMwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTI4MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDEzMzAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDE3MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxODYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDE5MTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDIzMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNDYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyNTEwMDApO1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDI3MDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMjkxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMwNjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDMxMTAwMCk7XG5cdFx0XHRcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ29udENpcmNsZSwgMzQyMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoc2hvd0J0biwgMzQzMDAwKTtcblx0XHR9XG5cdFx0ZWxzZSBpZih4ID4gMTA4MyAmJiB4IDw9IDE2NDMpIHtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDYyMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDc3MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA4MjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTAyMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTIyMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDEzNzAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNDIwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxODYwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjAxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyMDYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyNTAwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjY1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjcwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAyODkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDMxMDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMjUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzMzAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDM2MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDM2MjAwMCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoeCA+IDE2NDMgJiYgeCA8PSAzMDA4KSB7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA2NTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA4MDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgODUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEwODAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEzMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNDYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTUxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjAxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDIxNjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjIxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjcxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI4NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI5MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMzEwMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzMzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzQ2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzUxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDb250Q2lyY2xlLCAzODIwMDApO1xuXHRcdFx0c2V0VGltZW91dChzaG93QnRuLCAzODMwMDApO1xuXHRcdH1cblx0XHRlbHNlIGlmICh4ID4gMzAwOCkge1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgNzQwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgODkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDk0MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMjYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxNTgwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTczMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE3ODAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDIzNDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNDkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDI1NDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDMxMDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMjUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAzMzAwMDApO1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDM0OTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzcwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDM4NTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDM5MDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ29udENpcmNsZSwgNDIxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoc2hvd0J0biwgNDIyMDAwKTtcblx0XHR9XG5cdH07XG59XG5cbi8vINCT0LXQvdC10YDQsNGC0L7RgCDQs9GA0LDQtNC40LXQvdGC0L7QslxudmFyIGVsR3JhZGllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYWRpZW50XCIpO1xuaWYoZWxHcmFkaWVudCkge1xuXHQvLyB0YXJnZXQgdG8gZ2l2ZSBiYWNrZ3JvdW5kIHRvXG5cdHZhciAkZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFkaWVudFwiKTtcblx0Ly8gUmdiIHZhbHMgb2YgdGhlIGdyYWRpZW50c1xuXHR2YXIgZ3JhZGllbnRzID0gW1xuXHRcdHsgc3RhcnQ6IFsxMSw3MiwxMDddLCBzdG9wOiBbMTAzLDE3OCwxMTFdIH0sXG5cdFx0eyBzdGFydDogWzI0LCA5MCwgMTU3XSwgc3RvcDogWzY4LDE2MCwxNDFdIH0sXG5cdFx0eyBzdGFydDogWzExLCAxMzUsIDE0N10sIHN0b3A6IFs2OSwxMDQsMjIwXSB9XG5cdF07XG5cdC8vIEhvdyBsb25nIGZvciBlYWNoIHRyYW5zaXRpb25cblx0dmFyIHRyYW5zaXRpb25fdGltZSA9IDE2O1xuXG5cdC8vIEludGVybmFsIHR5cGUgdmFyc1xuXHR2YXIgY3VycmVudEluZGV4ID0gMDsgLy8gd2hlcmUgd2UgYXJlIGluIHRoZSBncmFkaWVudHMgYXJyYXlcblx0dmFyIG5leHRJbmRleCA9IDE7IC8vIHdoYXQgaW5kZXggb2YgdGhlIGdyYWRpZW50cyBhcnJheSBpcyBuZXh0XG5cdHZhciBzdGVwc19jb3VudCA9IDA7IC8vIHN0ZXBzIGNvdW50ZXJcblx0dmFyIHN0ZXBzX3RvdGFsID0gTWF0aC5yb3VuZCh0cmFuc2l0aW9uX3RpbWUqNjApOyAvLyB0b3RhbCBhbW91bnQgb2Ygc3RlcHNcblx0dmFyIHJnYl9zdGVwcyA9IHtcblx0XHRzdGFydDogWzAsMCwwXSxcblx0XHRzdG9wOiBbMCwwLDBdXG5cdH07IC8vIEhvdyBtdWNoIHRvIGFsdGVyIGVhY2ggcmdiIHZhbHVlXG5cdHZhciByZ2JfdmFsdWVzID0ge1xuXHRcdHN0YXJ0OiBbMCwwLDBdLFxuXHRcdHN0b3A6IFswLDAsMF1cblx0fTsgLy8gVGhlIGN1cnJlbnQgcmdiIHZhbHVlcywgZ2V0cyBhbHRlcmVkIGJ5IHJnYiBzdGVwcyBvbiBlYWNoIGludGVydmFsXG5cdHZhciBwcmVmaXhlcyA9IFtcIi13ZWJraXQtXCIsXCItbW96LVwiLFwiLW8tXCIsXCItbXMtXCIsXCJcIl07IC8vIGZvciBsb29waW5nIHRocm91Z2ggYWRkaW5nIHN0eWxlc1xuXHR2YXIgZGl2X3N0eWxlID0gJGRpdi5zdHlsZTsgLy8gc2hvcnQgY3V0IHRvIGFjdHVhbGx5IGFkZGluZyBzdHlsZXNcblx0dmFyIGNvbG9yMSwgY29sb3IyO1xuXG5cdC8vIFNldHMgbmV4dCBjdXJyZW50IGFuZCBuZXh0IGluZGV4IG9mIGdyYWRpZW50cyBhcnJheVxuXHRmdW5jdGlvbiBzZXRfbmV4dChudW0pIHtcblx0XHRyZXR1cm4gKG51bSArIDEgPCBncmFkaWVudHMubGVuZ3RoKSA/IG51bSArIDEgOiAwO1xuXHR9XG5cblx0Ly8gV29yayBvdXQgaG93IGJpZyBlYWNoIHJnYiBzdGVwIGlzXG5cdGZ1bmN0aW9uIGNhbGNfc3RlcF9zaXplKGEsYikge1xuXHRcdHJldHVybiAoYSAtIGIpIC8gc3RlcHNfdG90YWw7XG5cdH1cblxuXHQvLyBQb3B1bGF0ZSB0aGUgcmdiX3ZhbHVlcyBhbmQgcmdiX3N0ZXBzIG9iamVjdHNcblx0ZnVuY3Rpb24gY2FsY19zdGVwcygpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gcmdiX3ZhbHVlcykge1xuXHRcdFx0aWYgKHJnYl92YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRcdFx0cmdiX3ZhbHVlc1trZXldW2ldID0gZ3JhZGllbnRzW2N1cnJlbnRJbmRleF1ba2V5XVtpXTtcblx0XHRcdFx0XHRyZ2Jfc3RlcHNba2V5XVtpXSA9IGNhbGNfc3RlcF9zaXplKGdyYWRpZW50c1tuZXh0SW5kZXhdW2tleV1baV0scmdiX3ZhbHVlc1trZXldW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFVwZGF0ZSBjdXJyZW50IHJnYiB2YWxzLCB1cGRhdGUgRE9NIGVsZW1lbnQgd2l0aCBuZXcgQ1NTIGJhY2tncm91bmRcblx0ZnVuY3Rpb24gdXBkYXRlR3JhZGllbnQoKXtcblx0XHQvLyB1cGRhdGUgdGhlIGN1cnJlbnQgcmdiIHZhbHNcblx0XHRmb3IgKHZhciBrZXkgaW4gcmdiX3ZhbHVlcykge1xuXHRcdFx0aWYgKHJnYl92YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRcdFx0cmdiX3ZhbHVlc1trZXldW2ldICs9IHJnYl9zdGVwc1trZXldW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgQ1NTIHJnYiB2YWx1ZXNcblx0XHR2YXIgdF9jb2xvcjEgPSBcInJnYihcIisocmdiX3ZhbHVlcy5zdGFydFswXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0YXJ0WzFdIHwgMCkrXCIsXCIrKHJnYl92YWx1ZXMuc3RhcnRbMl0gfCAwKStcIilcIjtcblx0XHR2YXIgdF9jb2xvcjIgPSBcInJnYihcIisocmdiX3ZhbHVlcy5zdG9wWzBdIHwgMCkrXCIsXCIrKHJnYl92YWx1ZXMuc3RvcFsxXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0b3BbMl0gfCAwKStcIilcIjtcblxuXHRcdC8vIEhhcyBhbnl0aGluZyBjaGFuZ2VkIG9uIHRoaXMgaW50ZXJhdGlvblxuXHRcdGlmICh0X2NvbG9yMSAhPSBjb2xvcjEgfHwgdF9jb2xvcjIgIT0gY29sb3IyKSB7XG5cblx0XHRcdC8vIFVwZGF0ZSBjb2xzIHN0cmluZ3Ncblx0XHRcdGNvbG9yMSA9IHRfY29sb3IxO1xuXHRcdFx0Y29sb3IyID0gdF9jb2xvcjI7XG5cblx0XHRcdC8vIFVwZGF0ZSBET00gZWxlbWVudCBzdHlsZSBhdHRyaWJ1dGVcblx0XHRcdGRpdl9zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBmcm9tKFwiK2NvbG9yMStcIiksIHRvKFwiK2NvbG9yMitcIikpXCI7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRkaXZfc3R5bGUuYmFja2dyb3VuZEltYWdlID0gcHJlZml4ZXNbaV0rXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIFwiK2NvbG9yMStcIiwgXCIrY29sb3IyK1wiKVwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFdlIGRpZCBhbm90aGVyIHN0ZXBcblx0XHRzdGVwc19jb3VudCsrO1xuXHRcdC8vIERpZCB3ZSBkbyB0b28gbWFueSBzdGVwcz9cblx0XHRpZiAoc3RlcHNfY291bnQgPiBzdGVwc190b3RhbCkge1xuXHRcdFx0Ly8gUmVzZXQgc3RlcHMgY291bnRcblx0XHRcdHN0ZXBzX2NvdW50ID0gMDtcblx0XHRcdC8vIFNldCBuZXcgaW5kZXhzXG5cdFx0XHRjdXJyZW50SW5kZXggPSBzZXRfbmV4dChjdXJyZW50SW5kZXgpO1xuXHRcdFx0bmV4dEluZGV4ID0gc2V0X25leHQobmV4dEluZGV4KTtcblx0XHRcdC8vIENhbGMgc3RlcHNcblx0XHRcdGNhbGNfc3RlcHMoKTtcblx0XHR9XG5cblx0XHRpZiAoZGl2X3N0eWxlLmJhY2tncm91bmRJbWFnZS5pbmRleE9mKFwiZ3JhZGllbnRcIikgIT0gLTEpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlR3JhZGllbnQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEluaXRpYWwgc3RlcCBjYWxjXG5cdGNhbGNfc3RlcHMoKTtcblxuXHQvLyBTdGFydFxuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUdyYWRpZW50KTtcbn07Il0sImZpbGUiOiJtYWluLmpzIn0=
