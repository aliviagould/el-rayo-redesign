$( ".menu-title" ).on( "click", function() {
    $(this).next().toggle();
  });


$(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll != 0) {
          $(".navbar").addClass("scroll");
        }
        else{
            $(".navbar").removeClass("scroll");  	
        }
});

$(".navbar-toggler-icon").on("click", function() {
    $(".navbar").toggleClass("blue");
});