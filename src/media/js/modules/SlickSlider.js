$('.object-storage-slider ').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.object-storage-preview',
    responsive: [
        {
          breakpoint: 580,
          settings: {
            adaptiveHeight: false
          }
        }
      ]
});
$('.object-storage-preview').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.object-storage-slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 580,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
});