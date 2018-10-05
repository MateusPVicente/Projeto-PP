
function validaForm()
	{
 		var usuario = document.getElementById("usu").value;
		var senha = document.getElementById("sen").value;
		var form = document.getElementById("f");

		if(usuario == null || senha == null)
		{
			alert("Digite os campos corretamente!");
		}
		else
			// window.location.href= "./tarefa.html";
			// window.location.replace("tarefa.html");
			// $(location).attr('href', 'tarefa.html');
			form.action = "tarefa.html";
	}