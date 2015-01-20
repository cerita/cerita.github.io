// JavaScript Document
console.log("Hello there!");


$(document).ready( function() {
	$("#more").click(function() {
		$("#intro").hide();
		$("#wrapper").fadeIn();
	});
	
	
	$('nav a').click(function() {
		var tab = $(this).attr("href");
		console.log(tab);	
		$('.active').removeClass('active');
		$(tab).addClass('active');
	});
	
	
});
