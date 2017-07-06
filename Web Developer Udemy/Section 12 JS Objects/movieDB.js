var movies = [
	{
		hasWatch: false,
		name: "The Hunger Games",
		rating: 4
	},
	{
		hasWatch: true,
		name: "Wonder Woman",
		rating: 5
	},
	{
		hasWatch: false,
		name: "Get Out",
		rating: 5
	},
	{
		hasWatch: true,
		name: "Avengers",
		rating: 3.5
	},
	
]

for (var i = 0; i < movies.length; i++){
	var watched = "seen";
	if (movies[i].hasWatch === false)
		watched = "not " + watched;

	console.log("You have " + watched + " \"" + movies[i].name + "\" - " + movies[i].rating + " stars");
}