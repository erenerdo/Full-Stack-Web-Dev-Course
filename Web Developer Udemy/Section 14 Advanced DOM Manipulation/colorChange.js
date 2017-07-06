var b = document.querySelector("button");
// var toggle = true;
// b.addEventListener("click", function(){
// 	if (toggle){
// 		document.querySelector("body").style.background = "pink";
// 		toggle= false;
// 	}
// 	else{
// 		document.querySelector("body").style.background = "white";
// 		toggle = true;
// 	}
	
// });

b.addEventListener("click", function(){
	document.body.classList.toggle("purple");	
});