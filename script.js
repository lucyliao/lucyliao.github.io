/* $(window).load(function() {    

        var theWindow        = $(window),
            $bg              = $("#bg"),
            aspectRatio      = $bg.width() / $bg.height();

        function resizeBg() {

                if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
                    $bg
                        .removeClass()
                        .addClass('bgheight');
                } else {
                    $bg
                        .removeClass()
                        .addClass('bgwidth');
                }

        }

        theWindow.resize(resizeBg).trigger("resize");

});
*/


$(function(){
  $('a[href$="#"]').on('click', function(e){
    e.preventDefault();
  });
 
  $('#pagehead').delay(400).animate({opacity: '1', top: '0'});
  $('.thumb-img').delay(1000).animate({opacity: '1'},850);
});