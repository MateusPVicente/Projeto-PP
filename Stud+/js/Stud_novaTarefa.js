
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

	function apagarTarefa(id)
	{
		var resp = confirm("Você realmente deseja remover esta tarefa?");

		if(resp){
			id.parentNode.removeChild(id);
		}
	}

	function concluirTarefa(id, link)
	{
		var resp = confirm("Você realmente deseja marcar como concluída esta tarefa?");

		if(resp){
			id.style.backgroundColor = "#00cc00";
			id.style.color = "white";
			link.style.display = 'none';
		}
	}

	  $(document).ready(function(){
   		 $('.datepicker').datepicker();
    		});

	  arrTitulo = new Array();

	  window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Tarefa";

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                //quando os dados retornarem da requisição serão enviados para a função ExibeDados()
                arr = JSON.parse(this.responseText);
                for(var i=0; i<arr.length;i++)
                {
                	arrTitulo[i] = arr[i].titulo;
                }
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    	} 

	  function validaForm2()
	  {
	  	var titulo  = document.getElementById("titulo").value;
	  	var prazo = document.getElementById("prazo").value;
	  	var urgencia = document.getElementById('urg').value;
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
	  	else if(urgencia != "Alta" && urgencia != "Média" && urgencia != "Baixa")
	  	{
	  		alert("Classificação de urgencia inválida!");
	  	}
	  	else
	  	{
	  		alert("Sua tarefa foi adicionada com sucesso!");
	  	}
	  }

	  window.onload = function()
	  {
	  	document.getElementById('name').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
	  	document.getElementById('name2').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();

	  	// window.history.forward(1);
	  }

	  function adicionaTarefa()
	  {
	  	
	  }

	  // document.getElementById('sair').onclick = function()
	  // {
	  // 	sessionStorage.removeItem('name');
	  // 	sessionStorage.removeItem('name2');
	  // 	window.location = "./home.html"
	  // }


       