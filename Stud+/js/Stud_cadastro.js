
	function verificaForm()
	{
		var usuario = document.getElementById("usuario").value;
		var senha = document.getElementById("senha").value;
		var confirmarSenha = document.getElementById("confSenha").value;
		var data = document.getElementById("data").value;

		var dataDesejada = new Date(data);
     	var dataAtual = new Date();

		if(usuario == null || senha == null || senha != confirmarSenha || confirmarSenha == null || data == null || 
		   dataDesejada > dataAtual)
		{
			alert("Digite os campos corretamente!");
		}
	}