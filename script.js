$(document).ready(function(){
// scrolling around
    //   add smoooooth scroll to links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
            });
        }
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

    $(window).scroll(function() {
        $(".mobile-nav-slider").fadeOut(200, function() {
            $(".mobile-nav-slider").css("display", "none");
                $(".mobile-nav-slider").css('left', '100%'); 
            });
    })
})