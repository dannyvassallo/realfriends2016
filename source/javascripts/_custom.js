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
