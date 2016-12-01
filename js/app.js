var gears = document.getElementById("gears-container");
var cards = document.getElementById("cards-container");
var popup = document.getElementById("popup-container");

// GEARS
document.getElementById("btn-gears").addEventListener("click", function() {
	gears.style.display = "block";
	cards.style.display = "none";
	popup.style.display = "none";
});
gears.addEventListener("click", function() {
	for (i = 0; i < this.children.length; i++) {
		this.children[i].classList.toggle("is-paused");
	}
});

//CARDS
document.getElementById("btn-cards").addEventListener("click", function() {
	gears.style.display = "none";
	cards.style.display = "block";
	popup.style.display = "none";
});

//POPUP
document.getElementById("btn-popup").addEventListener("click", function() {
	gears.style.display = "none";
	cards.style.display = "none";
	popup.style.display = "block";
})
;
