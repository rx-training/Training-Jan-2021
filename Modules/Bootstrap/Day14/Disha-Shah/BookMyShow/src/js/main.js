/*$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider'
  });
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });*/

/*$(document).ready(function() {
    $('.slider').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed: 1000,
    })
})*/

/*$('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
});*/

/*$('.slider').slick();*/


$().ready(function(){
    $('.slick-carousel').slick({
        dots:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1.65,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
  });

$().ready(function(){
    $('.slick-recommended-movies').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
                {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2.80,
                  slidesToScroll: 2.80
                }
               },
              
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$().ready(function(){
    $('.slick-entertainment').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
               },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.75,
                  slidesToScroll: 1.75
                }
              }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$("#next-trigger").click(function(){
  $('#loginModal').modal('hide');
  $('#registerModal').modal('show');
});


$("#back-trigger").click(function(){
  $('#registerModal').modal('hide');
  $('#loginModal').modal('show');
})