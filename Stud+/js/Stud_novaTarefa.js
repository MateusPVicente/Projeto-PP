
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
		var resp = confirm("Você quer apagar essa tarefa?");


			if(resp){
				id.parentNode.removeChild(id);
			}
	}

	  $(document).ready(function(){
   		 $('.datepicker').datepicker();
    		});
       