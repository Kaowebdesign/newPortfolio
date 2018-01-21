$(document).ready(function() {
    var navk = $('#nav');
    var navBarsk = $('#navBars');
    var menuK = $('#menu');
    $(window).scroll(function() {
        if (window.scrollY > 80 && menuK.hasClass('header__menu-active')) {
            navk.addClass('nav-active');
        } else navk.removeClass('nav-active');
    });
    navBarsk.on('click', function(e) {
        e.preventDefault();
        navk.toggleClass('nav-active');
        navBarsk.toggleClass('nav__bar-active');
        menuK.toggleClass('header__menu-active');
    })
});