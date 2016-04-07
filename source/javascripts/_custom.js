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
