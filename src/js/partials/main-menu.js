//-------------------------
//-JS код для главного меню
//-------------------------
var elNav = document.getElementById("main-nav");
var navClose = document.getElementsByClassName("cd-nav-trigger")[0];
var elNavCont = document.getElementById("showContacts");
var modalDonate = document.getElementById("myModal");
var btnDonate = document.getElementById("myBtn");
var spanDonate = document.getElementsByClassName("close")[0];

// Переключение классов
function toggleClass(element, className){
	if (!element || !className){
		return;
	}
	var classString = element.className, nameIndex = classString.indexOf(className);
	if (nameIndex === -1) {
		classString += " " + className;
	}
	else {
		classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
	}
	element.className = classString;
}

// Раскрытие/закрытие меню навигации
if(elNav){
	document.getElementById("main-nav").addEventListener("click", function() {
		toggleClass(document.getElementById("main-nav"), "nav-is-visible");
	});

}

// Раскрытие блока контактов
if(elNavCont){
	document.getElementById("showContacts").addEventListener("click", function() {
		toggleClass(document.getElementById("contacts"), "contacts-show");
	});
}

// Закрытие блока контактов
closeContacts = function() {
	document.getElementById("contacts").classList.remove("contacts-show");
};

// Вызов модального окна доната
if(btnDonate){
	btnDonate.onclick = function() {
	modalDonate.style.display = "block";
	};
}

// Закрытие окна доната и меню навигации
window.onclick = function(event) {
		if (event.target == modalDonate) {
			modalDonate.style.display = "none";
		}
		if (event.target !== navClose) {
			document.getElementById("main-nav").classList.remove("nav-is-visible");
		}
};
if(spanDonate){
	spanDonate.onclick = function() {
		modalDonate.style.display = "none";
	};
}
