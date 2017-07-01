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

// Показ блока контактов
var elNavCont = document.getElementById("showContacts");
if(elNavCont){
	document.getElementById("showContacts").addEventListener("click", function() {
		toggleClass(document.getElementById("contacts"), "contacts-show");
	});
}

var closeContacts = function() {
	document.getElementById("contacts").classList.remove("contacts-show");
};

// Вызов модального окна доната
var modalDonate = document.getElementById("myModal");
var btnDonate = document.getElementById("myBtn");
var spanDonate = document.getElementsByClassName("close")[0];
if(btnDonate){
	btnDonate.onclick = function() {
	modalDonate.style.display = "block";
	};
}
if(spanDonate){
	spanDonate.onclick = function() {
		modalDonate.style.display = "none";
	};
}
window.onclick = function(event) {
		if (event.target == modalDonate) {
				modalDonate.style.display = "none";
		}
};