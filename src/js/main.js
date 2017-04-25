// ------------------------
// JS код для главного меню
// ------------------------

jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
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