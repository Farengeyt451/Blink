// ------------------------
// JS код для главного меню
// ------------------------

jQuery(document).ready(function($){
	// Открыть меню
	$(".cd-menu-trigger").on("click", function(event){
		event.preventDefault();
		$("#cd-main-content").addClass("move-out");
		$("#main-nav").addClass("is-visible");
		$(".cd-shadow-layer").addClass("is-visible");
	});
	// Закрыть меню
	$(".cd-close-menu").on("click", function(event){
		event.preventDefault();
		$("#cd-main-content").removeClass("move-out");
		$("#main-nav").removeClass("is-visible");
		$(".cd-shadow-layer").removeClass("is-visible");
	});

	// Блюр эффект
	set_clip_property();
	$(window).on("resize", function(){
		set_clip_property();
	});

	function set_clip_property() {
		var $header_height = $(".cd-header").height(),
			$window_height = $(window).height(),
			$header_top = $window_height - $header_height,
			$window_width = $(window).width();
		$(".cd-blurred-bg").css("clip", "rect("+$header_top+"px, "+$window_width+"px, "+$window_height+"px, 0px)");
	}
});
// --------------------------------------------------



// ------------------------
// JS код для страницы блинк
// ------------------------

// Определение ширины дисплея
var x = screen.width;
var y = screen.height;

// Перезагрузка страницы при смене оринетации вьюпорта
window.addEventListener("orientationchange", function() {
		location.reload();
});

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

// Генерато градиента для фона
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

