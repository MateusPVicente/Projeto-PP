  var arr;
  var arra;
  window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Pergunta/"+sessionStorage.getItem('codPerg');

        var urll = "http://localhost:3000/Resposta/"+sessionStorage.getItem('codPerg');
        var xmlhttpp = new XMLHttpRequest();

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                MostrarPergunta(this.responseText);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        //--------TENTATIVA DE DAR "GET" NA TABELA RESPOSTAS--------------------------------------

        // xmlhttp.onreadystatechange=function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         MostrarRespostas(this.responseText);
        //     }
        // }

        // xmlhttpp.open("GET", urll, true);
        // xmlhttpp.send();

        //---------------------------------------------------------------------------------------

        document.getElementById('name').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('codUsu').value = sessionStorage.getItem('cod');  
        document.getElementById('codPerg').value = sessionStorage.getItem('codPerg'); 
        document.getElementById('nome').value = sessionStorage.getItem('nom');
        // window.history.forward(1);
    }

    function MostrarPergunta(response)
    {
    	arr = JSON.parse(response);
    	var estrutura = "";

		estrutura += 
		"<div class='col s12 m6'>" +
		"<div class='card white darken-1'>" +
		"<div class='card-content black-text'>" +
		"<span class='card-title'><i class='medium material-icons' id='face' >face</i> <p class='nome' >"+arr[0].nomePerguntador+"</p></span>" + 
		"<p id='pergunta'>PERGUNTA: "+arr[0].pergunta+"</p>" +
		"</div></div></div>";

		document.getElementById('quadro').innerHTML = estrutura;
    }

    function MostrarRespostas(response)
    {
        arra = JSON.parse(response);

        var estrutura = "";    

        for(var i = 0; i < arra.length; i++)
        {
          estrutura += 
          "<div class='col s12 m6'>" +
          "<div class='card white darken-1'>" +
          "<div class='card-content black-text'>" +
          "<span class='card-title'><i class='medium material-icons' id='face' >face</i> <p class='nome' >"+arra[0].nomeRespondedor+"</p></span>" + 
          "<p id='pergunta'>RESPOSTA: "+arra[0].resposta+"</p>" +
          "</div></div></div>";
        }

        document.getElementById('respostas').innerHTML = estrutura;
    }