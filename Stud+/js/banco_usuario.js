
   var arrNome = new Array();
   var arrSenha = new Array();
   var arr;

   window.onload = function(){

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Usuario";

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                //quando os dados retornarem da requisição serão enviados para a função ExibeDados()
                arr = JSON.parse(this.responseText);
                for(var i=0; i<arr.length;i++)
                {
                	arrNome[i] = arr[i].nomeUsuario;
                	arrSenha[i] = arr[i].senhaUsuario;
                }
            }
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    } 

    document.getElementById("btnEntrar").onclick = function()
    {
        var usuario = document.getElementById("usu").value;
        var senha = document.getElementById("sen").value;
        // var form = document.getElementById("f");

        if(usuario == "" || senha == "")
        {
            alert("Digite os campos corretamente!");
        }
        else
        {
            for(var i = 0; i < arr.length; i++)
            {
               if(arrNome[i] == usuario && arrSenha[i] == senha)
               {
                  document.getElementById('f').action = "./tarefa.html";
               }
               else
               	  alert("Nome de usuário ou senha inválidos!");
            }
        }
    }