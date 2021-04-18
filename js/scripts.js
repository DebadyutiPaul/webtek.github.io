$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('display');
        $('.nav ul').toggleClass('display');
    });
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
      });
})