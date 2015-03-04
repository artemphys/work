$(document).ready(function() {
	$(".openBlockButton").click(function() {

		var parent = $(this).parent();
		if(parent.hasClass("opened")){
			parent.removeClass("opened");
		} else {
			parent.addClass("opened");
		}
		//$(".openBlockContent").css({"height":"auto"});
		//$(".openBlockButton").css({"height":"auto"});

	});

	$('.bxsliderHistory').bxSlider();
});
