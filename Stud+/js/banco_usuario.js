
   var arrNome = new Array();
   var arrSenha = new Array();
   var arrCodUsu = new Array();
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
                  arrCodUsu[i] = arr[i].codUsuario;
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

        if(usuario == "" || senha == "")
        {
            alert("Digite os campos corretamente!");
        }
        else
        { 
            var achou = false;
            for(var i = 0; i < arr.length; i++)
            {
               if(arrNome[i] == usuario && arrSenha[i] == senha)
               {
                  sessionStorage.setItem('nom', usuario);
                  sessionStorage.setItem('cod', arrCodUsu[i]);

                  // document.getElementById('name').innerHTML = "BEM-VINDO, " + usuario;
                  achou = true;
                  document.getElementById("f").action = "./tarefa.html";
               }
            }

            if (!achou)
              alert("Nome de usuário ou senha inválidos!");
        }
    }

