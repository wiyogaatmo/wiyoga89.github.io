$(document).ready(function() {

    //===================NAVBAR SHOW/HIDE==========================//
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 250 ) {
        $("#main-nav").slideDown(700);
      } else {
        $("#main-nav").slideUp(700);
      }
    });
    // =====================RESPONSIVE MENU======================== //
  
    $('.responsive').on('click', function(e) {
      $('.nav-menu').slideToggle();
    });
  
    // ============================Typed Js======================== //
    var typed = $(".typed");
  
    $(function() {
      typed.typed({
        strings: ["Wiyoga Atmo Darwinto.", "Mechanical Engineering.", " Profesional Drafter.", "Web Developer ."],
        typeSpeed: 100,
        loop: true,
      });
    });
  
  });