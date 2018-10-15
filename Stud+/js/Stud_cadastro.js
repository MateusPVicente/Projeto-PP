
	document.getElementById("cad").onclick = function()
	{
		var usuario = document.getElementById("usuario").value;
		var senha = document.getElementById("senha").value;
		var confirmarSenha = document.getElementById("confSenha").value;
		var data = document.getElementById("data").value;

		var dataAlt = data.substring(6,10);

		if(usuario == "" || senha == "" || confirmarSenha == "" || data == "")
		{
			alert("Digite os campos corretamente!");
			document.getElementById("form").action = "./cadastro.html";
		}

		else if(confirmarSenha != senha)
		{
			alert("As senhas digitadas não são iguais!");
			document.getElementById("form").action = "./cadastro.html";
		}
		else if(dataAlt >= 2018 || dataAlt < 1800 || dataAlt < 1930 || dataAlt > 2015)
		{
			alert("A data digitada está fora do período válido!");
			document.getElementById("form").action = "./cadastro.html";
		}
		else
			document.getElementById("form").action = "./tarefa.html";
		// else
		// {
		// 	document.getElementById('f').method = "post";
		// 	document.getElementById('f').action = "http://localhost:3000/Usuario";
		// }	    
	}