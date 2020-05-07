jQuery(function($){
var $navbar = $('.container-fluid');
$(window).scroll(function(event) {
var $current = $(this).scrollTop();
   if( $current > 300 ){
        $navbar.addClass('navbar-color');
   } else {
        $navbar.removeClass('navbar-color');
   }
});
});
