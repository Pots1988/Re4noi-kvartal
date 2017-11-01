if ($(".fotorama").length) {

  if (window.innerWidth > 1024) {
    var width = 80,
        height = 72,
        margin = 20;
  } else if (window.innerWidth < 1025 && window.innerWidth > 767) {
    width = 60;
    height = 52;
    margin = 5;
  } else {
    width = 60;
    height = 42;
    margin = 5;
  }

  $(".fotorama").fotorama({
    width: "100%",
    maxwidth: "100%",
    allowfullscreen: true,
    nav: "thumbs",
    thumbwidth: width,
    thumbheight: height,
    thumbmargin: margin,
    autoplay: true,
    keyboard: true,
    arrows: false
  });

  $(".gallery__link").on("click", function(e){
    e.preventDefault();
    if (!$(this).hasClass("gallery__link--active")) {
      $(".gallery__link").removeClass("gallery__link--active");
      $(this).addClass("gallery__link--active");
      $(".fotorama").removeAttr("data-visible");
      $($(this).attr("href")).attr("data-visible", "");
    }
  });

  $(".fotorama--video").on("click", ".fotorama__stage .fotorama__video-play", function(){
    console.log("CLINK");
    $(".gallery__tabs").attr("data-disabled", "");
  });

  $(".fotorama__video-close").on("click", function(){
    $(".gallery__tabs").removeAttr("data-disabled");
  });
}

