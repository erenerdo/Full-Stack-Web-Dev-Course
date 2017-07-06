var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset")
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("input");
var winValue = document.querySelector("#winValue");



p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		console.log("Player 1 Score: " + p1Score);
		document.querySelector("#p1Score").textContent = p1Score;
	}
	gameOver = (p1Score >= winningScore);
	if(gameOver){
		p1Display.classList.add("winner");
	}
});
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		console.log("Player 2 Score: " + p2Score);
		p2Display.textContent = p2Score;
	}
	gameOver = p2Score >= winningScore;
	if(gameOver){
		document.querySelector("#p2Score").classList.add("winner");
	}
});
resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	console.log("Reset")
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

numInput.addEventListener("change", function(){
	num = this.value;
	winValue.textContent = num;
	winningScore = Number(num);
	reset();
	
})



