	var estrutura = "";
	var HTML = "";
  var arr;

  window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Pergunta";

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                ListarPerguntas(this.responseText);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send(); 

        document.getElementById('name').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase(); 
        document.getElementById('nome').value = sessionStorage.getItem('nom');        
        // window.history.forward(1);
    }

	function ListarPerguntas(response)
	{
    arr = JSON.parse(response);
		var input = document.getElementById('quest').value;

    for(var i = 0; i < arr.length; i++)
    {
		  estrutura += "<div id='quadro' class='container col s12 m6'><div class='col s12 m6'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'><i class='medium material-icons' id='face' >face</i> <a onclick='criarPag("+arr[i].codPergunta+")'><p>"+arr[i].pergunta+"</p></a></span><p>~"+arr[i].nomePerguntador+"~</p></div></div></div></div>";
    }

    document.getElementById('group').innerHTML = estrutura; 
	}

  function criarPag(cod)
  {
    location.href = "./modelo.html";
    sessionStorage.setItem('codPerg',cod);  
  }