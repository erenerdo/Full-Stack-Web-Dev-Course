// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt("Guess a number"));

// Check Guess

// Check if correct
if ( guess === secretNumber){
	alert("Correct!")
}
else if (guess < secretNumber){
	alert("Too low!")
}
else{
	alert("Too high!")
}

