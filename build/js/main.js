// Определение ширины дисплея
var x = screen.width;
var y = screen.height;
console.log(x);
console.log(y);

// var abc = function() {
// 	if (x >= y) {
// 		console.log("x >= y");
// 		var abcd = function() {
// 			var elements = document.getElementsByClassName("orbit-circle");
// 			for(var i = 0; i < elements.length; i++) { 
// 				elements[i].style.animation = "orbit-clockwise-help 2s linear 1s normal forwards running, orbit-counterclock-wise-help 2s linear 36s reverse forwards running";
// 			}
// 			console.log("16x9 Done!");
// 			}();
// 	}
// 	else {
// 		console.log("x < y");
// 		var adcde = function() {
// 			var elements = document.getElementsByClassName("orbit-circle");
// 			for(var i = 0; i < elements.length; i++) { 
// 				elements[i].style.animation = "orbit-clockwise-help-4x3 2s linear 1s normal forwards running, orbit-counterclock-wise-help-4x3 2s linear 36s reverse forwards running";
// 		}
// 		console.log("4x3 Done!");
// 		}();
// 		}
// };

// var fgd = function() {
// 	if (x >= y) {
// 		console.log("x >= y");
// 		var fghhh = function() {
// 			var elements = document.getElementsByClassName("orbit-circle");
// 			for(var i = 0; i < elements.length; i++) { 
// 				elements[i].removeAttribute("style");
// 			}
// 			console.log("16x9 Done!");
// 			}();
// 	}
// 	else {
// 		console.log("x < y");
// 		var dfffgg = function() {
// 			var elements = document.getElementsByClassName("orbit-circle");
// 			for(var i = 0; i < elements.length; i++) { 
// 				elements[i].removeAttribute("style");
// 		}
// 		console.log("4x3 Done!");
// 		}();
// 		}
// };

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
	// document.getElementById("anim-circle").classList.remove("orbit-circle");
	// document.getElementById("anim-circle").classList.add("main-circle");
	document.getElementById("anim-main").classList.add("circle-snake-right-left");
};

