var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");


while(input !== "quit"){

	if (input === "list"){
		list();
	}
	else if(input === "new"){
		inpt();
	}
	else if(input === "delete"){
		del();
	}

	var input = prompt("What would you like to do?");
}
console.log("app quit");

function list(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function inpt(){
	var newToDo = prompt("Enter new To-Do");
	todos.push(newToDo);
	console.log("Added TO Do")
}

function del(){
	// Ask for index of todo to be deleted
	var index = prompt("What is the index you'd like to delete?");
	// Delete that todo
	// splice();

	todos.splice(index, 1)
	console.log("Deleted Todo")
}