  var estrutura = "";
  var HTML = "";
  var arr;
  var arrInvertido;

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

        document.getElementById('name').innerHTML = sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = sessionStorage.getItem('nom').toUpperCase(); 
        document.getElementById('nome').value = sessionStorage.getItem('nom');        
    }

    document.getElementById('btnQuest').onclick = function()
    {
      var input = document.getElementById('quest').value;

      if(input == "")
      {
        alert("Digite uma pergunta válida!");
        document.getElementById('quest').focus();
      }
      else
      {
        adicionarPerg($('#form3'));
        location.href = "home-forum.html"
      }

    }

	function ListarPerguntas(response)
	{
    arr = JSON.parse(response);

    arrInvertido = arr.map(function (item, indice, array){
    return array[array.length - indice - 1];
    });

    var input = document.getElementById('quest').value;

    for(var i = 0; i < arrInvertido.length; i++)
    {
      if(arrInvertido[i].nomePerguntador == sessionStorage.getItem('nom'))
		    estrutura += "<div id='quadro' class='container col s12 m6'><div class='col s12 m6'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i><a onclick='criarPag("+arrInvertido[i].codPergunta+")'><p>"+arrInvertido[i].pergunta+"</p></a></span><p>~"+arrInvertido[i].nomePerguntador+"~</p></div></div></div></div>";        
      else
        estrutura += "<div id='quadro' class='container col s12 m6'><div class='col s12 m6'><div class='card white darken-1'><div class='card-content black-text'><span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i> <a onclick='criarPag("+arrInvertido[i].codPergunta+")'><p>"+arrInvertido[i].pergunta+"</p></a></span><p>~"+arrInvertido[i].nomePerguntador+"~</p></div></div></div></div>";
    }

    document.getElementById('group').innerHTML = estrutura; 
	}

      function criarPag(cod)
      {
        location.href = "./modelo.html";
        sessionStorage.setItem('codPerg',cod);    
      }

      adicionarPerg = function(form){
      $.post( "http://localhost:3000/Pergunta/", form.serialize() ).done(function(data){
          if (!data.erro) {
              form.each(function(data)
              {
              });
          }
      });
  };   