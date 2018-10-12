
	document.getElementById("cad").onclick = function()
	{
		var usuario = document.getElementById("usuario").value;
		var senha = document.getElementById("senha").value;
		var confirmarSenha = document.getElementById("confSenha").value;
		var data = document.getElementById("data").value;
		var form = document.getElementById("form");

		var dataAlt = data.substring(6,10);

		if(usuario == "" || senha == "" || confirmarSenha == "" || data == "")
		{
			alert("Digite os campos corretamente!");
		}

		else if(confirmarSenha != senha)
		{
			alert("As senhas digitadas não são iguais!");
		}
		else if(dataAlt >= 2018 || dataAlt < 1800 || dataAlt < 1930 || dataAlt > 2015)
		{
			alert("A data digitada está fora do período válido!");
		}
		// else
		// {
		// 	document.getElementById('f').method = "post";
		// 	document.getElementById('f').action = "http://localhost:3000/Usuario";
		// }	    
	}