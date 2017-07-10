// Check off specific todos by clicks

$("li").click(function(){
	$(this).toggleClass("completed");
});

// Click on x to delete to do
$("span").click(function(event){
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
		$("ul").append("<li>" + todoText + "</li>");
	}
})
