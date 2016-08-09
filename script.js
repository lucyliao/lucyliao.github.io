$(function(){
  $('a[href$="#"]').on('click', function(e){
    e.preventDefault();
  });
 
  $('#pagehead').delay(400).animate({opacity: '1', top: '0'});
  $('.thumb-img').delay(1000).animate({opacity: '1'},850);
});