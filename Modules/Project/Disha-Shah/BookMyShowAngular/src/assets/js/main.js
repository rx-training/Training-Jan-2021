$(document).ready(function(){
    $('.slick-carousel').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:2000,
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

$(document).ready(function(){
  setTimeout(() => { 
    $('.slick-recommended-movies').slick({
        dots: false,
        infinite: false,
        speed: 600,
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
              
            
        ]
    });
  }, 500);
});

$(document).ready(function(){
  setTimeout(() => { 
    $('.slick-entertainment').slick({
        dots: false,
        infinite: false,
        speed: 600,
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
            
        ]
    });
  }, 800);
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
