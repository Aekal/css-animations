var gears = document.getElementById("gears-container");
var cards = document.getElementById("cards-container");

document.getElementById("btn-gears").addEventListener("click", function() {
	gears.style.display = "block";
	cards.style.display = "none";
})
document.getElementById("btn-cards").addEventListener("click", function() {
	gears.style.display = "none";
	cards.style.display = "block";
})
document.getElementById("btn-popup").addEventListener("click", function() {
	gears.style.display = "none";
})
