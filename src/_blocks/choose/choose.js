if($(".choose").length) {
  $(".choose__flats-type button").on("click", function(e){
    e.preventDefault();
    var elWithDataAttr = document.querySelectorAll(".choose__plan-svg [data-room='" + $(this).attr("data-room") + "']");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      document.querySelector(".choose__plan-svg").classList.remove("active");
      for (var j = 0; j < elWithDataAttr.length; j++) {
        elWithDataAttr[j].setAttribute("class","");
      }
    } else {
      $(this).addClass("active").siblings().removeClass("active");
      document.querySelector(".choose__plan-svg").classList.add("active");
      var polygonArr = document.querySelectorAll(".choose__plan-svg polygon");
      for (var i = 0; i < polygonArr.length; i++) {
        polygonArr[i].setAttribute("class","");
      }
      for (var j = 0; j < elWithDataAttr.length; j++) {
        elWithDataAttr[j].setAttribute("class","active");
      }
    }
  });

  $(".choose__plan-svg").on("click", function(e){
    window.location.href = window.location.origin + e.target.getAttribute("data-href");
  });

  function clickAndClearHash(number){
    var room = 0;

    if (number == "#one-room") {
      room = 1;
    } else if (number == "#two-room") {
      room = 2;
    } else if (number == "#three-room") {
      room = 3;
    }
    $(".choose__flats-type [data-room='" + room + "']").trigger("click");
    history.pushState(null, null, location.origin + location.pathname);
  }

  clickAndClearHash(window.location.hash);
}
