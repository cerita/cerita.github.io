// JavaScript Document
console.log("Have any questions or comments about my code or something you see? I'd love to hear it. Feel free to shoot me an e-mail :)");
console.log("-Cerita");

$(document).ready( function() {
	$("a").hover(function() {
		$(this).animate({"color": "green",
					"font-weight": "bold",
					"font-size": "1.5em"});
	}, function() {
		$(this).animate({"color": "#4cbb17",
					"font-weight":"normal",
					"font-size": "1em"});
	});
	
});
