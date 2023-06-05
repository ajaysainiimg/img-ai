// // on scorll navbar
window.onscroll = function () {
    scrollFunction();
    topfunction();
  };
  
  var first = true;
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").classList.add('fixed-navbar');
    }
     else {
      document.getElementById("navbar").classList.remove('fixed-navbar');
    }
  }
// slider
$(document).ready(function () {
  (function ($) {
$('.client-carousel').owlCarousel({
  loop:true,
  margin:40,
  nav:false,
  dots:true,
  autoplay:false,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:3
      }
  }
})
})(jQuery);
});
