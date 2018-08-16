// $("button").on("click", function() {
// 	$('div').fadeOut(3000, function() {
// 		$(this).remove();
// 		});
// });


$("button").on("click", function() {
	$('div').slideToggle(1000, function() {
		$(this).remove();
	});
});