// Запуск таймера
startanim.onclick = function() {
	// Таймер, задержка перед началом анимации
	var seconds = 20;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINCe0L/RgNC10LTQtdC70LXQvdC40LUg0YjQuNGA0LjQvdGLINC00LjRgdC/0LvQtdGPXG52YXIgeCA9IHNjcmVlbi53aWR0aDtcbnZhciB5ID0gc2NyZWVuLmhlaWdodDtcbmNvbnNvbGUubG9nKHgpO1xuY29uc29sZS5sb2coeSk7XG5cbi8vIHZhciBhYmMgPSBmdW5jdGlvbigpIHtcbi8vIFx0aWYgKHggPj0geSkge1xuLy8gXHRcdGNvbnNvbGUubG9nKFwieCA+PSB5XCIpO1xuLy8gXHRcdHZhciBhYmNkID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0XHR2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3JiaXQtY2lyY2xlXCIpO1xuLy8gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7IFxuLy8gXHRcdFx0XHRlbGVtZW50c1tpXS5zdHlsZS5hbmltYXRpb24gPSBcIm9yYml0LWNsb2Nrd2lzZS1oZWxwIDJzIGxpbmVhciAxcyBub3JtYWwgZm9yd2FyZHMgcnVubmluZywgb3JiaXQtY291bnRlcmNsb2NrLXdpc2UtaGVscCAycyBsaW5lYXIgMzZzIHJldmVyc2UgZm9yd2FyZHMgcnVubmluZ1wiO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0Y29uc29sZS5sb2coXCIxNng5IERvbmUhXCIpO1xuLy8gXHRcdFx0fSgpO1xuLy8gXHR9XG4vLyBcdGVsc2Uge1xuLy8gXHRcdGNvbnNvbGUubG9nKFwieCA8IHlcIik7XG4vLyBcdFx0dmFyIGFkY2RlID0gZnVuY3Rpb24oKSB7XG4vLyBcdFx0XHR2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3JiaXQtY2lyY2xlXCIpO1xuLy8gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7IFxuLy8gXHRcdFx0XHRlbGVtZW50c1tpXS5zdHlsZS5hbmltYXRpb24gPSBcIm9yYml0LWNsb2Nrd2lzZS1oZWxwLTR4MyAycyBsaW5lYXIgMXMgbm9ybWFsIGZvcndhcmRzIHJ1bm5pbmcsIG9yYml0LWNvdW50ZXJjbG9jay13aXNlLWhlbHAtNHgzIDJzIGxpbmVhciAzNnMgcmV2ZXJzZSBmb3J3YXJkcyBydW5uaW5nXCI7XG4vLyBcdFx0fVxuLy8gXHRcdGNvbnNvbGUubG9nKFwiNHgzIERvbmUhXCIpO1xuLy8gXHRcdH0oKTtcbi8vIFx0XHR9XG4vLyB9O1xuXG4vLyB2YXIgZmdkID0gZnVuY3Rpb24oKSB7XG4vLyBcdGlmICh4ID49IHkpIHtcbi8vIFx0XHRjb25zb2xlLmxvZyhcInggPj0geVwiKTtcbi8vIFx0XHR2YXIgZmdoaGggPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRcdHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcmJpdC1jaXJjbGVcIik7XG4vLyBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHsgXG4vLyBcdFx0XHRcdGVsZW1lbnRzW2ldLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuLy8gXHRcdFx0fVxuLy8gXHRcdFx0Y29uc29sZS5sb2coXCIxNng5IERvbmUhXCIpO1xuLy8gXHRcdFx0fSgpO1xuLy8gXHR9XG4vLyBcdGVsc2Uge1xuLy8gXHRcdGNvbnNvbGUubG9nKFwieCA8IHlcIik7XG4vLyBcdFx0dmFyIGRmZmZnZyA9IGZ1bmN0aW9uKCkge1xuLy8gXHRcdFx0dmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9yYml0LWNpcmNsZVwiKTtcbi8vIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykgeyBcbi8vIFx0XHRcdFx0ZWxlbWVudHNbaV0ucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4vLyBcdFx0fVxuLy8gXHRcdGNvbnNvbGUubG9nKFwiNHgzIERvbmUhXCIpO1xuLy8gXHRcdH0oKTtcbi8vIFx0XHR9XG4vLyB9O1xuXG4vLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciBBZGRMaW5lYXJDb250ID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJsaW5lYXItY29udFwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgQWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQudC90LXRgNCwINGC0LDQudC80LXRgNCwXG52YXIgSGlkZVRpbWVyID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXItY29udFwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi10aW1lci1oaWRlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciBBZGRDaXJjbGVCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+0YHQu9C1INC60YDRg9Cz0L7QstC+0Lkg0LDQvdC40LzQsNGG0LjQuFxudmFyIEFkZENpcmNsZU9yYml0QmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3JiaXQtY2lyY2xlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmJpdC1jaXJjbGUtNHgzXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgUmVtb3ZlQ2lyY2xlQmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LLQtdGA0YUgLSDQvdC40LcpXG52YXIgQWRkVG9wQm90QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvcC1ib3RcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQu9C10LLQviAtINC/0YDQsNCy0L4pIFxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIEFkZExlZnRSaWdodEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3AtYm90XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC/0YDQsNCy0L4gLSDQvdC40Lcg0LvQtdCy0L4pIFxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbnZhciBBZGRUb3BSaWdodEJvdExlZnRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtbGVmdC1yaWdodFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3ByaWdodC1ib3RsZWZ0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQu9C10LLQviAtINC90LjQtyDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC/0YDQsNCy0L4gLSDQvdC40Lcg0LvQtdCy0L4pXG52YXIgQWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcHJpZ2h0LWJvdGxlZnRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wbGVmdC1ib3RyaWdodFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0LvQtdCy0L4gLSDQvdC40Lcg0L/RgNCw0LLQvilcbnZhciBBZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG52YXIgQWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNvdW50ZXJjbG9jay13aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxudmFyIEFkZENpcmNsZU9yYml0Q2xvY2t3aXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtc3F1YXJlLWNvdW50ZXJjbG9jay13aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluLWNpcmNsZVwiKTtcblx0aWYgKHggPj0geSkge1xuXHRcdGNvbnNvbGUubG9nKFwieCA+PSB5XCIpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZVwiKTtcblx0fVxuXHRlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcInggPCB5XCIpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdFx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBBZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0LfQvNC10LnQutC+0LkgKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxudmFyIEFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZVwiKTtcblx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc25ha2UtcmlnaHQtbGVmdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDRgtCw0LnQvNC10YDQsFxuc3RhcnRhbmltLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0Ly8g0KLQsNC50LzQtdGALCDQt9Cw0LTQtdGA0LbQutCwINC/0LXRgNC10LQg0L3QsNGH0LDQu9C+0Lwg0LDQvdC40LzQsNGG0LjQuFxuXHR2YXIgc2Vjb25kcyA9IDIwO1xuXHR2YXIgU3RhcnRUaW1lciA9IGZ1bmN0aW9uKCkge1xuXHQvLyBpZihzZWNvbmRzIDwgOSkge1xuXHQvLyBcdHNlY29uZHMgPSBcIjBcIiArIHNlY29uZHM7XG5cdC8vIH1cblx0aWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQpIHtcblx0XHR0aW1lci5pbm5lckhUTUwgPSBzZWNvbmRzO1xuXHR9XG5cdGlmKHNlY29uZHMgPT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRzZWNvbmRzLS07XG5cdHNldFRpbWVvdXQoU3RhcnRUaW1lciwgMTAwMCk7XG5cdH07XG5cdFN0YXJ0VGltZXIoKTtcblx0QWRkTGluZWFyQ29udCgpO1xuXHRBZGRNYWluQ2lyY2xlKCk7XG5cdC8vINCh0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQudC90LXRgNCwINGC0LDQudC80LXRgNCwXG5cdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDEwMDApO1xuXHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNjAwMCk7XG5cdHNldFRpbWVvdXQoSGlkZVRpbWVyLCAyMTAwMCk7XG5cblx0c2V0VGltZW91dChBZGRUb3BCb3RBbmltLCAyMjAwMCk7XG5cblx0c2V0VGltZW91dChBZGRMZWZ0UmlnaHRBbmltLCA0MjAwMCk7XG5cblx0aWYoeCA+IDEgJiYgeCA8PSAxMDgzKSB7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgNTkwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDc0MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgNzkwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCA5NjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxMTMwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDEyODAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTMzMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDE3MTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMTg2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMTkxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDIzMTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMjQ2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI1MTAwMCk7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDI3MDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDI5MTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMzA2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDMxMTAwMCk7XG5cdH1cblx0ZWxzZSBpZih4ID4gMTA4MyAmJiB4IDw9IDE2NDMpIHtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCA2MjAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgNzcwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BSaWdodEJvdExlZnRBbmltLCA4MjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEwMjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxMjIwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDEzNzAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTQyMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDE4NjAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMjAxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjA2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDI1MDAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMjY1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI3MDAwMCk7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDI4OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDMxMDAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDMzMDAwMCk7XG5cdH1cblx0ZWxzZSBpZih4ID4gMTY0MyAmJiB4IDw9IDMwMDgpIHtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCA2NTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgODAwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BSaWdodEJvdExlZnRBbmltLCA4NTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEwODAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxMzEwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE0NjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTUxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMjE2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjIxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDI3MTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMjg2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDI5MTAwMCk7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDMxMDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDMzMTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMzQ2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDM1MTAwMCk7XG5cdH1cblx0ZWxzZSBpZiAoeCA+IDMwMDgpIHtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCA3NDAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgODkwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BSaWdodEJvdExlZnRBbmltLCA5NDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEyNjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCAxNTgwMDApO1xuXHRcdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE3MzAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTc4MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDIzNDAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMjQ5MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjU0MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDMxMDAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDMzMDAwMCk7XG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDM0OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDM3MDAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMzg1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDM5MDAwMCk7XG5cdH1cbn07Il0sImZpbGUiOiJtYWluLmpzIn0=
