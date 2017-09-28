if($("#year-current").length) {
  $("#year-current").text(function(){
    return new Date().getFullYear();
  });
}

// Плавный переход по якорям
  $("[href='#top']").on("click", function() {
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