function updateGradient()
{

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

$('#gradient').css({
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

setInterval(updateGradient,50);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSlMg0LrQvtC0INC00LvRjyDQs9C70LDQstC90L7Qs9C+INC80LXQvdGOXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXtcblx0Ly8g0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y5cblx0JChcIi5jZC1tZW51LXRyaWdnZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiI2NkLW1haW4tY29udGVudFwiKS5hZGRDbGFzcyhcIm1vdmUtb3V0XCIpO1xuXHRcdCQoXCIjbWFpbi1uYXZcIikuYWRkQ2xhc3MoXCJpcy12aXNpYmxlXCIpO1xuXHRcdCQoXCIuY2Qtc2hhZG93LWxheWVyXCIpLmFkZENsYXNzKFwiaXMtdmlzaWJsZVwiKTtcblx0fSk7XG5cdC8vINCX0LDQutGA0YvRgtGMINC80LXQvdGOXG5cdCQoXCIuY2QtY2xvc2UtbWVudVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoXCIjY2QtbWFpbi1jb250ZW50XCIpLnJlbW92ZUNsYXNzKFwibW92ZS1vdXRcIik7XG5cdFx0JChcIiNtYWluLW5hdlwiKS5yZW1vdmVDbGFzcyhcImlzLXZpc2libGVcIik7XG5cdFx0JChcIi5jZC1zaGFkb3ctbGF5ZXJcIikucmVtb3ZlQ2xhc3MoXCJpcy12aXNpYmxlXCIpO1xuXHR9KTtcblxuXHQvLyDQkdC70Y7RgCDRjdGE0YTQtdC60YJcblx0c2V0X2NsaXBfcHJvcGVydHkoKTtcblx0JCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG5cdFx0c2V0X2NsaXBfcHJvcGVydHkoKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gc2V0X2NsaXBfcHJvcGVydHkoKSB7XG5cdFx0dmFyICRoZWFkZXJfaGVpZ2h0ID0gJChcIi5jZC1oZWFkZXJcIikuaGVpZ2h0KCksXG5cdFx0XHQkd2luZG93X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcblx0XHRcdCRoZWFkZXJfdG9wID0gJHdpbmRvd19oZWlnaHQgLSAkaGVhZGVyX2hlaWdodCxcblx0XHRcdCR3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHQkKFwiLmNkLWJsdXJyZWQtYmdcIikuY3NzKFwiY2xpcFwiLCBcInJlY3QoXCIrJGhlYWRlcl90b3ArXCJweCwgXCIrJHdpbmRvd193aWR0aCtcInB4LCBcIiskd2luZG93X2hlaWdodCtcInB4LCAwcHgpXCIpO1xuXHR9XG59KTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEpTINC60L7QtCDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiyDQsdC70LjQvdC6XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDRiNC40YDQuNC90Ysg0LTQuNGB0L/Qu9C10Y9cbnZhciB4ID0gc2NyZWVuLndpZHRoO1xudmFyIHkgPSBzY3JlZW4uaGVpZ2h0O1xuXG4vLyDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YHRgtGA0LDQvdC40YbRiyDQv9GA0Lgg0YHQvNC10L3QtSDQvtGA0LjQvdC10YLQsNGG0LjQuCDQstGM0Y7Qv9C+0YDRgtCwXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwICgxMDAlINCy0YzRjtC/0L7RgNGC0LApINC00LvRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIGFkZExpbmVhckNvbnQgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImxpbmVhci1jb250XCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0Lgg0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciByZW1vdmVDb250Q2lyY2xlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lYXItY29udFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jaXJjbGUtaGlkZVwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCDQt9Cw0L/Rg9GB0LrQsCBcItCd0LDRh9Cw0YLRjFwiXG52YXIgaGlkZUJ0biA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0YW5pbVwiKS5jbGFzc0xpc3QuYWRkKFwiYnRuLWhpZGVcIik7XG59O1xuXG4vLyDQntGC0LrRgNGL0YLQuNC1INC60L3QvtC/0LrQuCBcItCd0LAg0LPQu9Cw0LLQvdGD0Y5cIlxudmFyIHNob3dCdG4gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1lbmQtaGlkZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21haW5cIikuY2xhc3NMaXN0LmFkZChcImJ0bi1lbmQtc2hvd1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgYWRkQ2lyY2xlQmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QvtGB0LvQtSDQutGA0YPQs9C+0LLQvtC5INCw0L3QuNC80LDRhtC40LhcbnZhciBhZGRDaXJjbGVPcmJpdEJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm9yYml0LWNpcmNsZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3JiaXQtY2lyY2xlLTR4M1wiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi1jaXJjbGVcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCj0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuFxudmFyIHJlbW92ZUNpcmNsZUJsaW5raW5nID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1ibGlua2luZ1wiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIGFkZFRvcEJvdEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3AtYm90XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIGFkZExlZnRSaWdodEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3AtYm90XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC/0YDQsNCy0L4gLSDQvdC40Lcg0LvQtdCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LvQtdCy0L4gLSDQv9GA0LDQstC+KVxudmFyIGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1sZWZ0LXJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvcHJpZ2h0LWJvdGxlZnRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC70LXQstC+IC0g0L3QuNC3INC/0YDQsNCy0L4pXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0L/RgNCw0LLQviAtINC90LjQtyDQu9C10LLQvilcbnZhciBhZGRUb3BMZWZ0Qm90UmlnaHRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtdG9wcmlnaHQtYm90bGVmdFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQu9C10LLQviAtINC90LjQtyDQv9GA0LDQstC+KVxudmFyIGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcGxlZnQtYm90cmlnaHRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtc3F1YXJlLWNsb2Nrd2lzZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutGA0YPQs9GDICjQv9C+INGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC1KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG52YXIgYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1zcXVhcmUtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1haW4tY2lyY2xlXCIpO1xuXHRpZiAoeCA+PSB5KSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwib3JiaXQtY2lyY2xlXCIpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdFx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0LfQvNC10LnQutC+0LkgKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxudmFyIGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc25ha2UtcmlnaHQtbGVmdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDRgtCw0LnQvNC10YDQsFxuc3RhcnRhbmltLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0YWRkTGluZWFyQ29udCgpO1xuXHRhZGRNYWluQ2lyY2xlKCk7XG5cdC8vINCh0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQudC90LXRgNCwINGC0LDQudC80LXRgNCwXG5cdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEwMDApO1xuXHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxNjAwMCk7XG5cdHNldFRpbWVvdXQoaGlkZUJ0biwgNTAwKTtcblx0c2V0VGltZW91dChhZGRUb3BCb3RBbmltLCAyMjAwMCk7XG5cdHNldFRpbWVvdXQoYWRkTGVmdFJpZ2h0QW5pbSwgNDIwMDApO1xuXHRpZih4ID4gMSAmJiB4IDw9IDEwODMpIHtcblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA1OTAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgNzQwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA3OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDk2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDExMzAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTI4MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxMzMwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTcxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxODYwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAxOTEwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjMxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjUxMDAwKTtcblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMjcwMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMjkxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzExMDAwKTtcblx0XHRcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDM0MjAwMCk7XG5cdFx0c2V0VGltZW91dChzaG93QnRuLCAzNDMwMDApO1xuXHR9XG5cdGVsc2UgaWYoeCA+IDEwODMgJiYgeCA8PSAxNjQzKSB7XG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgNjIwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDc3MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkVG9wUmlnaHRCb3RMZWZ0QW5pbSwgODIwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRUb3BMZWZ0Qm90UmlnaHRBbmltLCAxMDIwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMTIyMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAxMzcwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UsIDE0MjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxODYwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDIwMTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNvdW50ZXJjbG9ja1dpc2UsIDIwNjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAyNTAwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDI2NTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q2xvY2t3aXNlLCAyNzAwMDApO1xuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDb3VudGVyY2xvY2tXaXNlLCAyODkwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdEJsaW5raW5nLCAzMTAwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDMyNTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0LCAzMzAwMDApO1xuXG5cdFx0c2V0VGltZW91dChyZW1vdmVDb250Q2lyY2xlLCAzNjEwMDApO1xuXHRcdHNldFRpbWVvdXQoc2hvd0J0biwgMzYyMDAwKTtcblx0fVxuXHRlbHNlIGlmKHggPiAxNjQzICYmIHggPD0gMzAwOCkge1xuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDY1MDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCA4MDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDg1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTA4MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDEzMTAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMTQ2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNTEwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjAxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyMTYwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyMjEwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVCbGlua2luZywgMjcxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAyODYwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjkxMDAwKTtcblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMzEwMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzMxMDAwKTtcblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNpcmNsZUJsaW5raW5nLCAzNDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzUxMDAwKTtcblxuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ29udENpcmNsZSwgMzgyMDAwKTtcblx0XHRzZXRUaW1lb3V0KHNob3dCdG4sIDM4MzAwMCk7XG5cdH1cblx0ZWxzZSBpZiAoeCA+IDMwMDgpIHtcblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCA3NDAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgODkwMDApO1xuXG5cdFx0c2V0VGltZW91dChhZGRUb3BSaWdodEJvdExlZnRBbmltLCA5NDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDEyNjAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZUJsaW5raW5nLCAxNTgwMDApO1xuXHRcdHNldFRpbWVvdXQocmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE3MzAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZVNxdWFyZUNsb2Nrd2lzZSwgMTc4MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDIzNDAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMjQ5MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSwgMjU0MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlQmxpbmtpbmcsIDMxMDAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzI1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlT3JiaXRDbG9ja3dpc2UsIDMzMDAwMCk7XG5cdFx0c2V0VGltZW91dChhZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UsIDM0OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KGFkZENpcmNsZU9yYml0QmxpbmtpbmcsIDM3MDAwMCk7XG5cdFx0c2V0VGltZW91dChyZW1vdmVDaXJjbGVCbGlua2luZywgMzg1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoYWRkQ2lyY2xlU25ha2VSaWdodExlZnQsIDM5MDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KHJlbW92ZUNvbnRDaXJjbGUsIDQyMTAwMCk7XG5cdFx0c2V0VGltZW91dChzaG93QnRuLCA0MjIwMDApO1xuXHR9XG59O1xuXG4vLyDQk9C10L3QtdGA0LDRgtC+INCz0YDQsNC00LjQtdC90YLQsCDQtNC70Y8g0YTQvtC90LBcbnZhciBjb2xvcnMgPSBuZXcgQXJyYXkoXG5cdFsxMSw3MiwxMDddLFxuXHRbMTAzLDE3OCwxMTFdLFxuXHRbMjQsIDkwLCAxNTddLFxuXHRbNjgsMTYwLDE0MV0sXG5cdFsxMSwgMTM1LCAxNDddLFxuXHRbNjksMTA0LDIyMF0pO1xuXG52YXIgc3RlcCA9IDA7XG4vLyDQotCw0LHQu9C40YbQsCDRhtCy0LXRgtC+0LI6XG4vLyDQotC10LrRg9GJ0LjQuSDRhtCy0LXRgiDRgdC70LXQstCwXG4vLyDQodC70LXQtNGD0Y7RidC40Lkg0YbQstC10YIg0YHQu9C10LLQsFxuLy8g0KLQtdC60YPRidC40Lkg0YbQstC10YIg0YHQv9GA0LDQstCwXG4vLyDQodC70LXQtNGD0Y7RidC40Lkg0YbQstC10YIg0YHQv9GA0LDQstCwXG52YXIgY29sb3JJbmRpY2VzID0gWzAsMSwyLDNdO1xuXG4vLyDQodC60L7RgNC+0YHRgtGMINC/0LXRgNC10YXQvtC00LBcbnZhciBncmFkaWVudFNwZWVkID0gMC4wMDI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUdyYWRpZW50KClcbntcblxuXHRpZiAoICQ9PT11bmRlZmluZWQgKSByZXR1cm47XG5cbnZhciBjMF8wID0gY29sb3JzW2NvbG9ySW5kaWNlc1swXV07XG52YXIgYzBfMSA9IGNvbG9yc1tjb2xvckluZGljZXNbMV1dO1xudmFyIGMxXzAgPSBjb2xvcnNbY29sb3JJbmRpY2VzWzJdXTtcbnZhciBjMV8xID0gY29sb3JzW2NvbG9ySW5kaWNlc1szXV07XG5cbnZhciBpc3RlcCA9IDEgLSBzdGVwO1xudmFyIHIxID0gTWF0aC5yb3VuZChpc3RlcCAqIGMwXzBbMF0gKyBzdGVwICogYzBfMVswXSk7XG52YXIgZzEgPSBNYXRoLnJvdW5kKGlzdGVwICogYzBfMFsxXSArIHN0ZXAgKiBjMF8xWzFdKTtcbnZhciBiMSA9IE1hdGgucm91bmQoaXN0ZXAgKiBjMF8wWzJdICsgc3RlcCAqIGMwXzFbMl0pO1xudmFyIGNvbG9yMSA9IFwicmdiKFwiK3IxK1wiLFwiK2cxK1wiLFwiK2IxK1wiKVwiO1xuXG52YXIgcjIgPSBNYXRoLnJvdW5kKGlzdGVwICogYzFfMFswXSArIHN0ZXAgKiBjMV8xWzBdKTtcbnZhciBnMiA9IE1hdGgucm91bmQoaXN0ZXAgKiBjMV8wWzFdICsgc3RlcCAqIGMxXzFbMV0pO1xudmFyIGIyID0gTWF0aC5yb3VuZChpc3RlcCAqIGMxXzBbMl0gKyBzdGVwICogYzFfMVsyXSk7XG52YXIgY29sb3IyID0gXCJyZ2IoXCIrcjIrXCIsXCIrZzIrXCIsXCIrYjIrXCIpXCI7XG5cbiQoJyNncmFkaWVudCcpLmNzcyh7XG5cdGJhY2tncm91bmQ6IFwiLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oXCIrY29sb3IxK1wiKSwgdG8oXCIrY29sb3IyK1wiKSlcIn0pLmNzcyh7XG5cdGJhY2tncm91bmQ6IFwiLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgXCIrY29sb3IxK1wiIDAlLCBcIitjb2xvcjIrXCIgMTAwJSlcIn0pO1xuXG5cdHN0ZXAgKz0gZ3JhZGllbnRTcGVlZDtcblx0aWYgKCBzdGVwID49IDEgKVxuXHR7XG5cdFx0c3RlcCAlPSAxO1xuXHRcdGNvbG9ySW5kaWNlc1swXSA9IGNvbG9ySW5kaWNlc1sxXTtcblx0XHRjb2xvckluZGljZXNbMl0gPSBjb2xvckluZGljZXNbM107XG5cblx0XHRjb2xvckluZGljZXNbMV0gPSAoIGNvbG9ySW5kaWNlc1sxXSArIE1hdGguZmxvb3IoIDEgKyBNYXRoLnJhbmRvbSgpICogKGNvbG9ycy5sZW5ndGggLSAxKSkpICUgY29sb3JzLmxlbmd0aDtcblx0XHRjb2xvckluZGljZXNbM10gPSAoIGNvbG9ySW5kaWNlc1szXSArIE1hdGguZmxvb3IoIDEgKyBNYXRoLnJhbmRvbSgpICogKGNvbG9ycy5sZW5ndGggLSAxKSkpICUgY29sb3JzLmxlbmd0aDtcblx0fVxufVxuXG5zZXRJbnRlcnZhbCh1cGRhdGVHcmFkaWVudCw1MCk7Il0sImZpbGUiOiJtYWluLmpzIn0=
