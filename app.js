$("ul").on("click","li", function () {
	$(this).toggleClass("complete");
});

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13)
	{
		//grabing the new to do
		var todotext = $(this).val();
		$(this).val("");
		//insert the text to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todotext + "</li>");
	}
});

$("h1 span").on("click", function(){
	$("input").fadeToggle("icon");
})