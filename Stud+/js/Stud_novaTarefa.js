
	// $('#nt').click(function(){
	// 	M.toast(
	// 	{
	// 		html: 'Tarefa adicionada com sucesso!', 
	// 		classes: 'rounded',
	// 	});
	// });

	// $('#ca').click(function(){
	// 	M.toast(
	// 	{
	// 		html: 'Cadastro realizado com sucesso!', 
	// 		classes: 'rounded',
	// 	});
	// });


	  $(document).ready(function(){
   		 $('.datepicker').datepicker();
    		});

	  function validaForm2()
	  {
	  	var titulo  = document.getElementById("titulo").value;
	  	var prazo = document.getElementById("prazo").value;
	  	var urgencia = document.getElementById('urg').value;
	  	var valCod = document.getElementById('cod').value;
	  	var dataDesejada = new Date(prazo);
     	var dataAtual = new Date();

	  	if(titulo == "" || prazo == "" || urgencia == "")
	  	{
	  		alert("Digite as informações corretamente!");
	  	}
	  	else if(dataDesejada < dataAtual)
	  	{
	  		alert("A data digitada está fora do período válido!");
	  	}
	  	else if(urgencia != "Alta" && urgencia != "Média" && urgencia != "Pequena")
	  	{
	  		alert("Classificação de urgencia inválida!");
	  	}
	  	else
	  	{
	  		adicionarTaf($("#form2"));
	  		alert("Sua tarefa foi adicionada com sucesso!");
	  		window.location = "tarefa.html"
	  	}
	  } 

	  window.onload = function()
	  {
	  	document.getElementById('name').innerHTML = sessionStorage.getItem('nom').toUpperCase();
	  	document.getElementById('name2').innerHTML = sessionStorage.getItem('nom').toUpperCase();
	  	document.getElementById('cod').value = sessionStorage.getItem('cod');
	  	//valCod = sessionStorage.getItem('cod');

	  	// window.history.forward(1);
	  }

	  // document.getElementById('sair').onclick = function()
	  // {
	  // 	sessionStorage.removeItem('name');
	  // 	sessionStorage.removeItem('name2');
	  // 	window.location = "./home.html"
	  // }

	  adicionarTaf = function(form){
      $.post( "http://localhost:3000/Tarefa/", form.serialize() ).done(function(data){
          if (!data.erro) {
              form.each(function(data)
              {
              });
          }
      });
  };   

     document.getElementById("alterar").onclick = function()
    {
        location.href = "trocarSenha.html"
    }


       