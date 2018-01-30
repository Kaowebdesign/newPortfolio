$(document).ready(function() {
    var navk = $('#nav');
    var navBarsk = $('#navBars');
    var menuK = $('#menu');
    var clicker = $('.clicker');
    var logo = $('#logo');
    clicker.on('click', function(e) {
        e.preventDefault();
        navBarsk.toggleClass('header__bar-active');
        menuK.toggleClass('header__menu-active');
        logo.toggleClass('header__logoCont-active');
    });
});