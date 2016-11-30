var gears = document.getElementById("gears-container");
var cards = document.getElementById("cards-container");
var popup = document.getElementById("popup-container");

document.getElementById("btn-gears").addEventListener("click", function() {
	gears.style.display = "block";
	cards.style.display = "none";
	popup.style.display = "none";
})
document.getElementById("btn-cards").addEventListener("click", function() {
	gears.style.display = "none";
	cards.style.display = "block";
	popup.style.display = "none";
})
document.getElementById("btn-popup").addEventListener("click", function() {
	gears.style.display = "none";
	cards.style.display = "none";
	popup.style.display = "block";
})
