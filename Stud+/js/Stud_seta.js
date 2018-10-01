

      $(window).scroll(function() {
       var scroll = $(window).scrollTop();
       
       if (scroll > 400) {
          $('#imagem').addClass('efeito');
       } else {
          $('#imagem').removeClass('efeito');
       }

       });