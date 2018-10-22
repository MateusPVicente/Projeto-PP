      var arr;
      var arrTitulo = new Array();
      var arrTitOrdenado = new Array();
      var arrData = new Array();
      var arrRelevacia = new Array();
      var ordenado = false;

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

    function OrdemAlfabetica(array)
    {
        var items = array;

        items.sort(function (a, b) 
        {
                console.log(a);
                console.log(b);
              if (a > b) {
                console.log("a > b");
                return 1;
              }

              if (a < b) {
                console.log("a < b");
                return -1;
              }

              console.log("a = b");
              return 0;
        });

        arrTitOrdenado = items;
        ordenado = true;

        // location.reload();
    }

    document.getElementById("n").onclick = function()
    {
        var alf = document.getElementById("r1");
        var prazo = document.getElementById("r2");
        var relev = document.getElementById("r3");
        var conc = document.getElementById("r4");

        if(alf.checked)
        {
            OrdemAlfabetica(arrTitulo);
        }
    }


    function ListarTarefas(response)
      {
        arr = JSON.parse(response);
        var estrutura = "";
        var qtdConcluidas = 0;

        //--------------------------------------------

        for(var v = 0; v < arr.length; v++)
        {
            arrTitulo[v] = arr[v].titulo;
            arrData[v] = arr[v].dataEntrega;
            arrRelevacia[v] = arr[v].relevancia;
        }

        //--------------------------------------------

        for(var i = 0; i < arr.length; i++) 
        {
            if(arr[i].finalizada == "N")
            {
                
                if(ordenado)
                {
                    alert("oi");
                    estrutura += "<tr id="+arr[i].codTarefa+">" + 
                    "<td>"+arrTitOrdenado[i]+"<td>" +
                    "<td>"+arrData[i].substring(0,10)+"<td>" +
                    "<td>"+arrRelevacia[i]+"<td>" +
                    "<a onclick='concluirTarefa("+arr[i].codTarefa+", this);'><img src='./img/edit.png' width='25' height='25'></a>" +
                    "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                    "</tr>"; 
                }

                else
                {
                    estrutura += "<tr id="+arr[i].codTarefa+">" + 
                    "<td>"+arrTitulo[i]+"<td>" +
                    "<td>"+arrData[i].substring(0,10)+"<td>" +
                    "<td>"+arrRelevacia[i]+"<td>" +
                    "<a onclick='concluirTarefa("+arr[i].codTarefa+", this);'><img src='./img/edit.png' width='25' height='25'></a>" +
                    "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                    "</tr>";
                }
            }
            else
            {
                if(ordenado)
                {
                    estrutura += "<tr bgcolor='#00b966' style='color: white; font-weight: bold' id="+arr[i].codTarefa+">" + 
                    "<td>"+arrTitOrdenado[i]+"<td>" +
                    "<td>"+arrData[i].substring(0,10)+"<td>" +
                    "<td>"+arrRelevacia[i]+"<td>" +
                    "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                    "</tr>";
                }

                else
                {
                    estrutura += "<tr bgcolor='#00b966' style='color: white; font-weight: bold' id="+arr[i].codTarefa+">" + 
                    "<td>"+arrTitulo[i]+"<td>" +
                    "<td>"+arrData[i].substring(0,10)+"<td>" +
                    "<td>"+arrRelevacia[i]+"<td>" +
                    "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                    "</tr>";
                }

                qtdConcluidas++;

                //document.getElementById("div").innerHTML = estrutura;
                //document.getElementById(arr[i].codTarefa).style.color = "white";
            }

            document.getElementById("div").innerHTML = estrutura;
        }   

        calculaDesempenho(arr.length, qtdConcluidas);
    }