$(document).ready(function(){
// scrolling around
    $("#skip").click(function() {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000);
    });

})