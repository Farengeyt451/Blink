// ------------------------
// JS код для главного меню
// ------------------------

// jQuery(document).ready(function(){
// 	if( $(".cd-stretchy-nav").length > 0 ) {
// 		var stretchyNavs = $(".cd-stretchy-nav");
		
// 		stretchyNavs.each(function(){
// 			var stretchyNav = $(this),
// 				stretchyNavTrigger = stretchyNav.find(".cd-nav-trigger");
			
// 			stretchyNavTrigger.on("click", function(event){
// 				event.preventDefault();
// 				stretchyNav.toggleClass("nav-is-visible");
// 			});
// 		});

// 		$(document).on("click", function(event){
// 			( !$(event.target).is(".cd-nav-trigger") && !$(event.target).is(".cd-nav-trigger span") ) && stretchyNavs.removeClass("nav-is-visible");
// 		});
// 	}
// });
// // --------------------------------------------------

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
	document.getElementById("anim-main").classList.remove("linear-cont");
	document.getElementById("anim-circle").classList.add("main-circle-hide");
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

// Запуска анимации движения окружности по диагонали (верх право - низ лево)
// и удаление анимации движения окружности (лево - право)
var addTopRightBotLeftAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-left-right");
	document.getElementById("anim-main").classList.add("circle-topright-botleft");
};

// Запуска анимации движения окружности по диагонали (верх лево - низ право)
// и удаление анимации движения окружности по диагонали (верх право - низ лево)
var addTopLeftBotRightAnim = function() {
	document.getElementById("anim-main").classList.remove("circle-topright-botleft");
	document.getElementById("anim-main").classList.add("circle-topleft-botright");
};

// Запуска анимации движения окружности по квадрату (по часовой стрелке)
// и удаление анимации движения окружности по диагонали (верх лево - низ право)
var addCircleSquareClockwise = function() {
	document.getElementById("anim-main").classList.remove("circle-topleft-botright");
	document.getElementById("anim-main").classList.add("circle-square-clockwise");
};

// Запуска анимации движения окружности по квадрату (против часовой стрелки)
// и удаление анимации движения окружности по квадрату (по часовой стрелке)
var addCircleSquareCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-square-clockwise");
	document.getElementById("anim-main").classList.add("circle-square-counterclock-wise");
};

// Запуска анимации движения окружности по кругу (по часовой стрелке)
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

// Запуска анимации движения окружности по кругу (против часовой стрелки)
// и удаление анимации движения окружности по кругу (по часовой стрелке)
var addCircleOrbitCounterclockWise = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-clockwise");
	document.getElementById("anim-main").classList.add("circle-orbit-counterclock-wise");
};

// Запуска анимации движения окружности змейкой (лево - право)
// и удаление анимации движения окружности по кругу (против часовой стрелки)
var addCircleSnakeRightLeft = function() {
	document.getElementById("anim-main").classList.remove("circle-orbit-counterclock-wise");
	document.getElementById("anim-main").classList.add("circle-snake-right-left");
};

