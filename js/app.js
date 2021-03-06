var gears = document.getElementById("gears-container");
var wrapper = document.getElementsByClassName("wrapper");

function showContainer(id) {
	for (i = 0; i < wrapper[0].children.length; i++) {
		wrapper[0].children[i].style.display = "none";
		document.getElementById(id).style.display = "block";
	}
	document.getElementsByClassName("popup")[0].className = "popup";
}

// GEARS
document.getElementById("btn-gears").addEventListener("click", function() {
	showContainer("gears-container");
});
gears.addEventListener("click", function() {
	for (i = 0; i < this.children.length; i++) {
		this.children[i].classList.toggle("is-paused");
	}
});

//CARDS
document.getElementById("btn-cards").addEventListener("click", function() {
	showContainer("cards-container");
});

//POPUP
document.getElementById("btn-popup").addEventListener("click", function() {
	showContainer("popup-container");
});
document.getElementById("btn-ok").addEventListener("click", function() {
	this.parentNode.className = "popup drop";
});

//DROPDOWN MENU
document.getElementById("btn-menu").addEventListener("click", function() {
	showContainer("menu-container");
});
