// ADD YOUR JS HERE
function resizeH(){
  if($(window).width() <= 600){
    $('.available-now').css('height', 'auto');
  } else {
    $('.available-now').height($('.album-mini img').height());
  }
}

$(function(){
  resizeH();
  $('.album-mini img').on('load', function(){
    resizeH();
  });
});

$(window).resize(function(){
  resizeH();
});

// Fix inputs
$('input').focus(function(){
  if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").addClass('active');
  }
}).blur(function(){
  if($(this).val() != ''){
    // do nothing
  } else if(this.type != 'checkbox'){
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  } else {
    var query = this.id;
    $("label[for='"+query+"']").removeClass('active');
  }
});

// VALIDATE
// iterate through errors and growl them
function toasts(){
  setTimeout(function(){
    $('span.error').each(function(){
      if($(this).html() != ""){
        var errorText = $(this).text();
        Materialize.toast(errorText, 4000, 'red');
      }
    });
  }, 100);
}

// successMsg Constructor
var successMsg = "<div id=\"thankyou\" class=\"col-xs-12 cyan-text\"><h2 class=\"thanks\">Thank you for entering!</h2></div>";


$("#contest-form").validate({
  ignore: "",
  focusInvalid: false,
  rules: {
    // Name
    'entry.1846331970': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      lettersonly: true,
      minlength: 2
    },
    // Receipt
    'entry.843975296': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      minlength: 2
    },
    // email
    'entry.1695518732': {
      //checks for whitespace
      required: {
        depends:function(){
          $(this).val($.trim($(this).val()));
          return true;
        }
      },
      email: true
    }
  },
  messages: {
    // name
    'entry.1846331970': {
      required: "Please give your name.",
      lettersonly: "Letters only in the name field please.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // receipt
    'entry.843975296': {
      required: "Please give your receipt #.",
      minlength: jQuery.validator.format("At least {0} characters required!"),
    },
    // email
    'entry.1695518732': {
      required: "Please give your e-mail address.",
      email: "Please give a valid e-mail address."
    }
  },
  invalidHandler: function(form, validator) {
    toasts();
  },
  success: "valid",
  submitHandler: function(form) {
    form.submit();
    Materialize.toast("Thanks for your entry!", 4000, 'green');
    setTimeout(function(){
      function removeValue(input){
        $(input).val('').blur();
        $(input).next('label').removeClass('active');
        $(input).removeClass('valid');
      }
      removeValue('input[name="entry.1846331970"]');
      removeValue('input[name="entry.1695518732"]');
      removeValue('input[name="entry.843975296"]');
    }, 500);
  },
  errorElement : 'span',
  errorPlacement: function (error, element) {
    error.insertAfter($(element).parent().next('.error-box'));
  }
});
