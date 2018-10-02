
	$('#nt').click(function(){
		M.toast(
		{
			html: 'Tarefa adicionada com sucesso!', 
			classes: 'rounded',
		});
	});

	$('#ca').click(function(){
		M.toast(
		{
			html: 'Cadastro realizado com sucesso!', 
			classes: 'rounded',
		});
	});

	function apagarTarefa(id)
	{
		var resp = confirm("Você realmente deseja remover esta tarefa?");


			if(resp){
				id.parentNode.removeChild(id);
			}
	}

	  $(document).ready(function(){
   		 $('.datepicker').datepicker();
    		});

	  function validaForm2()
	  {
	  	var titulo  = document.getElementById("titulo").value;
	  	var prazo = document.getElementById("prazo").value;

	  	var dataDesejada = new Date(prazo);
     	var dataAtual = new Date();

	  	if(titulo == "" || prazo == "")
	  	{
	  		alert("Digite as informações corretamente!");
	  	}
	  	else if(dataDesejada < dataAtual)
	  	{
	  		alert("A data digitada está fora do período válido!");
	  	}
	  }
       