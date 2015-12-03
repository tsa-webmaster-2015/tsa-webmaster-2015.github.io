$(document).ready(function () {
    var id;
    $('.nav').find('.navitem').click(function () {
        id = this.id
        changePage()
    });

    function changePage() {
        $('#page').load('/page/' + id + ".html").hide().fadeIn();
        window.scrollTo(0, 0);
    }
});