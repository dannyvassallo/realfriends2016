// ADD YOUR JS HERE
function resizeH(){
  $('.available-now').height($('.album-mini img').height());
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
