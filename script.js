$(document).ready(function (){
    // highlights active page in nav bar - needs to be fixed
    var str=location.href.toLowerCase();
    $(".navigation li a").each(function() {
        if (str.indexOf(this.href.toLowerCase()) > -1) {
            $("li.highlight").removeClass("highlight");
            $(this).parent().addClass("highlight");
          }
    });
    // isotope autofits thumbnails on page
    $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 250
        }
    });
    // magnific popup
    $('.image-link').magnificPopup({type:'image'});
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image'
        gallery:{enabled:true}
        callbacks: {
            buildControls: function() {
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    }
}
    });
});
$(document).ready(function () {
    $('#button').click(function () {
        $('.circle').fadeToggle(300);
    });
});