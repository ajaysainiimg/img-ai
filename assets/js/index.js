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
  items:5,
  loop:true,
  margin:20,
  nav:true,
  dots:false,
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
// $('.client-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:2
//       },
//       1000:{
//           items:3
//       }
//   }
// })