
    function EnviaID() {

        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3000/Usuario";

        xmlhttp.onreadystatechange=function() {
            if (this.readyState == 4 && this.status == 200) {
                //quando os dados retornarem da requisição serão enviados para a função ExibeDados()
                validaForm(this.responseText);
            }
        }

        xmlhttp.open("GET", url, true);   
        xmlhttp.send();
    } 

    function validaForm(response)
    {
        var arr = JSON.parse(response);
        var usuario = document.getElementById("usu").value;
        var senha = document.getElementById("sen").value;
        var form = document.getElementById("f");

        if(usuario == null || senha == null)
        {
            alert("Digite os campos corretamente!");
        }
        else
        {
            for(var i = 0; i < arr.length; i++)
            {
               if(arr[i].nomeUsuario == usuario && arr[i].senhaUsuario == senha)
                  form.action = "tarefa.html"; 
            }

            alert("Nome de Usuário ou Senha inválidos!");
        }
    }