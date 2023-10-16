var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var ranBut = document.querySelector(".randomBut");


function randomHexColor() {
	var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16); // colore1 casuale formato hex
	var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16); // colore2 casuale formato hex
	color1.value = randomColor1
	color2.value = randomColor2
	setGradient()
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " + color2.value 
	+ ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
ranBut.addEventListener("click", randomHexColor);

