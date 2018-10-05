
	function verificaForm()
	{
		var usuario = document.getElementById("usuario").value;
		var senha = document.getElementById("senha").value;
		var confirmarSenha = document.getElementById("confSenha").value;
		var data = document.getElementById("data").value;
		var form = document.getElementById("form");

		var dataAlt = data.substring(6,10);

		var dataDesejada = new Date(data);
     	var dataAtual = new Date();

		if(usuario == null || senha == null || confirmarSenha == null || data == null)
		{
			alert("Digite os campos corretamente!");
		}

		else if(confirmarSenha != senha)
		{
			alert("A senha digitada não foi confirmada corretamente!");
		}
		else if(dataAlt >= 2018 || dataAlt < 1800)
		{
			if(dataAlt < 1930 || dataAlt > 2015)
			{
				alert("A data digitada está fora do período válido!");
			}
		}
		else
			// window.location.href= "./tarefa.html";
			// window.location.replace("tarefa.html");
			// $(location).attr('href', 'tarefa.html');
			form.action = "tarefa.html";
	}