$(document).ready(function() {
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    
        $('.thumbnail').hover(
        function(){
            $(this).find('.project-hover').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.project-hover').slideUp(250); //.fadeOut(205)
        }
    ); 

});
