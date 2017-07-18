// Check off specific todos by clicks

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on x to delete to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(events){

	if(events.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		var str = "<i class='fa fa-trash'></i>";
		$("ul").append("<li><span>" + str + "</span>" + todoText + "</li>");


	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
