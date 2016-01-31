$(document).ready(function () {
    $('nav').hide().fadeIn();
    $('#content').load('/partials/home.html');
    $('#content').fadeIn();
    console.log("    ____   ____   ____   _   __ ______ _____\n   / __ \\ / __ \\ / __ \\ / | / // ____// ___/\n  / / / // /_/ // / / //  |/ // __/   \\__ \\ \n / /_/ // _, _// /_/ // /|  // /___  ___/ / \n/_____//_/ |_| \\____//_/ |_//_____/ /____/  \n                                            ")
    $('nav').find('span').click(function () {
        id = this.id
        $('#content').load('/partials/' + id + '.html').hide().fadeIn();
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 100) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });
    $('#backToTop').click(function () {
        $('body').animate({
            scrollTop: '0px'
        }, 100);
    })
});