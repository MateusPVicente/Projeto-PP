      var arr;

window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Tarefa/" + sessionStorage.getItem('cod');

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                ListarTarefas(this.responseText);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send(); 

        document.getElementById('name').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('c').innerHTML = sessionStorage.getItem('nom').toUpperCase();       
        // window.history.forward(1);
    }

    function apagarTarefa(obj, id)
    {
        var resp = confirm("Você realmente deseja remover esta tarefa?");
        var urll = "http://localhost:3000/Tarefa/" + id;

        if(resp){
            var xmlhttpp = new XMLHttpRequest();
            obj.parentNode.removeChild(obj);          
            xmlhttpp.open("DELETE", urll, true);
            xmlhttpp.send();
            location.href = "tarefa.html";
        }
    }

    function calculaDesempenho(nTarefas, nTarefasConcluidas)
    {
        var total = parseInt(nTarefas);
        var concluidas = parseInt(nTarefasConcluidas);

        if(nTarefas == 0)
            document.getElementById("v").innerHTML = "DESEMPENHO: 100%";
        else if(nTarefasConcluidas == 0)
            document.getElementById("v").innerHTML = "VOCÊ TEM TAREFAS DISPONÍVEIS!";
        else
        {
            var ret = Math.round((concluidas / total) * 100);
            document.getElementById("v").innerHTML = "DESEMPENHO: " + ret + "%";
        }
    }


    function concluirTarefa(id,obj)
    {
        var resp = confirm("Você realmente deseja marcar como concluída esta tarefa?");
        var urlll = "http://localhost:3000/Tarefa/" + id;

        if(resp)
        {
            var xmlhttppp = new XMLHttpRequest();          
            xmlhttppp.open("PATCH", urlll, true);
            xmlhttppp.send(); 
            obj.parentNode.removeChild(obj);
            document.getElementById(id).style.backgroundColor = "#00b966";
            document.getElementById(id).style.color = "white";
            location.href = "tarefa.html";

        }
    }



    function ListarTarefas(response)
      {
        arr = JSON.parse(response);

        var estrutura = "";
        var qtdConcluidas = 0;

        for(var i = 0; i < arr.length; i++) 
        {
            if(arr[i].finalizada == "N")
            {
                estrutura += "<tr id="+arr[i].codTarefa+">" + 
                "<td>"+arr[i].titulo+"<td>" +
                "<td>"+arr[i].dataEntrega.substring(0,10)+"<td>" +
                "<td>"+arr[i].relevancia+"<td>" +
                "<a onclick='concluirTarefa("+arr[i].codTarefa+", this);'><img src='./img/edit.png' width='25' height='25'></a>" +
                "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                "</tr>";

                //document.getElementById("div").innerHTML = estrutura;
            }
            else
            {
                estrutura += "<tr bgcolor='#00b966' style='color: white; font-weight: bold' id="+arr[i].codTarefa+">" + 
                "<td>"+arr[i].titulo+"<td>" +
                "<td>"+arr[i].dataEntrega.substring(0,10)+"<td>" +
                "<td>"+arr[i].relevancia+"<td>" +
                "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                "</tr>";

                qtdConcluidas++;

                //document.getElementById("div").innerHTML = estrutura;
                //document.getElementById(arr[i].codTarefa).style.color = "white";
            }

            document.getElementById("div").innerHTML = estrutura;
        }   

        calculaDesempenho(arr.length, qtdConcluidas);
    }