$(function(){
    $('.hamburger').on('click',function(){
        hamburger();
    })
    $('.navi a').on('click',function(){
        hamburger();
    })
})

$(function(){
    $(window).scroll(function(){
        let headerHeight = $('header').height();
        let scroll = $(this).scrollTop();
        if(scroll > headerHeight) {
            $('.fixed-header').addClass('is-show');
        } else {
            $('.fixed-header').removeClass('is-show');
        }
    })


})

function hamburger() {
    $('.hamburger').toggleClass('action');
    if($('.hamburger').hasClass('action')){
        $('.navi').addClass('action');
    } else {
        $('.navi').removeClass('action');
    }
}

