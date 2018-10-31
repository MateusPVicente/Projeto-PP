  var arr;
  var arra;
  var arrInvertido;
  var codResp = new Array;
  
  window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Pergunta/"+sessionStorage.getItem('codPerg');

        // var urll = "http://localhost:3000/Resposta/"+sessionStorage.getItem('codPerg');
        // var xmlhttpp = new XMLHttpRequest();

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

        document.getElementById('name').innerHTML = sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('codUsu').value = sessionStorage.getItem('cod');  
        document.getElementById('codPerg').value = sessionStorage.getItem('codPerg'); 
        document.getElementById('nome').value = sessionStorage.getItem('nom');

        VerificarRespostas();
        // window.history.forward(1);
    }

    function MostrarPergunta(response)
    {
    	arr = JSON.parse(response);
    	var estrutura = "";

    for(var i = 0; i < arr.length; i++)
    {

        if(arr[i].nomePerguntador == sessionStorage.getItem('nom'))
        {
    		estrutura += 
    		"<div class='col s12 m6'>" +
    		"<div class='card white darken-1'>" +
    		"<div class='card-content black-text'>" +
    		"<span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i><i class='right small material-icons' id='set'>settings</i><p class='nome' >"+arr[0].nomePerguntador+"</p></span>" + 
    		"<p id='pergunta'>"+arr[0].pergunta+"</p>" +
    		"</div></div></div>";
        }
        else
        {
            estrutura += 
            "<div class='col s12 m6'>" +
            "<div class='card white darken-1'>" +
            "<div class='card-content black-text'>" +
            "<span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i><p class='nome' >"+arr[0].nomePerguntador+"</p></span>" + 
            "<p id='pergunta'>"+arr[0].pergunta+"</p>" +
            "</div></div></div>";
        }
    }

		document.getElementById('quadro').innerHTML = estrutura;

        document.getElementById('set').onclick = function()
        {
            $('#opc').modal('open');
        }

        document.getElementById('btnAlt').onclick = function()
        {
            var input = document.getElementById('pergAlt').value

            if(input == "")
                alert("Digite uma alteração válida!");
            else
            {
                var xml = new XMLHttpRequest();
                var end = "http://localhost:3000/Pergunta/"+sessionStorage.getItem('codPerg')+"/"+input;
                
                xml.open("PATCH", end, true);
                xml.send();
                alert("Sua pergunta foi editada com sucesso!");
                location.href = "modelo.html"
            }
        }

        document.getElementById('btnExc').onclick = function()
        {
            var conf = confirm("Você deseja realmente apagar esta pergunta?");

            if(conf)
                var xmll = new XMLHttpRequest();
                var endd = "http://localhost:3000/Pergunta/"+sessionStorage.getItem('codPerg');

                xmll.open("DELETE", endd, true);
                xmll.send();
                alert("Sua pergunta foi excluída com sucesso!"); 
                location.href = "home-forum.html"
                    
            }
        }

    function VerificarRespostas()
    {
        var urll = "http://localhost:3000/Resposta/"+sessionStorage.getItem('codPerg');
        var xmlhttpp = new XMLHttpRequest();

        xmlhttpp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                MostrarRespostas(this.responseText);
            }
        }

        xmlhttpp.open("GET", urll, true);
        xmlhttpp.send();
    }

    function MostrarRespostas(response)
    {
        arra = JSON.parse(response);

        arrInvertido = arra.map(function (item, indice, array){
        return array[array.length - indice - 1];
        });

        var estrutura = "";    

        for(var i = 0; i < arrInvertido.length; i++)
        {
            if(arrInvertido[i].nomeRespondedor == sessionStorage.getItem('nom'))
            {
               estrutura += 
              "<div class='col s12 m6'>" +
              "<div class='card white darken-1'>" +
              "<div class='card-content black-text'>" +
              // "<span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i><i class='right small material-icons' id='s"+i+"'>settings</i><p class='na' >"+arrInvertido[i].nomeRespondedor+"</p></span>" + 
              "<span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i><p class='na' >"+arrInvertido[i].nomeRespondedor+"</p></span>" + 
              "<p id='resposta'>&nbsp&nbsp&nbsp"+arrInvertido[i].resposta+"</p>" +
              "</div></div></div>"; 

              // codResp[i] = arrInvertido[i].codResp;
              // alert(codResp[i]);
            }

            else
            {
               estrutura += 
              "<div class='col s12 m6'>" +
              "<div class='card white darken-1'>" +
              "<div class='card-content black-text'>" +
               "<span class='card-title'><i class='medium material-icons' id='face' >sentiment_very_satisfied</i> <p class='na' >"+arrInvertido[i].nomeRespondedor+"</p></span>" + 
              "<p id='resposta'>&nbsp&nbsp&nbsp"+arrInvertido[i].resposta+"</p>" +
              "</div></div></div>"; 
            }
          
        }

        document.getElementById('respostas').innerHTML = estrutura;

        // for(var i = 0; i < arra.length; i++)
        // {

        //     document.getElementById('s'+i).style.cursor = "pointer";

        //     document.getElementById('s'+i).onclick = function()
        //     {
        //         $('#opc2').modal('open');
        //         sessionStorage.removeItem('codResp');
        //         sessionStorage.setItem('codResp', codResp[i]);
        //     }   
        // }

        // document.getElementById('btnAlt2').onclick = function()
        // {
        //     var input = document.getElementById('respAlt').value

        //     if(input == "")
        //         alert("Digite uma alteração válida!");
        //     else
        //     {
        //         var x = new XMLHttpRequest();
        //         var e = "http://localhost:3000/Resposta/"+sessionStorage.getItem('codResp')+"/"+input;
                
        //         x.open("PATCH", e, true);
        //         x.send();
        //         alert("Sua pergunta foi editada com sucesso!");
        //         location.href = "modelo.html"
        //     }
        // }

        // document.getElementById('btnExc2').onclick = function()
        // {
        //     var conf = confirm("Você deseja realmente apagar esta pergunta?");

        //     if(conf)
        //         var xmll = new XMLHttpRequest();
        //         var endd = "http://localhost:3000/Pergunta/"+sessionStorage.getItem('codPerg');

        //         xmll.open("DELETE", endd, true);
        //         xmll.send();
        //         alert("Sua pergunta foi excluída com sucesso!"); 
        //         location.href = "home-forum.html"
                    
        //     }
        }

    adicionarResp = function(form){
          $.post( "http://localhost:3000/Resposta/", form.serialize() ).done(function(data){
              if (!data.erro) {
                  form.each(function(data)
                  {
                  });
              }
          });
      };   


    document.getElementById('btnRes').onclick = function()
    {
        var input = document.getElementById('textarea1');

        if(input.value == "")
        {
            alert('Insira uma resposta válida!');
            document.getElementById('textarea1').focus();
        }
        else
        {
            adicionarResp($('#form4'));
            location.href = "modelo.html"
        }

    }

    document.getElementById('sair').onclick = function()
    {
        sessionStorage.removeItem('cod');
        sessionStorage.removeItem('codPerg');
        sessionStorage.removeItem('nom');
        sessionStorage.removeItem('sen');
        sessionStorage.removeItem('primeiraVez');
        sessionStorage.setItem('primeiraVez', 'sim');
        location.href = "home.html"
    }