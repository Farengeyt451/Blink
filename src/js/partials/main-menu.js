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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
		modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
		modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
		if (event.target == modal) {
				modal.style.display = "none";
		}
};