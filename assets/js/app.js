(function ($) {
    "use strict";
    
    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    // Welcome btn scroll down to About Me page
    function scrollToAnchor(aid) {
        var sectionTag = $("section[id='" + aid + "']");
        $('html,body').animate({ scrollTop: sectionTag.offset().top }, 'slow');
    }

    $("#login-btn").click(function () {
        scrollToAnchor('login');
    });

})(jQuery);