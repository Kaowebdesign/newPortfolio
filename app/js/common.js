$(document).ready(function() {
    var navk = $('#nav');
    var navBarsk = $('#navBars');
    var menuK = $('#menu');
    if (window.scrollY > 80 && menuK.hasClass('header__menu-active')) {
        navk.addClass('nav-active');
    } else navk.removeClass('nav-active');
    $(window).scroll(function() {
        if (window.scrollY > 80 && menuK.hasClass('header__menu-active')) {
            navk.addClass('nav-active');
        } else navk.removeClass('nav-active');
    });
    navBarsk.on('click', function(e) {
        e.preventDefault();
        navBarsk.toggleClass('nav__bar-active');
        menuK.toggleClass('header__menu-active');
        if (window.scrollY > 80 && menuK.hasClass('header__menu-active')) {
            navk.addClass('nav-active');
        } else navk.removeClass('nav-active');
    })
});