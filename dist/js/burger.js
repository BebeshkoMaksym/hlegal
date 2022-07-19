$( document ).ready(function() {
    $(function() {
        $('.header__burger-btn').click(function(e){
            e.preventDefault();
            $('.header__list').toggleClass('active');
        })
    });
    $(function() {
        $('.header-team__burger-btn').click(function(e){
            e.preventDefault();
            $('.header-team__list').toggleClass('active');
        })
    });
});