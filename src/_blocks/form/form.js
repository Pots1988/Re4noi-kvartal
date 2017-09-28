if ($("input[type='tel']").length) {
  $("input[type='tel']").mask("(000) 000 00 00");
}
// Validation form
  function validEmpty(el) {
    var regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
        regName = /^[A-Za-zА-Яа-яЁё]{2,}$/,
        regTel = /^(\([0-9]{3}\))\s([0-9]{3})\s([0-9]{2})\s([0-9]{2})$/,
        type = el.attr("type"),
        $parent = el.parent(),
        val = el.val(),
        name = el.attr("name");
    switch(type) {
      case "email":
        checkEmail();
        break;
      case "text":
        checkName();
        break;
      case "tel":
        checkTel();
        break;
    }
    function checkEmail() {
      if (val.search(regEmail) != 0) {
        invalidField(el, $parent);
      } else {
        validField(el, $parent);
      }
    }
    function checkName() {
      if (val.search(regName) != 0) {
        invalidField(el, $parent);
      } else {
        validField(el, $parent);
      }
    }
    function checkTel() {
      if (val.search(regTel) != 0) {
        invalidField(el, $parent);
      } else {
        validField(el, $parent);
      }
    }
    function validField(el){
      el.removeClass("form__input--error").addClass("form__input--done");
    }
    function invalidField(el){
      el.removeClass("form__input--done").addClass("form__input--error");
    }
  }

// ----------------------------------------------------

// Submit on form
  // Search keyup on input
    $(".form :required").on("keyup change", function(){
      validEmpty($(this));
    });
  // ----------------------------------------------------
  $(".form [type='submit']").on("click", function(e){
    var $form = $(this).closest("form");
    $form.find(":required").each(function(){
      validEmpty($(this));
    });
    if ($form.find(".form__input--error").length != 0) {
      e.preventDefault();
      $form.find(".form__input--error").each(function(){
        $(this).closest(".form__label").addClass("form__label--error");
      });
      setTimeout(function(){
        $form.find(".form__label--error").removeClass("form__label--error");
      }, 1000);
    }
  });
  $(".form").on("submit", function(e){
    var $form = $(this);
    e.preventDefault();
    if ($form.find(".form__input--error").length == 0) {
      $.ajax({
        url: $form.attr("action"),
        type: $form.attr("method"),
        data: $form.serialize(),
        success: function(data) {
          formFeedback(true);
        },
        error: function(){
          formFeedback();
        }
      });
    }
  });
  function formFeedback(val){
    var messageError = "Что-то пошло не так!<br> Пожалуйста, попробуйте еще раз",
        messageDone = "Спасибо! Мы вам перезвоним!",
        formFeedback = $("#popup-feedback"),
        form = $("#popup-form");
    if(val) {
      formFeedback.find(".popup__feedback-text").html("Спасибо! Мы вам перезвоним!");
      formFeedback.addClass("popup--active");
    } else {
      formFeedback.find("p").html("Что-то пошло не так!<br> Пожалуйста, попробуйте еще раз");
      formFeedback.addClass("popup--active");
    }
  }

// ----------------------------------------------------
