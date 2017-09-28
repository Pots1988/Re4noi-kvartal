if ($(".popup").length) {
  $("[href='#popup-form']").on("click", function(e){
    e.preventDefault();
    $("[name='section']").val($(".choose__flat-section").text());
    $("[name='flat-number']").val($(".choose__flat-name span").text());
    $("#popup-form").addClass("popup--active");
    $("body").addClass("body-popup")
  });
  $(".popup__close").on("click", function(){
    if ($("[name='section']").length) {
      $("[name='section']").val("");
      $("[name='flat-number']").val("");
    }
    $(this).closest(".popup").removeClass("popup--active");
    $("body").removeClass("body-popup");
  });
  $(window).on("keydown", function(e){
    if (e.which == "27") {
      $(".popup").each(function(){
        if($(this).hasClass("popup--active")) {
          $(this).removeClass("popup--active");
          $("body").removeClass("body-popup");
        }
      });
    }
  });
}
