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

// Скрытие кнопки запуска "Начать" и навигации
var hideBtn = function() {
	document.getElementById("startanim").classList.add("btn-hide");
	document.getElementById("main-nav").classList.add("cd-stretchy-nav-hide");
};

// Открытие кнопки "На главную" и навигации
var showBtn = function() {
	document.getElementById("tomain").classList.remove("btn-end-hide");
	document.getElementById("tomain").classList.add("btn-end-show");
	document.getElementById("main-nav").classList.remove("cd-stretchy-nav-hide");
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
		setTimeout(addLinearCont, 500);
		setTimeout(addMainCircle, 500);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSlMg0LrQvtC0INC00LvRjyDQs9C70LDQstC90L7Qs9C+INC80LXQvdGOXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKXtcblx0XHRpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSl7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGNsYXNzU3RyaW5nID0gZWxlbWVudC5jbGFzc05hbWUsIG5hbWVJbmRleCA9IGNsYXNzU3RyaW5nLmluZGV4T2YoY2xhc3NOYW1lKTtcblx0XHRpZiAobmFtZUluZGV4ID09IC0xKSB7XG5cdFx0XHRcdGNsYXNzU3RyaW5nICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdFx0Y2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZy5zdWJzdHIoMCwgbmFtZUluZGV4KSArIGNsYXNzU3RyaW5nLnN1YnN0cihuYW1lSW5kZXgrY2xhc3NOYW1lLmxlbmd0aCk7XG5cdFx0fVxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NTdHJpbmc7XG59XG5cbnZhciBlbE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIik7XG5pZihlbE5hdil7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHRvZ2dsZUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIiksIFwibmF2LWlzLXZpc2libGVcIik7XG5cdH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEpTINC60L7QtCDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiyDQsdC70LjQvdC6XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDRiNC40YDQuNC90Ysg0LTQuNGB0L/Qu9C10Y9cbnZhciB4ID0gc2NyZWVuLndpZHRoO1xudmFyIHkgPSBzY3JlZW4uaGVpZ2h0O1xuXG4vLyDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0YHQvNC10L3QtSDQvtGA0LjQvdC10YLQsNGG0LjQuCDQstGM0Y7Qv9C+0YDRgtCwXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuLy8gfSk7XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwICgxMDAlINCy0YzRjtC/0L7RgNGC0LApINC00LvRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZExpbmVhckNvbnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImxpbmVhci1jb250XCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0Lgg0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDb250Q2lyY2xlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlLWhpZGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lYXItY29udFwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCBcItCd0LDRh9Cw0YLRjFwiINC4INC90LDQstC40LPQsNGG0LjQuFxudmFyIGhpZGVCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydGFuaW1cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1oaWRlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW4tbmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJjZC1zdHJldGNoeS1uYXYtaGlkZVwiKTtcbn07XG5cbi8vINCe0YLQutGA0YvRgtC40LUg0LrQvdC+0L/QutC4IFwi0J3QsCDQs9C70LDQstC90YPRjlwiINC4INC90LDQstC40LPQsNGG0LjQuFxudmFyIHNob3dCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1lbmQtaGlkZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1lbmQtc2hvd1wiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLW5hdlwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Qtc3RyZXRjaHktbmF2LWhpZGVcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZENpcmNsZUJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L7RgdC70LUg0LrRgNGD0LPQvtCy0L7QuSDQsNC90LjQvNCw0YbQuNC4XG52YXIgYWRkQ2lyY2xlT3JiaXRCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmJpdC1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQo9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDaXJjbGVCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQstC10YDRhSAtINC90LjQtylcbnZhciBhZGRUb3BCb3RBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wLWJvdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQstC10YDRhSAtINC90LjQtylcbnZhciBhZGRMZWZ0UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wLWJvdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1sZWZ0LXJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQu9C10LLQviAtINC/0YDQsNCy0L4pXG52YXIgYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC70LXQstC+IC0g0L3QuNC3INC/0YDQsNCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbnZhciBhZGRUb3BMZWZ0Qm90UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0LvQtdCy0L4gLSDQvdC40Lcg0L/RgNCw0LLQvilcbnZhciBhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxudmFyIGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY2xvY2t3aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNxdWFyZS1jb3VudGVyY2xvY2std2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tY2lyY2xlXCIpO1xuXHRpZiAoeCA+PSB5KSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlXCIpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdFx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG52YXIgYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtb3JiaXQtY2xvY2t3aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNvdW50ZXJjbG9jay13aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQt9C80LXQudC60L7QuSAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgYWRkQ2lyY2xlU25ha2VSaWdodExlZnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jb3VudGVyY2xvY2std2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zbmFrZS1yaWdodC1sZWZ0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INGD0L/RgNCw0LbQvdC10L3QuNC5XG4vLyDQn9GA0L7QstC10YDQutCwINC90LAg0YHRg9GJ0LXRgdGC0LLQvtCy0LDQvdC40LUg0Y3Qu9C10LzQtdC90YLQsCDQutC90L7Qv9C60LhcbnZhciBlbEFuaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0YW5pbVwiKTtcbmlmKGVsQW5pbSl7XG5cdHN0YXJ0YW5pbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0c2V0VGltZW91dChhZGRMaW5lYXJDb250LCA1MDApO1xuXHRcdHNldFRpbWVvdXQoYWRkTWFpbkNpcmNsZSwgNTAwKTtcblx0XHQvLyDQodC60YDRi9GC0LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCDRgtCw0LnQvNC10YDQsFxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE2MDAwKTtcblx0XHRzZXRUaW1lb3V0KGhpZGVCdG4sIDUwMCk7XG5cdFx0c2V0VGltZW91dChhZGRUb3BCb3RBbmltLCAyMjAwMCk7XG5cdFx0c2V0VGltZW91dChhZGRMZWZ0UmlnaHRBbmltLCA0MjAwMCk7XG5cdFx0aWYoeCA+IDEgJiYgeCA8PSAxMDgzKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA1OTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA3NDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgNzkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDk2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTEzMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDEyODAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxMzMwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxNzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTg2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAxOTEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyMzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjQ2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjUxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAyNzAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDI5MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMDYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzMTEwMDApO1xuXHRcdFx0XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDM0MjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDM0MzAwMCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYoeCA+IDEwODMgJiYgeCA8PSAxNjQzKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA2MjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA3NzAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgODIwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEwMjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEyMjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxMzcwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTQyMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTg2MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjA2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjUwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI2NTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI3MDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMjg5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzMTAwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzMwMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDb250Q2lyY2xlLCAzNjEwMDApO1xuXHRcdFx0c2V0VGltZW91dChzaG93QnRuLCAzNjIwMDApO1xuXHRcdH1cblx0XHRlbHNlIGlmKHggPiAxNjQzICYmIHggPD0gMzAwOCkge1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgNjUwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgODAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDg1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMDgwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxMzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTQ2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE1MTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyMTYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDIyMTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDI3MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyODYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyOTEwMDApO1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDMxMDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzMxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDM0NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDM1MTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ29udENpcmNsZSwgMzgyMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoc2hvd0J0biwgMzgzMDAwKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoeCA+IDMwMDgpIHtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDc0MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDg5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA5NDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTI2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTU4MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE3MzAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNzgwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyMzQwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjQ5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyNTQwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAzMTAwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMzMwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAzNDkwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDM3MDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzODUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzOTAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDQyMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDQyMjAwMCk7XG5cdFx0fVxuXHR9O1xufVxuXG4vLyDQk9C10L3QtdGA0LDRgtC+0YAg0LPRgNCw0LTQuNC10L3RgtC+0LJcbnZhciBlbEdyYWRpZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFkaWVudFwiKTtcbmlmKGVsR3JhZGllbnQpIHtcblx0Ly8gdGFyZ2V0IHRvIGdpdmUgYmFja2dyb3VuZCB0b1xuXHR2YXIgJGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhZGllbnRcIik7XG5cdC8vIFJnYiB2YWxzIG9mIHRoZSBncmFkaWVudHNcblx0dmFyIGdyYWRpZW50cyA9IFtcblx0XHR7IHN0YXJ0OiBbMTEsNzIsMTA3XSwgc3RvcDogWzEwMywxNzgsMTExXSB9LFxuXHRcdHsgc3RhcnQ6IFsyNCwgOTAsIDE1N10sIHN0b3A6IFs2OCwxNjAsMTQxXSB9LFxuXHRcdHsgc3RhcnQ6IFsxMSwgMTM1LCAxNDddLCBzdG9wOiBbNjksMTA0LDIyMF0gfVxuXHRdO1xuXHQvLyBIb3cgbG9uZyBmb3IgZWFjaCB0cmFuc2l0aW9uXG5cdHZhciB0cmFuc2l0aW9uX3RpbWUgPSAxNjtcblxuXHQvLyBJbnRlcm5hbCB0eXBlIHZhcnNcblx0dmFyIGN1cnJlbnRJbmRleCA9IDA7IC8vIHdoZXJlIHdlIGFyZSBpbiB0aGUgZ3JhZGllbnRzIGFycmF5XG5cdHZhciBuZXh0SW5kZXggPSAxOyAvLyB3aGF0IGluZGV4IG9mIHRoZSBncmFkaWVudHMgYXJyYXkgaXMgbmV4dFxuXHR2YXIgc3RlcHNfY291bnQgPSAwOyAvLyBzdGVwcyBjb3VudGVyXG5cdHZhciBzdGVwc190b3RhbCA9IE1hdGgucm91bmQodHJhbnNpdGlvbl90aW1lKjYwKTsgLy8gdG90YWwgYW1vdW50IG9mIHN0ZXBzXG5cdHZhciByZ2Jfc3RlcHMgPSB7XG5cdFx0c3RhcnQ6IFswLDAsMF0sXG5cdFx0c3RvcDogWzAsMCwwXVxuXHR9OyAvLyBIb3cgbXVjaCB0byBhbHRlciBlYWNoIHJnYiB2YWx1ZVxuXHR2YXIgcmdiX3ZhbHVlcyA9IHtcblx0XHRzdGFydDogWzAsMCwwXSxcblx0XHRzdG9wOiBbMCwwLDBdXG5cdH07IC8vIFRoZSBjdXJyZW50IHJnYiB2YWx1ZXMsIGdldHMgYWx0ZXJlZCBieSByZ2Igc3RlcHMgb24gZWFjaCBpbnRlcnZhbFxuXHR2YXIgcHJlZml4ZXMgPSBbXCItd2Via2l0LVwiLFwiLW1vei1cIixcIi1vLVwiLFwiLW1zLVwiLFwiXCJdOyAvLyBmb3IgbG9vcGluZyB0aHJvdWdoIGFkZGluZyBzdHlsZXNcblx0dmFyIGRpdl9zdHlsZSA9ICRkaXYuc3R5bGU7IC8vIHNob3J0IGN1dCB0byBhY3R1YWxseSBhZGRpbmcgc3R5bGVzXG5cdHZhciBjb2xvcjEsIGNvbG9yMjtcblxuXHQvLyBTZXRzIG5leHQgY3VycmVudCBhbmQgbmV4dCBpbmRleCBvZiBncmFkaWVudHMgYXJyYXlcblx0ZnVuY3Rpb24gc2V0X25leHQobnVtKSB7XG5cdFx0cmV0dXJuIChudW0gKyAxIDwgZ3JhZGllbnRzLmxlbmd0aCkgPyBudW0gKyAxIDogMDtcblx0fVxuXG5cdC8vIFdvcmsgb3V0IGhvdyBiaWcgZWFjaCByZ2Igc3RlcCBpc1xuXHRmdW5jdGlvbiBjYWxjX3N0ZXBfc2l6ZShhLGIpIHtcblx0XHRyZXR1cm4gKGEgLSBiKSAvIHN0ZXBzX3RvdGFsO1xuXHR9XG5cblx0Ly8gUG9wdWxhdGUgdGhlIHJnYl92YWx1ZXMgYW5kIHJnYl9zdGVwcyBvYmplY3RzXG5cdGZ1bmN0aW9uIGNhbGNfc3RlcHMoKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIHJnYl92YWx1ZXMpIHtcblx0XHRcdGlmIChyZ2JfdmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0XHRcdHJnYl92YWx1ZXNba2V5XVtpXSA9IGdyYWRpZW50c1tjdXJyZW50SW5kZXhdW2tleV1baV07XG5cdFx0XHRcdFx0cmdiX3N0ZXBzW2tleV1baV0gPSBjYWxjX3N0ZXBfc2l6ZShncmFkaWVudHNbbmV4dEluZGV4XVtrZXldW2ldLHJnYl92YWx1ZXNba2V5XVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBVcGRhdGUgY3VycmVudCByZ2IgdmFscywgdXBkYXRlIERPTSBlbGVtZW50IHdpdGggbmV3IENTUyBiYWNrZ3JvdW5kXG5cdGZ1bmN0aW9uIHVwZGF0ZUdyYWRpZW50KCl7XG5cdFx0Ly8gdXBkYXRlIHRoZSBjdXJyZW50IHJnYiB2YWxzXG5cdFx0Zm9yICh2YXIga2V5IGluIHJnYl92YWx1ZXMpIHtcblx0XHRcdGlmIChyZ2JfdmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0XHRcdHJnYl92YWx1ZXNba2V5XVtpXSArPSByZ2Jfc3RlcHNba2V5XVtpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIENTUyByZ2IgdmFsdWVzXG5cdFx0dmFyIHRfY29sb3IxID0gXCJyZ2IoXCIrKHJnYl92YWx1ZXMuc3RhcnRbMF0gfCAwKStcIixcIisocmdiX3ZhbHVlcy5zdGFydFsxXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0YXJ0WzJdIHwgMCkrXCIpXCI7XG5cdFx0dmFyIHRfY29sb3IyID0gXCJyZ2IoXCIrKHJnYl92YWx1ZXMuc3RvcFswXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0b3BbMV0gfCAwKStcIixcIisocmdiX3ZhbHVlcy5zdG9wWzJdIHwgMCkrXCIpXCI7XG5cblx0XHQvLyBIYXMgYW55dGhpbmcgY2hhbmdlZCBvbiB0aGlzIGludGVyYXRpb25cblx0XHRpZiAodF9jb2xvcjEgIT0gY29sb3IxIHx8IHRfY29sb3IyICE9IGNvbG9yMikge1xuXG5cdFx0XHQvLyBVcGRhdGUgY29scyBzdHJpbmdzXG5cdFx0XHRjb2xvcjEgPSB0X2NvbG9yMTtcblx0XHRcdGNvbG9yMiA9IHRfY29sb3IyO1xuXG5cdFx0XHQvLyBVcGRhdGUgRE9NIGVsZW1lbnQgc3R5bGUgYXR0cmlidXRlXG5cdFx0XHRkaXZfc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCItd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgZnJvbShcIitjb2xvcjErXCIpLCB0byhcIitjb2xvcjIrXCIpKVwiO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0ZGl2X3N0eWxlLmJhY2tncm91bmRJbWFnZSA9IHByZWZpeGVzW2ldK1wibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBcIitjb2xvcjErXCIsIFwiK2NvbG9yMitcIilcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBXZSBkaWQgYW5vdGhlciBzdGVwXG5cdFx0c3RlcHNfY291bnQrKztcblx0XHQvLyBEaWQgd2UgZG8gdG9vIG1hbnkgc3RlcHM/XG5cdFx0aWYgKHN0ZXBzX2NvdW50ID4gc3RlcHNfdG90YWwpIHtcblx0XHRcdC8vIFJlc2V0IHN0ZXBzIGNvdW50XG5cdFx0XHRzdGVwc19jb3VudCA9IDA7XG5cdFx0XHQvLyBTZXQgbmV3IGluZGV4c1xuXHRcdFx0Y3VycmVudEluZGV4ID0gc2V0X25leHQoY3VycmVudEluZGV4KTtcblx0XHRcdG5leHRJbmRleCA9IHNldF9uZXh0KG5leHRJbmRleCk7XG5cdFx0XHQvLyBDYWxjIHN0ZXBzXG5cdFx0XHRjYWxjX3N0ZXBzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpdl9zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5kZXhPZihcImdyYWRpZW50XCIpICE9IC0xKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUdyYWRpZW50KTtcblx0XHR9XG5cdH1cblxuXHQvLyBJbml0aWFsIHN0ZXAgY2FsY1xuXHRjYWxjX3N0ZXBzKCk7XG5cblx0Ly8gU3RhcnRcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVHcmFkaWVudCk7XG59OyJdLCJmaWxlIjoibWFpbi5qcyJ9
