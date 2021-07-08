$(document).ready(function(){
// scrolling around
    $("#skip").click(function() {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000);
    });

// mobile navigation
    $(".mobile-nav-button").click(function() {
        $(".mobile-nav-slider").fadeIn(300);
        $(".mobile-nav-slider").css("display", "flex");
            $(".mobile-nav-slider").css('left', '0%');
            // $(".mobile-nav-slider").fadeIn("slow");
    })

    $(".close-button").click(function() {
        $(".mobile-nav-slider").fadeOut(200, function() {
        $(".mobile-nav-slider").css("display", "none");
            $(".mobile-nav-slider").css('left', '100%'); 
        });
    })
})