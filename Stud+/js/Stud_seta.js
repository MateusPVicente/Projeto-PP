

  $(window).scroll(function() {
   var scroll = $(window).scrollTop();
   
   if (scroll > 400) {
      $('#imagem').addClass('efeito');
      $('#imagem').css("cursor","pointer");
   } else {
      $('#imagem').removeClass('efeito');
      $('#imagem').css("cursor","default");
}

});

  // function verificaTela()
  // {
  // 	var width = screen.width;
  // 	var heigth = screen.height;

  // 	if(width < 100 || heigth < 100)
  // 	{
  // 		alert("sssssss");
  // 	}
  // }