// Problem 1, isEven()
console.log("Problem 1: isEven()")
function isEven(num){
	return num % 2 === 0;
}

console.log("Checking if 4 is even: " + isEven(4));
console.log("Checking if 21 is even: " + isEven(21));
console.log("Checking if 68 is even: " + isEven(68));
console.log("Checking if 333 is even: " + isEven(333));

// Problem 2, factorial()
console.log("\nProblem 2: factorial()")

function factorial(num){
	var fact = 1;

	for (var i = 2; i <= num; i++){
		fact *= i;
	}
	return fact;
}
console.log("Factorial of 5 is " + factorial(5) );
console.log("Factorial of 0 is " + factorial(0) );
console.log("Factorial of 7 is " + factorial(7) );

// Problem 3, kebabToSnake()
console.log("\nProblem 3: kebabToSnake()")
function kebabToSnake(str){

	for (var i = 0; i < str.length; i++){
		if (str[i] == "-"){
			str = str.substr(0,i) + "_" + str.substr(i+1);
		}
	}

	return str;
}

console.log("hello-world converts to " + kebabToSnake("hello-world"));
console.log("dogs-are-awesome converts to " + kebabToSnake("dogs-are-awesome"));
console.log("blah converts to " + kebabToSnake("blah"));