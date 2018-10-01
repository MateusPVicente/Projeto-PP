$(window).scroll(function() {
   var scroll = $(window).scrollTop();
   
   if (scroll > 400) {
      $('img').addClass('efeito');
   } else {
      $('img').removeClass('efeito');
   }

});