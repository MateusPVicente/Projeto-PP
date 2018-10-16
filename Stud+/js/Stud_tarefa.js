      var arr = new Array();

window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Tarefa";

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                //quando os dados retornarem da requisição serão enviados para a função ExibeDados()
                ListarTarefas(this.responseText);
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send(); 

        document.getElementById('name').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();
        document.getElementById('name2').innerHTML = "BEM-VINDO, " + sessionStorage.getItem('nom').toUpperCase();        
        // window.history.forward(1);
    }



function ListarTarefas(response)
      {
        arr = response;
        var estrutura = "";

        for(var i = 0; i < arr.length; i++) 
        {
            estrutura += "<tr id="+i+">" + 
            "<td>"+arr[i].titulo+"<td>" +
            "<td>"+arr[i].prazo+"<td>" +
            "<td>"+arr[i].relevancia+"<td>" +
            "<a onclick='concluirTarefa(getElementById('"+i+"'), this)'><img src='./img/edit.png' width='25' height='25' /></a>" +
            "<a onclick='apagarTarefa(getElementById('"+i+"'))'><img id='delete' src='./img/delete.png' width='25' height='25'/></a>";
        }

        document.getElementById("div").innerHTML = estrutura;
     
  }