// Определение ширины дисплея
var x = screen.width;
var y = screen.height;
console.log(x);
console.log(y);

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

// Запуск анимации мигания окружности после круговой анимации
var AddCircleOrbitBlinking = function() {
	document.getElementById("anim-circle").classList.remove("orbit-circle");
	document.getElementById("anim-circle").classList.remove("orbit-circle-4x3");
	document.getElementById("anim-circle").classList.add("main-circle");
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
	if (x >= y) {
		console.log("x >= y");
		document.getElementById("anim-circle").classList.add("orbit-circle");
	}
	else {
		console.log("x < y");
		document.getElementById("anim-circle").classList.add("orbit-circle-4x3");
		}
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
	document.getElementById("anim-main").classList.add("circle-snake-right-left");
};

// Запуск таймера
startanim.onclick = function() {
	// Таймер, задержка перед началом анимации
	var seconds = 20;
	var StartTimer = function() {
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
	setTimeout(RemoveCircleBlinking, 16000);
	setTimeout(HideTimer, 21000);

	setTimeout(AddTopBotAnim, 22000);

	setTimeout(AddLeftRightAnim, 42000);

	if(x > 1 && x <= 1083) {
		setTimeout(AddCircleBlinking, 59000);
		setTimeout(RemoveCircleBlinking, 74000);

		setTimeout(AddTopRightBotLeftAnim, 79000);

		setTimeout(AddTopLeftBotRightAnim, 96000);

		setTimeout(AddCircleBlinking, 113000);
		setTimeout(RemoveCircleBlinking, 128000);

		setTimeout(AddCircleSquareClockwise, 133000);

		setTimeout(AddCircleBlinking, 171000);
		setTimeout(RemoveCircleBlinking, 186000);

		setTimeout(AddCircleSquareCounterclockWise, 191000);

		setTimeout(AddCircleBlinking, 231000);
		setTimeout(RemoveCircleBlinking, 246000);

		setTimeout(AddCircleOrbitClockwise, 251000);
		setTimeout(AddCircleOrbitCounterclockWise, 270000);

		setTimeout(AddCircleOrbitBlinking, 291000);
		setTimeout(RemoveCircleBlinking, 306000);

		setTimeout(AddCircleSnakeRightLeft, 311000);
	}
	else if(x > 1083 && x <= 1643) {
		setTimeout(AddCircleBlinking, 62000);
		setTimeout(RemoveCircleBlinking, 77000);

		setTimeout(AddTopRightBotLeftAnim, 82000);

		setTimeout(AddTopLeftBotRightAnim, 102000);

		setTimeout(AddCircleBlinking, 122000);
		setTimeout(RemoveCircleBlinking, 137000);

		setTimeout(AddCircleSquareClockwise, 142000);

		setTimeout(AddCircleBlinking, 186000);
		setTimeout(RemoveCircleBlinking, 201000);

		setTimeout(AddCircleSquareCounterclockWise, 206000);

		setTimeout(AddCircleBlinking, 250000);
		setTimeout(RemoveCircleBlinking, 265000);

		setTimeout(AddCircleOrbitClockwise, 270000);
		setTimeout(AddCircleOrbitCounterclockWise, 289000);

		setTimeout(AddCircleOrbitBlinking, 310000);
		setTimeout(RemoveCircleBlinking, 325000);

		setTimeout(AddCircleSnakeRightLeft, 330000);
	}
	else if(x > 1643 && x <= 3008) {
		setTimeout(AddCircleBlinking, 65000);
		setTimeout(RemoveCircleBlinking, 80000);

		setTimeout(AddTopRightBotLeftAnim, 85000);

		setTimeout(AddTopLeftBotRightAnim, 108000);

		setTimeout(AddCircleBlinking, 131000);
		setTimeout(RemoveCircleBlinking, 146000);

		setTimeout(AddCircleSquareClockwise, 151000);

		setTimeout(AddCircleBlinking, 201000);
		setTimeout(RemoveCircleBlinking, 216000);

		setTimeout(AddCircleSquareCounterclockWise, 221000);

		setTimeout(AddCircleBlinking, 271000);
		setTimeout(RemoveCircleBlinking, 286000);

		setTimeout(AddCircleOrbitClockwise, 291000);
		setTimeout(AddCircleOrbitCounterclockWise, 310000);

		setTimeout(AddCircleOrbitBlinking, 331000);
		setTimeout(RemoveCircleBlinking, 346000);

		setTimeout(AddCircleSnakeRightLeft, 351000);
	}
	else if (x > 3008) {
		setTimeout(AddCircleBlinking, 74000);
		setTimeout(RemoveCircleBlinking, 89000);

		setTimeout(AddTopRightBotLeftAnim, 94000);

		setTimeout(AddTopLeftBotRightAnim, 126000);

		setTimeout(AddCircleBlinking, 158000);
		setTimeout(RemoveCircleBlinking, 173000);

		setTimeout(AddCircleSquareClockwise, 178000);

		setTimeout(AddCircleBlinking, 234000);
		setTimeout(RemoveCircleBlinking, 249000);

		setTimeout(AddCircleSquareCounterclockWise, 254000);

		setTimeout(AddCircleBlinking, 310000);
		setTimeout(RemoveCircleBlinking, 325000);

		setTimeout(AddCircleOrbitClockwise, 330000);
		setTimeout(AddCircleOrbitCounterclockWise, 349000);

		setTimeout(AddCircleOrbitBlinking, 370000);
		setTimeout(RemoveCircleBlinking, 385000);

		setTimeout(AddCircleSnakeRightLeft, 390000);
	}
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCe0L/RgNC10LTQtdC70LXQvdC40LUg0YjQuNGA0LjQvdGLINC00LjRgdC/0LvQtdGPXG52YXIgeCA9IHNjcmVlbi53aWR0aDtcbnZhciB5ID0gc2NyZWVuLmhlaWdodDtcbmNvbnNvbGUubG9nKHgpO1xuY29uc29sZS5sb2coeSk7XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwICgxMDAlINCy0YzRjtC/0L7RgNGC0LApINC00LvRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIEFkZExpbmVhckNvbnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImxpbmVhci1jb250XCIpO1xufTtcblxuLy8g0JTQvtCx0LDQstC70LXQvdC40LUg0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciBBZGRNYWluQ2lyY2xlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlXCIpO1xufTtcblxuLy8g0KHQutGA0YvRgtC40LUg0LrQvtC90YLQtdC50L3QtdGA0LAg0YLQsNC50LzQtdGA0LBcbnZhciBIaWRlVGltZXIgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lci1jb250XCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLXRpbWVyLWhpZGVcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIEFkZENpcmNsZUJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L7RgdC70LUg0LrRgNGD0LPQvtCy0L7QuSDQsNC90LjQvNCw0YbQuNC4XG52YXIgQWRkQ2lyY2xlT3JiaXRCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmJpdC1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm1haW4tY2lyY2xlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQo9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciBSZW1vdmVDaXJjbGVCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQstC10YDRhSAtINC90LjQtylcbnZhciBBZGRUb3BCb3RBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wLWJvdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNC70LXQstC+IC0g0L/RgNCw0LLQvikgXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LLQtdGA0YUgLSDQvdC40LcpXG52YXIgQWRkTGVmdFJpZ2h0QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcC1ib3RcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtbGVmdC1yaWdodFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvikgXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxudmFyIEFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1sZWZ0LXJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvcHJpZ2h0LWJvdGxlZnRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC70LXQstC+IC0g0L3QuNC3INC/0YDQsNCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbnZhciBBZGRUb3BMZWZ0Qm90UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQu9C10LLQviAtINC90LjQtyDQv9GA0LDQstC+KVxudmFyIEFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcGxlZnQtYm90cmlnaHRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBBZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgQWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tY2lyY2xlXCIpO1xuXHRpZiAoeCA+PSB5KSB7XG5cdFx0Y29uc29sZS5sb2coXCJ4ID49IHlcIik7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlXCIpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKFwieCA8IHlcIik7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlLTR4M1wiKTtcblx0XHR9XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY2xvY2t3aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxudmFyIEFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1vcmJpdC1jb3VudGVyY2xvY2std2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQt9C80LXQudC60L7QuSAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgQWRkQ2lyY2xlU25ha2VSaWdodExlZnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jb3VudGVyY2xvY2std2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zbmFrZS1yaWdodC1sZWZ0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INGC0LDQudC80LXRgNCwXG5zdGFydGFuaW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXHQvLyDQotCw0LnQvNC10YAsINC30LDQtNC10YDQttC60LAg0L/QtdGA0LXQtCDQvdCw0YfQsNC70L7QvCDQsNC90LjQvNCw0YbQuNC4XG5cdHZhciBzZWNvbmRzID0gMjA7XG5cdHZhciBTdGFydFRpbWVyID0gZnVuY3Rpb24oKSB7XG5cdGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKSB7XG5cdFx0dGltZXIuaW5uZXJIVE1MID0gc2Vjb25kcztcblx0fVxuXHRpZihzZWNvbmRzID09IDApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0c2Vjb25kcy0tO1xuXHRzZXRUaW1lb3V0KFN0YXJ0VGltZXIsIDEwMDApO1xuXHR9O1xuXHRTdGFydFRpbWVyKCk7XG5cdEFkZExpbmVhckNvbnQoKTtcblx0QWRkTWFpbkNpcmNsZSgpO1xuXHQvLyDQodC60YDRi9GC0LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCDRgtCw0LnQvNC10YDQsFxuXHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxMDAwKTtcblx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMTYwMDApO1xuXHRzZXRUaW1lb3V0KEhpZGVUaW1lciwgMjEwMDApO1xuXG5cdHNldFRpbWVvdXQoQWRkVG9wQm90QW5pbSwgMjIwMDApO1xuXG5cdHNldFRpbWVvdXQoQWRkTGVmdFJpZ2h0QW5pbSwgNDIwMDApO1xuXG5cdGlmKHggPiAxICYmIHggPD0gMTA4Mykge1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDU5MDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCA3NDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDc5MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgOTYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTEzMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAxMjgwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDEzMzAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxNzEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE4NjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDE5MTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAyMzEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI0NjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyNTEwMDApO1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAyNzAwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAyOTEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMwNjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzMTEwMDApO1xuXHR9XG5cdGVsc2UgaWYoeCA+IDEwODMgJiYgeCA8PSAxNjQzKSB7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgNjIwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDc3MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgODIwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMDIwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTIyMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAxMzcwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE0MjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxODYwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDIwNjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAyNTAwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI2NTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyNzAwMDApO1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAyODkwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzMTAwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMyNTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzMzAwMDApO1xuXHR9XG5cdGVsc2UgaWYoeCA+IDE2NDMgJiYgeCA8PSAzMDA4KSB7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgNjUwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDgwMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgODUwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMDgwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTMxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE1MTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAyMDEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDIxNjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDIyMTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAyNzEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI4NjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyOTEwMDApO1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAzMTAwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzMzEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDM0NjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzNTEwMDApO1xuXHR9XG5cdGVsc2UgaWYgKHggPiAzMDA4KSB7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgNzQwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDg5MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgOTQwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMjYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTU4MDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNzMwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE3ODAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAyMzQwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI0OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDI1NDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAzMTAwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMyNTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAzMzAwMDApO1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAzNDkwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzNzAwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDM4NTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzOTAwMDApO1xuXHR9XG59OyJdLCJmaWxlIjoibWFpbi5qcyJ9
