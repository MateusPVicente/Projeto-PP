
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
			window.reload();
		}

		else if(confirmarSenha != senha)
		{
			alert("As senhas digitadas não são iguais!");
			window.reload();
		}
		else if(dataAlt >= 2018 || dataAlt < 1900 || dataAlt > 2015)
		{
			alert("A data digitada está fora do período válido!");
			window.reload();
		}
		else
		{
			alert("qawdfawd");
			sessionStorage.setItem('nom',usuario);
			location.href="tarefa.html"
			// document.getElementById("form").action = "http://localhost:3000/Usuario";
			// document.getElementById("form").method = "post";
			
		}

		// else
		// 	document.getElementById("form").action = "./tarefa.html";
		// else
		// {
		// 	document.getElementById('f').method = "post";
		// 	document.getElementById('f').action = "http://localhost:3000/Usuario";
		// }	    
	}

