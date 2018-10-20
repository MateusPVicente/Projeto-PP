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
        // window.history.forward(1);
    }

    function apagarTarefa(obj, id)
    {
        var resp = confirm("Você realmente deseja remover esta tarefa?");
        var urll = "http://localhost:3000/Tarefa/" + id;

        if(resp){
            var xmlhttpp = new XMLHttpRequest();
            //obj.parentNode.removeChild(obj);          
            xmlhttpp.open("DELETE", urll, true);
            xmlhttpp.send();
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

        }
    }



    function ListarTarefas(response)
      {
        arr = JSON.parse(response);

        var estrutura = "";

        for(var i = 0; i < arr.length; i++) 
        {
            if(arr[i].finalizada == "N")
            {
                estrutura += "<tr id="+arr[i].codTarefa+">" + 
                "<td>"+arr[i].titulo+"<td>" +
                "<td>"+arr[i].dataEntrega+"<td>" +
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
                "<td>"+arr[i].dataEntrega+"<td>" +
                "<td>"+arr[i].relevancia+"<td>" +
                "<a onclick='apagarTarefa(getElementById("+arr[i].codTarefa+"),"+arr[i].codTarefa+");'><img id='delete' src='./img/delete.png' width='25' height='25'></a>" +
                "</tr>";

                //document.getElementById("div").innerHTML = estrutura;
                //document.getElementById(arr[i].codTarefa).style.color = "white";
            }

            document.getElementById("div").innerHTML = estrutura;
        }
    }