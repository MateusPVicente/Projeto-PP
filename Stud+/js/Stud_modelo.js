  var arr;
  window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Pergunta/"+sessionStorage.getItem('codPerg');

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                MostrarPergunta(this.responseText);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        document.getElementById('name').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('codUsu').value = sessionStorage.getItem('cod');  
        document.getElementById('codPerg').value = sessionStorage.getItem('codPerg'); 
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