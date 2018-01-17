$(document).ready(function() {
    var nav = $('#nav');
    var navBars = $('#navBars');
    $(window).scroll(function() {
        if (window.scrollY > 75) {
            nav.addClass('nav-active');
        } else nav.removeClass('nav-active');
    });
    navBars.on('click', function(e) {
        e.preventDefault();
        navBars.toggleClass('nav__bar-active');
    })
});