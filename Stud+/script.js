

    $(document).ready(function(){
        $('.menu').click(function(){
            $('ul').toggleClass('active');
        })
    })


    
    function page1()
    {
      window.scroll({
          top:  590,
          left: 100, 
          behavior: 'smooth'
        });
    }

    

               
      function iniciaModal(modalID)
      {
          const modal = document.getElementById(modalID);
          if(modal){
          modal.classList.add('mostrar');
          modal.addEventListener('click', (e) => {
              
              if(e.target.id == modalID || e.target.className == 'fechar'){
                  modal.classList.remove('mostrar');
              }
          });
        }
      }
         
      const btn = document.getElementById('btn');
         if(btn != null)
             {
                btn.addEventListener('click', ()  => iniciaModal('modal-login'));
             }
   




    function voltarAoTopo()
    {
         window.scroll({
          top:  0,
          left: 0, 
          behavior: 'smooth'
        });
    }




    
    function validaForm()
    {
      var usuario = document.getElementById("usu").value;
      var senha = document.getElementById("sen").value;

      if(usuario != "" || senha != "")
        window.location.href("./Tarefas_PP.html");
        window.location.assign("./Tarefas_PP.html");
    }



  /*<!--<FAZER IMAGEM APARECER--> */
    
$(window).scroll(function() {
   var scroll = $(window).scrollTop();
   
   if (scroll > 400) {
      $('img').addClass('efeito');
   } else {
      $('img').removeClass('efeito');
   }

});

    

    
  function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
    