// Запуск таймера

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
/*// Генератор градиента для фона
var colors = new Array(
	[11,72,107],
	[103,178,111],
	[24, 90, 157],
	[68,160,141],
	[11, 135, 147],
	[69,104,220]);

var step = 0;
// Таблица цветов:
// Текущий цвет слева
// Следующий цвет слева
// Текущий цвет справа
// Следующий цвет справа
var colorIndices = [0,1,2,3];

// Скорость перехода
var gradientSpeed = 0.002;

function updateGradient()	{

	if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

$("#gradient").css({
	background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
	background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

	step += gradientSpeed;
	if ( step >= 1 )
	{
		step %= 1;
		colorIndices[0] = colorIndices[1];
		colorIndices[2] = colorIndices[3];

		colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	}
}

setInterval(updateGradient,50);*/
var elGradient = document.getElementById("gradient");
if(elGradient) {
	// target to give background to
	var $div = document.getElementById("gradient");
	// rgb vals of the gradients
	var gradients = [
		{ start: [128,179,171], stop: [30,41,58] },
		{ start: [255,207,160], stop: [234,92,68] },
		{ start: [212,121,121], stop: [130,105,151] }
	];
	// how long for each transition
	var transition_time = 4;

	// internal type vars
	var currentIndex = 0; // where we are in the gradients array
	var nextIndex = 1; // what index of the gradients array is next
	var steps_count = 0; // steps counter
	var steps_total = Math.round(transition_time*60); // total amount of steps
	var rgb_steps = {
		start: [0,0,0],
		stop: [0,0,0]
	}; // how much to alter each rgb value
	var rgb_values = {
		start: [0,0,0],
		stop: [0,0,0]
	}; // the current rgb values, gets altered by rgb steps on each interval
	var prefixes = ["-webkit-","-moz-","-o-","-ms-",""]; // for looping through adding styles
	var div_style = $div.style; // short cut to actually adding styles
	var color1, color2;

	// sets next current and next index of gradients array
	function set_next(num) {
		return (num + 1 < gradients.length) ? num + 1 : 0;
	}

	// work out how big each rgb step is
	function calc_step_size(a,b) {
		return (a - b) / steps_total;
	}

	// populate the rgb_values and rgb_steps objects
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

	// update current rgb vals, update DOM element with new CSS background
	function updateGradient(){
		// update the current rgb vals
		for (var key in rgb_values) {
			if (rgb_values.hasOwnProperty(key)) {
				for(var i = 0; i < 3; i++) {
					rgb_values[key][i] += rgb_steps[key][i];
				}
			}
		}

		// generate CSS rgb values
		var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
		var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

		// has anything changed on this interation
		if (t_color1 != color1 || t_color2 != color2) {

			// update cols strings
			color1 = t_color1;
			color2 = t_color2;

			// update DOM element style attribute
			div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
			for (var i = 0; i < 4; i++) {
				div_style.backgroundImage = prefixes[i]+"linear-gradient(45deg, "+color1+", "+color2+")";
			}
		}

		// we did another step
		steps_count++;
		// did we do too many steps?
		if (steps_count > steps_total) {
			// reset steps count
			steps_count = 0;
			// set new indexs
			currentIndex = set_next(currentIndex);
			nextIndex = set_next(nextIndex);
			// calc steps
			calc_steps();
		}

		if (div_style.backgroundImage.indexOf("gradient") != -1) {
			window.requestAnimationFrame(updateGradient)
		}
	}

	// initial step calc
	calc_steps();

	// go go go!
	window.requestAnimationFrame(updateGradient);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSlMg0LrQvtC0INC00LvRjyDQs9C70LDQstC90L7Qs9C+INC80LXQvdGOXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8galF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuLy8gXHRpZiggJChcIi5jZC1zdHJldGNoeS1uYXZcIikubGVuZ3RoID4gMCApIHtcbi8vIFx0XHR2YXIgc3RyZXRjaHlOYXZzID0gJChcIi5jZC1zdHJldGNoeS1uYXZcIik7XG5cdFx0XG4vLyBcdFx0c3RyZXRjaHlOYXZzLmVhY2goZnVuY3Rpb24oKXtcbi8vIFx0XHRcdHZhciBzdHJldGNoeU5hdiA9ICQodGhpcyksXG4vLyBcdFx0XHRcdHN0cmV0Y2h5TmF2VHJpZ2dlciA9IHN0cmV0Y2h5TmF2LmZpbmQoXCIuY2QtbmF2LXRyaWdnZXJcIik7XG5cdFx0XHRcbi8vIFx0XHRcdHN0cmV0Y2h5TmF2VHJpZ2dlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbi8vIFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIFx0XHRcdFx0c3RyZXRjaHlOYXYudG9nZ2xlQ2xhc3MoXCJuYXYtaXMtdmlzaWJsZVwiKTtcbi8vIFx0XHRcdH0pO1xuLy8gXHRcdH0pO1xuXG4vLyBcdFx0JChkb2N1bWVudCkub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG4vLyBcdFx0XHQoICEkKGV2ZW50LnRhcmdldCkuaXMoXCIuY2QtbmF2LXRyaWdnZXJcIikgJiYgISQoZXZlbnQudGFyZ2V0KS5pcyhcIi5jZC1uYXYtdHJpZ2dlciBzcGFuXCIpICkgJiYgc3RyZXRjaHlOYXZzLnJlbW92ZUNsYXNzKFwibmF2LWlzLXZpc2libGVcIik7XG4vLyBcdFx0fSk7XG4vLyBcdH1cbi8vIH0pO1xuLy8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKXtcblx0XHRpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSl7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGNsYXNzU3RyaW5nID0gZWxlbWVudC5jbGFzc05hbWUsIG5hbWVJbmRleCA9IGNsYXNzU3RyaW5nLmluZGV4T2YoY2xhc3NOYW1lKTtcblx0XHRpZiAobmFtZUluZGV4ID09IC0xKSB7XG5cdFx0XHRcdGNsYXNzU3RyaW5nICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdFx0Y2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZy5zdWJzdHIoMCwgbmFtZUluZGV4KSArIGNsYXNzU3RyaW5nLnN1YnN0cihuYW1lSW5kZXgrY2xhc3NOYW1lLmxlbmd0aCk7XG5cdFx0fVxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NTdHJpbmc7XG59XG5cbnZhciBlbE5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIik7XG5pZihlbE5hdil7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHRvZ2dsZUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1uYXZcIiksIFwibmF2LWlzLXZpc2libGVcIik7XG5cdH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEpTINC60L7QtCDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiyDQsdC70LjQvdC6XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDRiNC40YDQuNC90Ysg0LTQuNGB0L/Qu9C10Y9cbnZhciB4ID0gc2NyZWVuLndpZHRoO1xudmFyIHkgPSBzY3JlZW4uaGVpZ2h0O1xuXG4vLyDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0YHQvNC10L3QtSDQvtGA0LjQvdC10YLQsNGG0LjQuCDQstGM0Y7Qv9C+0YDRgtCwXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuLy8gfSk7XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwICgxMDAlINCy0YzRjtC/0L7RgNGC0LApINC00LvRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZExpbmVhckNvbnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImxpbmVhci1jb250XCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0Lgg0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDb250Q2lyY2xlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lYXItY29udFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jaXJjbGUtaGlkZVwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCBcItCd0LDRh9Cw0YLRjFwiXG52YXIgaGlkZUJ0biA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0YW5pbVwiKS5jbGFzc0xpc3QuYWRkKFwiYnRuLWhpZGVcIik7XG59O1xuXG4vLyDQntGC0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCBcItCd0LAg0LPQu9Cw0LLQvdGD0Y5cIlxudmFyIHNob3dCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1lbmQtaGlkZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1lbmQtc2hvd1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkQ2lyY2xlQmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QvtGB0LvQtSDQutGA0YPQs9C+0LLQvtC5INCw0L3QuNC80LDRhtC40LhcbnZhciBhZGRDaXJjbGVPcmJpdEJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3JiaXQtY2lyY2xlLTR4M1wiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIHJlbW92ZUNpcmNsZUJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIGFkZFRvcEJvdEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3AtYm90XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIGFkZExlZnRSaWdodEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3AtYm90XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC/0YDQsNCy0L4gLSDQvdC40Lcg0LvQtdCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxudmFyIGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1sZWZ0LXJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvcHJpZ2h0LWJvdGxlZnRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC70LXQstC+IC0g0L3QuNC3INC/0YDQsNCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbnZhciBhZGRUb3BMZWZ0Qm90UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQu9C10LLQviAtINC90LjQtyDQv9GA0LDQstC+KVxudmFyIGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcGxlZnQtYm90cmlnaHRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tY2lyY2xlXCIpO1xuXHRpZiAoeCA+PSB5KSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlXCIpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdFx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0LfQvNC10LnQutC+0LkgKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxudmFyIGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc25ha2UtcmlnaHQtbGVmdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDRgtCw0LnQvNC10YDQsFxuXG52YXIgZWxBbmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydGFuaW1cIik7XG5pZihlbEFuaW0pe1xuXHRzdGFydGFuaW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGFkZExpbmVhckNvbnQoKTtcblx0XHRhZGRNYWluQ2lyY2xlKCk7XG5cdFx0Ly8g0KHQutGA0YvRgtC40LUg0LrQvtC90YLQtdC50L3QtdGA0LAg0YLQsNC50LzQtdGA0LBcblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNjAwMCk7XG5cdFx0c2V0VGltZW91dChoaWRlQnRuLCA1MDApO1xuXHRcdHNldFRpbWVvdXQoYWRkVG9wQm90QW5pbSwgMjIwMDApO1xuXHRcdHNldFRpbWVvdXQoYWRkTGVmdFJpZ2h0QW5pbSwgNDIwMDApO1xuXHRcdGlmKHggPiAxICYmIHggPD0gMTA4Mykge1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgNTkwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgNzQwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDc5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCA5NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDExMzAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxMjgwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTMzMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTcxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE4NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMTkxMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjMxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI0NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI1MTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMjcwMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAyOTEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzA2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzExMDAwKTtcblx0XHRcdFxuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDb250Q2lyY2xlLCAzNDIwMDApO1xuXHRcdFx0c2V0VGltZW91dChzaG93QnRuLCAzNDMwMDApO1xuXHRcdH1cblx0XHRlbHNlIGlmKHggPiAxMDgzICYmIHggPD0gMTY0Mykge1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgNjIwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgNzcwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDgyMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMDIwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxMjIwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTM3MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE0MjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDE4NjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyMDEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDIwNjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDI1MDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNjUwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyNzAwMDApO1xuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDI4OTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzEwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMyNTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDMzMDAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ29udENpcmNsZSwgMzYxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoc2hvd0J0biwgMzYyMDAwKTtcblx0XHR9XG5cdFx0ZWxzZSBpZih4ID4gMTY0MyAmJiB4IDw9IDMwMDgpIHtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDY1MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDgwMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA4NTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTA4MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTMxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE0NjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNTEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyMDEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjE2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyMjEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyNzEwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjg2MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjkxMDAwKTtcblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAzMTAwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDMzMTAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzNDYwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzNTEwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDM4MjAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDM4MzAwMCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHggPiAzMDA4KSB7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA3NDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA4OTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgOTQwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEyNjAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDE1ODAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNzMwMDApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTc4MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjM0MDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI0OTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjU0MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMzEwMDAwKTtcblx0XHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMyNTAwMCk7XG5cblx0XHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDMzMDAwMCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMzQ5MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzNzAwMDApO1xuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzg1MDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzkwMDAwKTtcblxuXHRcdFx0c2V0VGltZW91dChyZW1vdmVDb250Q2lyY2xlLCA0MjEwMDApO1xuXHRcdFx0c2V0VGltZW91dChzaG93QnRuLCA0MjIwMDApO1xuXHRcdH1cblx0fTtcbn1cbi8qLy8g0JPQtdC90LXRgNCw0YLQvtGAINCz0YDQsNC00LjQtdC90YLQsCDQtNC70Y8g0YTQvtC90LBcbnZhciBjb2xvcnMgPSBuZXcgQXJyYXkoXG5cdFsxMSw3MiwxMDddLFxuXHRbMTAzLDE3OCwxMTFdLFxuXHRbMjQsIDkwLCAxNTddLFxuXHRbNjgsMTYwLDE0MV0sXG5cdFsxMSwgMTM1LCAxNDddLFxuXHRbNjksMTA0LDIyMF0pO1xuXG52YXIgc3RlcCA9IDA7XG4vLyDQotCw0LHQu9C40YbQsCDRhtCy0LXRgtC+0LI6XG4vLyDQotC10LrRg9GJ0LjQuSDRhtCy0LXRgiDRgdC70LXQstCwXG4vLyDQodC70LXQtNGD0Y7RidC40Lkg0YbQstC10YIg0YHQu9C10LLQsFxuLy8g0KLQtdC60YPRidC40Lkg0YbQstC10YIg0YHQv9GA0LDQstCwXG4vLyDQodC70LXQtNGD0Y7RidC40Lkg0YbQstC10YIg0YHQv9GA0LDQstCwXG52YXIgY29sb3JJbmRpY2VzID0gWzAsMSwyLDNdO1xuXG4vLyDQodC60L7RgNC+0YHRgtGMINC/0LXRgNC10YXQvtC00LBcbnZhciBncmFkaWVudFNwZWVkID0gMC4wMDI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyYWRpZW50KClcdHtcblxuXHRpZiAoICQ9PT11bmRlZmluZWQgKSByZXR1cm47XG5cbnZhciBjMF8wID0gY29sb3JzW2NvbG9ySW5kaWNlc1swXV07XG52YXIgYzBfMSA9IGNvbG9yc1tjb2xvckluZGljZXNbMV1dO1xudmFyIGMxXzAgPSBjb2xvcnNbY29sb3JJbmRpY2VzWzJdXTtcbnZhciBjMV8xID0gY29sb3JzW2NvbG9ySW5kaWNlc1szXV07XG5cbnZhciBpc3RlcCA9IDEgLSBzdGVwO1xudmFyIHIxID0gTWF0aC5yb3VuZChpc3RlcCAqIGMwXzBbMF0gKyBzdGVwICogYzBfMVswXSk7XG52YXIgZzEgPSBNYXRoLnJvdW5kKGlzdGVwICogYzBfMFsxXSArIHN0ZXAgKiBjMF8xWzFdKTtcbnZhciBiMSA9IE1hdGgucm91bmQoaXN0ZXAgKiBjMF8wWzJdICsgc3RlcCAqIGMwXzFbMl0pO1xudmFyIGNvbG9yMSA9IFwicmdiKFwiK3IxK1wiLFwiK2cxK1wiLFwiK2IxK1wiKVwiO1xuXG52YXIgcjIgPSBNYXRoLnJvdW5kKGlzdGVwICogYzFfMFswXSArIHN0ZXAgKiBjMV8xWzBdKTtcbnZhciBnMiA9IE1hdGgucm91bmQoaXN0ZXAgKiBjMV8wWzFdICsgc3RlcCAqIGMxXzFbMV0pO1xudmFyIGIyID0gTWF0aC5yb3VuZChpc3RlcCAqIGMxXzBbMl0gKyBzdGVwICogYzFfMVsyXSk7XG52YXIgY29sb3IyID0gXCJyZ2IoXCIrcjIrXCIsXCIrZzIrXCIsXCIrYjIrXCIpXCI7XG5cbiQoXCIjZ3JhZGllbnRcIikuY3NzKHtcblx0YmFja2dyb3VuZDogXCItd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShcIitjb2xvcjErXCIpLCB0byhcIitjb2xvcjIrXCIpKVwifSkuY3NzKHtcblx0YmFja2dyb3VuZDogXCItbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCBcIitjb2xvcjErXCIgMCUsIFwiK2NvbG9yMitcIiAxMDAlKVwifSk7XG5cblx0c3RlcCArPSBncmFkaWVudFNwZWVkO1xuXHRpZiAoIHN0ZXAgPj0gMSApXG5cdHtcblx0XHRzdGVwICU9IDE7XG5cdFx0Y29sb3JJbmRpY2VzWzBdID0gY29sb3JJbmRpY2VzWzFdO1xuXHRcdGNvbG9ySW5kaWNlc1syXSA9IGNvbG9ySW5kaWNlc1szXTtcblxuXHRcdGNvbG9ySW5kaWNlc1sxXSA9ICggY29sb3JJbmRpY2VzWzFdICsgTWF0aC5mbG9vciggMSArIE1hdGgucmFuZG9tKCkgKiAoY29sb3JzLmxlbmd0aCAtIDEpKSkgJSBjb2xvcnMubGVuZ3RoO1xuXHRcdGNvbG9ySW5kaWNlc1szXSA9ICggY29sb3JJbmRpY2VzWzNdICsgTWF0aC5mbG9vciggMSArIE1hdGgucmFuZG9tKCkgKiAoY29sb3JzLmxlbmd0aCAtIDEpKSkgJSBjb2xvcnMubGVuZ3RoO1xuXHR9XG59XG5cbnNldEludGVydmFsKHVwZGF0ZUdyYWRpZW50LDUwKTsqL1xudmFyIGVsR3JhZGllbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYWRpZW50XCIpO1xuaWYoZWxHcmFkaWVudCkge1xuXHQvLyB0YXJnZXQgdG8gZ2l2ZSBiYWNrZ3JvdW5kIHRvXG5cdHZhciAkZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFkaWVudFwiKTtcblx0Ly8gcmdiIHZhbHMgb2YgdGhlIGdyYWRpZW50c1xuXHR2YXIgZ3JhZGllbnRzID0gW1xuXHRcdHsgc3RhcnQ6IFsxMjgsMTc5LDE3MV0sIHN0b3A6IFszMCw0MSw1OF0gfSxcblx0XHR7IHN0YXJ0OiBbMjU1LDIwNywxNjBdLCBzdG9wOiBbMjM0LDkyLDY4XSB9LFxuXHRcdHsgc3RhcnQ6IFsyMTIsMTIxLDEyMV0sIHN0b3A6IFsxMzAsMTA1LDE1MV0gfVxuXHRdO1xuXHQvLyBob3cgbG9uZyBmb3IgZWFjaCB0cmFuc2l0aW9uXG5cdHZhciB0cmFuc2l0aW9uX3RpbWUgPSA0O1xuXG5cdC8vIGludGVybmFsIHR5cGUgdmFyc1xuXHR2YXIgY3VycmVudEluZGV4ID0gMDsgLy8gd2hlcmUgd2UgYXJlIGluIHRoZSBncmFkaWVudHMgYXJyYXlcblx0dmFyIG5leHRJbmRleCA9IDE7IC8vIHdoYXQgaW5kZXggb2YgdGhlIGdyYWRpZW50cyBhcnJheSBpcyBuZXh0XG5cdHZhciBzdGVwc19jb3VudCA9IDA7IC8vIHN0ZXBzIGNvdW50ZXJcblx0dmFyIHN0ZXBzX3RvdGFsID0gTWF0aC5yb3VuZCh0cmFuc2l0aW9uX3RpbWUqNjApOyAvLyB0b3RhbCBhbW91bnQgb2Ygc3RlcHNcblx0dmFyIHJnYl9zdGVwcyA9IHtcblx0XHRzdGFydDogWzAsMCwwXSxcblx0XHRzdG9wOiBbMCwwLDBdXG5cdH07IC8vIGhvdyBtdWNoIHRvIGFsdGVyIGVhY2ggcmdiIHZhbHVlXG5cdHZhciByZ2JfdmFsdWVzID0ge1xuXHRcdHN0YXJ0OiBbMCwwLDBdLFxuXHRcdHN0b3A6IFswLDAsMF1cblx0fTsgLy8gdGhlIGN1cnJlbnQgcmdiIHZhbHVlcywgZ2V0cyBhbHRlcmVkIGJ5IHJnYiBzdGVwcyBvbiBlYWNoIGludGVydmFsXG5cdHZhciBwcmVmaXhlcyA9IFtcIi13ZWJraXQtXCIsXCItbW96LVwiLFwiLW8tXCIsXCItbXMtXCIsXCJcIl07IC8vIGZvciBsb29waW5nIHRocm91Z2ggYWRkaW5nIHN0eWxlc1xuXHR2YXIgZGl2X3N0eWxlID0gJGRpdi5zdHlsZTsgLy8gc2hvcnQgY3V0IHRvIGFjdHVhbGx5IGFkZGluZyBzdHlsZXNcblx0dmFyIGNvbG9yMSwgY29sb3IyO1xuXG5cdC8vIHNldHMgbmV4dCBjdXJyZW50IGFuZCBuZXh0IGluZGV4IG9mIGdyYWRpZW50cyBhcnJheVxuXHRmdW5jdGlvbiBzZXRfbmV4dChudW0pIHtcblx0XHRyZXR1cm4gKG51bSArIDEgPCBncmFkaWVudHMubGVuZ3RoKSA/IG51bSArIDEgOiAwO1xuXHR9XG5cblx0Ly8gd29yayBvdXQgaG93IGJpZyBlYWNoIHJnYiBzdGVwIGlzXG5cdGZ1bmN0aW9uIGNhbGNfc3RlcF9zaXplKGEsYikge1xuXHRcdHJldHVybiAoYSAtIGIpIC8gc3RlcHNfdG90YWw7XG5cdH1cblxuXHQvLyBwb3B1bGF0ZSB0aGUgcmdiX3ZhbHVlcyBhbmQgcmdiX3N0ZXBzIG9iamVjdHNcblx0ZnVuY3Rpb24gY2FsY19zdGVwcygpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gcmdiX3ZhbHVlcykge1xuXHRcdFx0aWYgKHJnYl92YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRcdFx0cmdiX3ZhbHVlc1trZXldW2ldID0gZ3JhZGllbnRzW2N1cnJlbnRJbmRleF1ba2V5XVtpXTtcblx0XHRcdFx0XHRyZ2Jfc3RlcHNba2V5XVtpXSA9IGNhbGNfc3RlcF9zaXplKGdyYWRpZW50c1tuZXh0SW5kZXhdW2tleV1baV0scmdiX3ZhbHVlc1trZXldW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIHVwZGF0ZSBjdXJyZW50IHJnYiB2YWxzLCB1cGRhdGUgRE9NIGVsZW1lbnQgd2l0aCBuZXcgQ1NTIGJhY2tncm91bmRcblx0ZnVuY3Rpb24gdXBkYXRlR3JhZGllbnQoKXtcblx0XHQvLyB1cGRhdGUgdGhlIGN1cnJlbnQgcmdiIHZhbHNcblx0XHRmb3IgKHZhciBrZXkgaW4gcmdiX3ZhbHVlcykge1xuXHRcdFx0aWYgKHJnYl92YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRcdFx0cmdiX3ZhbHVlc1trZXldW2ldICs9IHJnYl9zdGVwc1trZXldW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gZ2VuZXJhdGUgQ1NTIHJnYiB2YWx1ZXNcblx0XHR2YXIgdF9jb2xvcjEgPSBcInJnYihcIisocmdiX3ZhbHVlcy5zdGFydFswXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0YXJ0WzFdIHwgMCkrXCIsXCIrKHJnYl92YWx1ZXMuc3RhcnRbMl0gfCAwKStcIilcIjtcblx0XHR2YXIgdF9jb2xvcjIgPSBcInJnYihcIisocmdiX3ZhbHVlcy5zdG9wWzBdIHwgMCkrXCIsXCIrKHJnYl92YWx1ZXMuc3RvcFsxXSB8IDApK1wiLFwiKyhyZ2JfdmFsdWVzLnN0b3BbMl0gfCAwKStcIilcIjtcblxuXHRcdC8vIGhhcyBhbnl0aGluZyBjaGFuZ2VkIG9uIHRoaXMgaW50ZXJhdGlvblxuXHRcdGlmICh0X2NvbG9yMSAhPSBjb2xvcjEgfHwgdF9jb2xvcjIgIT0gY29sb3IyKSB7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb2xzIHN0cmluZ3Ncblx0XHRcdGNvbG9yMSA9IHRfY29sb3IxO1xuXHRcdFx0Y29sb3IyID0gdF9jb2xvcjI7XG5cblx0XHRcdC8vIHVwZGF0ZSBET00gZWxlbWVudCBzdHlsZSBhdHRyaWJ1dGVcblx0XHRcdGRpdl9zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgcmlnaHQgdG9wLCBmcm9tKFwiK2NvbG9yMStcIiksIHRvKFwiK2NvbG9yMitcIikpXCI7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0XHRkaXZfc3R5bGUuYmFja2dyb3VuZEltYWdlID0gcHJlZml4ZXNbaV0rXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsIFwiK2NvbG9yMStcIiwgXCIrY29sb3IyK1wiKVwiO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHdlIGRpZCBhbm90aGVyIHN0ZXBcblx0XHRzdGVwc19jb3VudCsrO1xuXHRcdC8vIGRpZCB3ZSBkbyB0b28gbWFueSBzdGVwcz9cblx0XHRpZiAoc3RlcHNfY291bnQgPiBzdGVwc190b3RhbCkge1xuXHRcdFx0Ly8gcmVzZXQgc3RlcHMgY291bnRcblx0XHRcdHN0ZXBzX2NvdW50ID0gMDtcblx0XHRcdC8vIHNldCBuZXcgaW5kZXhzXG5cdFx0XHRjdXJyZW50SW5kZXggPSBzZXRfbmV4dChjdXJyZW50SW5kZXgpO1xuXHRcdFx0bmV4dEluZGV4ID0gc2V0X25leHQobmV4dEluZGV4KTtcblx0XHRcdC8vIGNhbGMgc3RlcHNcblx0XHRcdGNhbGNfc3RlcHMoKTtcblx0XHR9XG5cblx0XHRpZiAoZGl2X3N0eWxlLmJhY2tncm91bmRJbWFnZS5pbmRleE9mKFwiZ3JhZGllbnRcIikgIT0gLTEpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlR3JhZGllbnQpXG5cdFx0fVxuXHR9XG5cblx0Ly8gaW5pdGlhbCBzdGVwIGNhbGNcblx0Y2FsY19zdGVwcygpO1xuXG5cdC8vIGdvIGdvIGdvIVxuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZUdyYWRpZW50KTtcbn07Il0sImZpbGUiOiJtYWluLmpzIn0=
