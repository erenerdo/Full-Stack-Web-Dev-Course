// var colors = [ "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", 
// 				"rgb(0, 255, 255)", "rgb(0, 0, 255)", "rgb(255, 0, 255)" ];
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColors();

var colorDisplay = document.querySelector("#colorChoice");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColors();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColors();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++){
		
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);

	// pick a new random color from array
	pickedColor = pickRandomColors();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelBlue";
	this.textContent = "New Colors";
	messageDisplay.textContent = "";

	//change colors of sqaures
})


for(var i = 0; i < squares.length; i++){
	// Add initial colors
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners
	squares[i].addEventListener("click", function(){

		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color tp pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	// loop through squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColors(){
	var colorIndex = Math.floor(Math.random()*colors.length );

	return colors[colorIndex];
}

function generateRandomColors(num){
	// Make an array
	var arr = [];
	// Add num random colors to arr
	for(var i = 0; i < num ; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}

	// Return array
	return arr;

}

function randomColor(){
	// pick a "red" from 0 to 255
	// pick a "green" from 0 to 255
	// pick a "blue" from 0 to 255
	var red = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

