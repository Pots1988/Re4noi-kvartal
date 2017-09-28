if ($(".blog").length) {
  $(".blog__slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $("[data-fancybox]").fancybox({
    arrows: true,
    toolbar : true,
    buttons : [
      'slideShow',
      'fullScreen',
      'thumbs',
      'close'
    ],
  });
}
