// Плавный переход по якорям
  $("[href='#callback']").on("click", function() {
    if (location.pathname.replace(/^\//,") == this.pathname.replace(/^\//,") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


// -------------------------------------------------------------------------------------------

  if ($(".menu").hasClass("menu--main")) {
    var lastId,
        menuItems = $(".menu__list a"),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) {
            return item;
          }
        }),
        emptyElement = $("<div class='menu-empty'>").css({
          "height": $(".menu").outerHeight(true),
          "position": "absolute",
          "z-index": -1,
          "width": "100%"
        }).insertBefore($(".menu"));

    menuItems.click(function(e){
      if (window.innerWidth < 768) {
        var headerHeight = $(".header").innerHeight();
      } else {
        headerHeight = -1;
      }
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - headerHeight;
      $("html, body").stop().animate({
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
      $("body").removeClass("body-popup");
      $(".menu").removeClass("menu--open");
      $(".menu-toggle").removeClass("menu-toggle--open");
    });

    $(window).on("scroll", function(){
      if (window.innerWidth > 767) {
        if ($(this).scrollTop() > $(".promo__title").offset().top + $(".promo__title").outerHeight(true)) {
          $(".menu").addClass("menu--sticky");
          $(".menu-empty").css("position", "static");
          headerHeight = 0;
        } else {
          $(".menu").removeClass("menu--sticky");
          $(".menu-empty").css("position", "absolute");
          var headerHeight = $(".header").innerHeight();
        }
      }

      var fromTop = $(this).scrollTop();

      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop + headerHeight) {
          return this;
        }
      });

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id;
        menuItems.removeClass("active").filter("[href='#" + id + "']").addClass("active");
      }
    });
  }

document.querySelector(".menu-toggle").addEventListener("click", function(){
  this.classList.toggle("menu-toggle--open");
  document.querySelector(".menu").classList.toggle("menu--open");
  document.body.classList.toggle("body-popup");
});


