function voltarAoTopo()
{
     window.scroll({
      top:  0,
      left: 0, 
      behavior: 'smooth'
    });
}

 function hoverSeta()
 {
 	var img = document.getElementById("imagem");
 	img = document.getElementById("imagem").src = "./img/seta2.png";
 }

 function sairHoverSeta()
 {
 	var img = document.getElementById("imagem");
 	img = document.getElementById("imagem").src = "./img/seta.png";
 }

 $(window).scroll(function() {
   var scroll = $(window).scrollTop();
   if (scroll > 700) {
      $('#imagem2').css("display","block");
   } else if(scroll < 250) {
      $('#imagem2').css("display","none");
}
});