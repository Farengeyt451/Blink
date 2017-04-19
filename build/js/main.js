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
console.log(x);
console.log(y);

// Перезагрузка страницы при смене оринетации вьюпорта
window.addEventListener("orientationchange", function() {
		// alert(window.orientation);
		location.reload();
});

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

// Генерато градиента для фона
var colors = new Array(
	[100, 65, 165],
	[42, 8, 69],
	[24, 90, 157],
	[255, 161, 127],
	[11, 135, 147],
	[154, 132, 120]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
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
		
		//pick two new target color indices
		//do not pick the same as the current one
		colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		
	}
}

setInterval(updateGradient,50);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSlMg0LrQvtC0INC00LvRjyDQs9C70LDQstC90L7Qs9C+INC80LXQvdGOXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCl7XG5cdC8vINCe0YLQutGA0YvRgtGMINC80LXQvdGOXG5cdCQoXCIuY2QtbWVudS10cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JChcIiNjZC1tYWluLWNvbnRlbnRcIikuYWRkQ2xhc3MoXCJtb3ZlLW91dFwiKTtcblx0XHQkKFwiI21haW4tbmF2XCIpLmFkZENsYXNzKFwiaXMtdmlzaWJsZVwiKTtcblx0XHQkKFwiLmNkLXNoYWRvdy1sYXllclwiKS5hZGRDbGFzcyhcImlzLXZpc2libGVcIik7XG5cdH0pO1xuXHQvLyDQl9Cw0LrRgNGL0YLRjCDQvNC10L3RjlxuXHQkKFwiLmNkLWNsb3NlLW1lbnVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiI2NkLW1haW4tY29udGVudFwiKS5yZW1vdmVDbGFzcyhcIm1vdmUtb3V0XCIpO1xuXHRcdCQoXCIjbWFpbi1uYXZcIikucmVtb3ZlQ2xhc3MoXCJpcy12aXNpYmxlXCIpO1xuXHRcdCQoXCIuY2Qtc2hhZG93LWxheWVyXCIpLnJlbW92ZUNsYXNzKFwiaXMtdmlzaWJsZVwiKTtcblx0fSk7XG5cblx0Ly8g0JHQu9GO0YAg0Y3RhNGE0LXQutGCXG5cdHNldF9jbGlwX3Byb3BlcnR5KCk7XG5cdCQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuXHRcdHNldF9jbGlwX3Byb3BlcnR5KCk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHNldF9jbGlwX3Byb3BlcnR5KCkge1xuXHRcdHZhciAkaGVhZGVyX2hlaWdodCA9ICQoXCIuY2QtaGVhZGVyXCIpLmhlaWdodCgpLFxuXHRcdFx0JHdpbmRvd19oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHQkaGVhZGVyX3RvcCA9ICR3aW5kb3dfaGVpZ2h0IC0gJGhlYWRlcl9oZWlnaHQsXG5cdFx0XHQkd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0JChcIi5jZC1ibHVycmVkLWJnXCIpLmNzcyhcImNsaXBcIiwgXCJyZWN0KFwiKyRoZWFkZXJfdG9wK1wicHgsIFwiKyR3aW5kb3dfd2lkdGgrXCJweCwgXCIrJHdpbmRvd19oZWlnaHQrXCJweCwgMHB4KVwiKTtcblx0fVxufSk7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBKUyDQutC+0LQg0LTQu9GPINGB0YLRgNCw0L3QuNGG0Ysg0LHQu9C40L3QulxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vINCe0L/RgNC10LTQtdC70LXQvdC40LUg0YjQuNGA0LjQvdGLINC00LjRgdC/0LvQtdGPXG52YXIgeCA9IHNjcmVlbi53aWR0aDtcbnZhciB5ID0gc2NyZWVuLmhlaWdodDtcbmNvbnNvbGUubG9nKHgpO1xuY29uc29sZS5sb2coeSk7XG5cbi8vINCf0LXRgNC10LfQsNCz0YDRg9C30LrQsCDRgdGC0YDQsNC90LjRhtGLINC/0YDQuCDRgdC80LXQvdC1INC+0YDQuNC90LXRgtCw0YbQuNC4INCy0YzRjtC/0L7RgNGC0LBcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gYWxlcnQod2luZG93Lm9yaWVudGF0aW9uKTtcblx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG4vLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAoMTAwJSDQstGM0Y7Qv9C+0YDRgtCwKSDQtNC70Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciBBZGRMaW5lYXJDb250ID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJsaW5lYXItY29udFwiKTtcbn07XG5cbi8vINCU0L7QsdCw0LLQu9C10L3QuNC1INC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgQWRkTWFpbkNpcmNsZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcbn07XG5cbi8vINCh0LrRgNGL0YLQuNC1INC60L7QvdGC0LXQudC90LXRgNCwINGC0LDQudC80LXRgNCwXG52YXIgSGlkZVRpbWVyID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXItY29udFwiKS5jbGFzc0xpc3QuYWRkKFwibWFpbi10aW1lci1oaWRlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LzQuNCz0LDQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LhcbnZhciBBZGRDaXJjbGVCbGlua2luZyA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtYmxpbmtpbmdcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQvNC40LPQsNC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+0YHQu9C1INC60YDRg9Cz0L7QstC+0Lkg0LDQvdC40LzQsNGG0LjQuFxudmFyIEFkZENpcmNsZU9yYml0QmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwib3JiaXQtY2lyY2xlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJvcmJpdC1jaXJjbGUtNHgzXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNpcmNsZVwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0KPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC80LjQs9Cw0L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4XG52YXIgUmVtb3ZlQ2lyY2xlQmxpbmtpbmcgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLWNpcmNsZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLWJsaW5raW5nXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC6INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCAo0LLQtdGA0YUgLSDQvdC40LcpXG52YXIgQWRkVG9wQm90QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXRvcC1ib3RcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0Log0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4ICjQu9C10LLQviAtINC/0YDQsNCy0L4pIFxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNCy0LXRgNGFIC0g0L3QuNC3KVxudmFyIEFkZExlZnRSaWdodEFuaW0gPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3AtYm90XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLWxlZnQtcmlnaHRcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC/0YDQsNCy0L4gLSDQvdC40Lcg0LvQtdCy0L4pIFxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0LggKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbnZhciBBZGRUb3BSaWdodEJvdExlZnRBbmltID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtbGVmdC1yaWdodFwiKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LmFkZChcImNpcmNsZS10b3ByaWdodC1ib3RsZWZ0XCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LTQuNCw0LPQvtC90LDQu9C4ICjQstC10YDRhSDQu9C10LLQviAtINC90LjQtyDQv9GA0LDQstC+KVxuLy8g0Lgg0YPQtNCw0LvQtdC90LjQtSDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQtNC40LDQs9C+0L3QsNC70LggKNCy0LXRgNGFINC/0YDQsNCy0L4gLSDQvdC40Lcg0LvQtdCy0L4pXG52YXIgQWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXRvcHJpZ2h0LWJvdGxlZnRcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtdG9wbGVmdC1ib3RyaWdodFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC00LjQsNCz0L7QvdCw0LvQuCAo0LLQtdGA0YUg0LvQtdCy0L4gLSDQvdC40Lcg0L/RgNCw0LLQvilcbnZhciBBZGRDaXJjbGVTcXVhcmVDbG9ja3dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS10b3BsZWZ0LWJvdHJpZ2h0XCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0L/QviDQutCy0LDQtNGA0LDRgtGDICjQv9GA0L7RgtC40LIg0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LgpXG4vLyDQuCDRg9C00LDQu9C10L3QuNC1INCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60LLQsNC00YDQsNGC0YMgKNC/0L4g0YfQsNGB0L7QstC+0Lkg0YHRgtGA0LXQu9C60LUpXG52YXIgQWRkQ2lyY2xlU3F1YXJlQ291bnRlcmNsb2NrV2lzZSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiY2lyY2xlLXNxdWFyZS1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc3F1YXJlLWNvdW50ZXJjbG9jay13aXNlXCIpO1xufTtcblxuLy8g0JfQsNC/0YPRgdC60LAg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrQstCw0LTRgNCw0YLRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxudmFyIEFkZENpcmNsZU9yYml0Q2xvY2t3aXNlID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtc3F1YXJlLWNvdW50ZXJjbG9jay13aXNlXCIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tY2lyY2xlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluLWNpcmNsZVwiKTtcblx0aWYgKHggPj0geSkge1xuXHRcdGNvbnNvbGUubG9nKFwieCA+PSB5XCIpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZVwiKTtcblx0fVxuXHRlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcInggPCB5XCIpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1jaXJjbGVcIikuY2xhc3NMaXN0LmFkZChcIm9yYml0LWNpcmNsZS00eDNcIik7XG5cdFx0fVxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW0tbWFpblwiKS5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlLW9yYml0LWNsb2Nrd2lzZVwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQutCwINCw0L3QuNC80LDRhtC40Lgg0LTQstC40LbQtdC90LjRjyDQvtC60YDRg9C20L3QvtGB0YLQuCDQv9C+INC60YDRg9Cz0YMgKNC/0YDQvtGC0LjQsiDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQuClcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/QviDRh9Cw0YHQvtCy0L7QuSDRgdGC0YDQtdC70LrQtSlcbnZhciBBZGRDaXJjbGVPcmJpdENvdW50ZXJjbG9ja1dpc2UgPSBmdW5jdGlvbigpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltLW1haW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImNpcmNsZS1vcmJpdC1jbG9ja3dpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG59O1xuXG4vLyDQl9Cw0L/Rg9GB0LrQsCDQsNC90LjQvNCw0YbQuNC4INC00LLQuNC20LXQvdC40Y8g0L7QutGA0YPQttC90L7RgdGC0Lgg0LfQvNC10LnQutC+0LkgKNC70LXQstC+IC0g0L/RgNCw0LLQvilcbi8vINC4INGD0LTQsNC70LXQvdC40LUg0LDQvdC40LzQsNGG0LjQuCDQtNCy0LjQttC10L3QuNGPINC+0LrRgNGD0LbQvdC+0YHRgtC4INC/0L4g0LrRgNGD0LPRgyAo0L/RgNC+0YLQuNCyINGH0LDRgdC+0LLQvtC5INGB0YLRgNC10LvQutC4KVxudmFyIEFkZENpcmNsZVNuYWtlUmlnaHRMZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJjaXJjbGUtb3JiaXQtY291bnRlcmNsb2NrLXdpc2VcIik7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbS1tYWluXCIpLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGUtc25ha2UtcmlnaHQtbGVmdFwiKTtcbn07XG5cbi8vINCX0LDQv9GD0YHQuiDRgtCw0LnQvNC10YDQsFxuc3RhcnRhbmltLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblx0Ly8g0KLQsNC50LzQtdGALCDQt9Cw0LTQtdGA0LbQutCwINC/0LXRgNC10LQg0L3QsNGH0LDQu9C+0Lwg0LDQvdC40LzQsNGG0LjQuFxuXHR2YXIgc2Vjb25kcyA9IDIwO1xuXHR2YXIgU3RhcnRUaW1lciA9IGZ1bmN0aW9uKCkge1xuXHRpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCkge1xuXHRcdHRpbWVyLmlubmVySFRNTCA9IHNlY29uZHM7XG5cdH1cblx0aWYoc2Vjb25kcyA9PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHNlY29uZHMtLTtcblx0c2V0VGltZW91dChTdGFydFRpbWVyLCAxMDAwKTtcblx0fTtcblx0U3RhcnRUaW1lcigpO1xuXHRBZGRMaW5lYXJDb250KCk7XG5cdEFkZE1haW5DaXJjbGUoKTtcblx0Ly8g0KHQutGA0YvRgtC40LUg0LrQvtC90YLQtdC50L3QtdGA0LAg0YLQsNC50LzQtdGA0LBcblx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTAwMCk7XG5cdHNldFRpbWVvdXQoUmVtb3ZlQ2lyY2xlQmxpbmtpbmcsIDE2MDAwKTtcblx0c2V0VGltZW91dChIaWRlVGltZXIsIDIxMDAwKTtcblxuXHRzZXRUaW1lb3V0KEFkZFRvcEJvdEFuaW0sIDIyMDAwKTtcblxuXHRzZXRUaW1lb3V0KEFkZExlZnRSaWdodEFuaW0sIDQyMDAwKTtcblxuXHRpZih4ID4gMSAmJiB4IDw9IDEwODMpIHtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZUJsaW5raW5nLCA1OTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgNzQwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRUb3BSaWdodEJvdExlZnRBbmltLCA3OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcExlZnRCb3RSaWdodEFuaW0sIDk2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDExMzAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMTI4MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxMzMwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTcxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAxODYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAxOTEwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMjMxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjUxMDAwKTtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMjcwMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMjkxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzExMDAwKTtcblx0fVxuXHRlbHNlIGlmKHggPiAxMDgzICYmIHggPD0gMTY0Mykge1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDYyMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCA3NzAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDgyMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTAyMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDEyMjAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMTM3MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNDIwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMTg2MDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAyMDEwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyMDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMjUwMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNjUwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjcwMDAwKTtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMjg5MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzEwMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMjUwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzMwMDAwKTtcblx0fVxuXHRlbHNlIGlmKHggPiAxNjQzICYmIHggPD0gMzAwOCkge1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDY1MDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCA4MDAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDg1MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTA4MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDEzMTAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMTQ2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNTEwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMjAxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAyMTYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyMjEwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMjcxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAyODYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMjkxMDAwKTtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMzEwMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzMxMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAzNDYwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzUxMDAwKTtcblx0fVxuXHRlbHNlIGlmICh4ID4gMzAwOCkge1xuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDc0MDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCA4OTAwMCk7XG5cblx0XHRzZXRUaW1lb3V0KEFkZFRvcFJpZ2h0Qm90TGVmdEFuaW0sIDk0MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkVG9wTGVmdEJvdFJpZ2h0QW5pbSwgMTI2MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlQmxpbmtpbmcsIDE1ODAwMCk7XG5cdFx0c2V0VGltZW91dChSZW1vdmVDaXJjbGVCbGlua2luZywgMTczMDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlU3F1YXJlQ2xvY2t3aXNlLCAxNzgwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMjM0MDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAyNDkwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTcXVhcmVDb3VudGVyY2xvY2tXaXNlLCAyNTQwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVCbGlua2luZywgMzEwMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAzMjUwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVPcmJpdENsb2Nrd2lzZSwgMzMwMDAwKTtcblx0XHRzZXRUaW1lb3V0KEFkZENpcmNsZU9yYml0Q291bnRlcmNsb2NrV2lzZSwgMzQ5MDAwKTtcblxuXHRcdHNldFRpbWVvdXQoQWRkQ2lyY2xlT3JiaXRCbGlua2luZywgMzcwMDAwKTtcblx0XHRzZXRUaW1lb3V0KFJlbW92ZUNpcmNsZUJsaW5raW5nLCAzODUwMDApO1xuXG5cdFx0c2V0VGltZW91dChBZGRDaXJjbGVTbmFrZVJpZ2h0TGVmdCwgMzkwMDAwKTtcblx0fVxufTtcblxuLy8g0JPQtdC90LXRgNCw0YLQviDQs9GA0LDQtNC40LXQvdGC0LAg0LTQu9GPINGE0L7QvdCwXG52YXIgY29sb3JzID0gbmV3IEFycmF5KFxuXHRbMTAwLCA2NSwgMTY1XSxcblx0WzQyLCA4LCA2OV0sXG5cdFsyNCwgOTAsIDE1N10sXG5cdFsyNTUsIDE2MSwgMTI3XSxcblx0WzExLCAxMzUsIDE0N10sXG5cdFsxNTQsIDEzMiwgMTIwXSk7XG5cbnZhciBzdGVwID0gMDtcbi8vY29sb3IgdGFibGUgaW5kaWNlcyBmb3I6IFxuLy8gY3VycmVudCBjb2xvciBsZWZ0XG4vLyBuZXh0IGNvbG9yIGxlZnRcbi8vIGN1cnJlbnQgY29sb3IgcmlnaHRcbi8vIG5leHQgY29sb3IgcmlnaHRcbnZhciBjb2xvckluZGljZXMgPSBbMCwxLDIsM107XG5cbi8vdHJhbnNpdGlvbiBzcGVlZFxudmFyIGdyYWRpZW50U3BlZWQgPSAwLjAwMjtcblxuZnVuY3Rpb24gdXBkYXRlR3JhZGllbnQoKVxue1xuXHRcblx0aWYgKCAkPT09dW5kZWZpbmVkICkgcmV0dXJuO1xuXHRcbnZhciBjMF8wID0gY29sb3JzW2NvbG9ySW5kaWNlc1swXV07XG52YXIgYzBfMSA9IGNvbG9yc1tjb2xvckluZGljZXNbMV1dO1xudmFyIGMxXzAgPSBjb2xvcnNbY29sb3JJbmRpY2VzWzJdXTtcbnZhciBjMV8xID0gY29sb3JzW2NvbG9ySW5kaWNlc1szXV07XG5cbnZhciBpc3RlcCA9IDEgLSBzdGVwO1xudmFyIHIxID0gTWF0aC5yb3VuZChpc3RlcCAqIGMwXzBbMF0gKyBzdGVwICogYzBfMVswXSk7XG52YXIgZzEgPSBNYXRoLnJvdW5kKGlzdGVwICogYzBfMFsxXSArIHN0ZXAgKiBjMF8xWzFdKTtcbnZhciBiMSA9IE1hdGgucm91bmQoaXN0ZXAgKiBjMF8wWzJdICsgc3RlcCAqIGMwXzFbMl0pO1xudmFyIGNvbG9yMSA9IFwicmdiKFwiK3IxK1wiLFwiK2cxK1wiLFwiK2IxK1wiKVwiO1xuXG52YXIgcjIgPSBNYXRoLnJvdW5kKGlzdGVwICogYzFfMFswXSArIHN0ZXAgKiBjMV8xWzBdKTtcbnZhciBnMiA9IE1hdGgucm91bmQoaXN0ZXAgKiBjMV8wWzFdICsgc3RlcCAqIGMxXzFbMV0pO1xudmFyIGIyID0gTWF0aC5yb3VuZChpc3RlcCAqIGMxXzBbMl0gKyBzdGVwICogYzFfMVsyXSk7XG52YXIgY29sb3IyID0gXCJyZ2IoXCIrcjIrXCIsXCIrZzIrXCIsXCIrYjIrXCIpXCI7XG5cbiAkKCcjZ3JhZGllbnQnKS5jc3Moe1xuXHQgYmFja2dyb3VuZDogXCItd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbShcIitjb2xvcjErXCIpLCB0byhcIitjb2xvcjIrXCIpKVwifSkuY3NzKHtcblx0XHRiYWNrZ3JvdW5kOiBcIi1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIFwiK2NvbG9yMStcIiAwJSwgXCIrY29sb3IyK1wiIDEwMCUpXCJ9KTtcblx0XG5cdHN0ZXAgKz0gZ3JhZGllbnRTcGVlZDtcblx0aWYgKCBzdGVwID49IDEgKVxuXHR7XG5cdFx0c3RlcCAlPSAxO1xuXHRcdGNvbG9ySW5kaWNlc1swXSA9IGNvbG9ySW5kaWNlc1sxXTtcblx0XHRjb2xvckluZGljZXNbMl0gPSBjb2xvckluZGljZXNbM107XG5cdFx0XG5cdFx0Ly9waWNrIHR3byBuZXcgdGFyZ2V0IGNvbG9yIGluZGljZXNcblx0XHQvL2RvIG5vdCBwaWNrIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IG9uZVxuXHRcdGNvbG9ySW5kaWNlc1sxXSA9ICggY29sb3JJbmRpY2VzWzFdICsgTWF0aC5mbG9vciggMSArIE1hdGgucmFuZG9tKCkgKiAoY29sb3JzLmxlbmd0aCAtIDEpKSkgJSBjb2xvcnMubGVuZ3RoO1xuXHRcdGNvbG9ySW5kaWNlc1szXSA9ICggY29sb3JJbmRpY2VzWzNdICsgTWF0aC5mbG9vciggMSArIE1hdGgucmFuZG9tKCkgKiAoY29sb3JzLmxlbmd0aCAtIDEpKSkgJSBjb2xvcnMubGVuZ3RoO1xuXHRcdFxuXHR9XG59XG5cbnNldEludGVydmFsKHVwZGF0ZUdyYWRpZW50LDUwKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
