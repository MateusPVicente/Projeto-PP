
   var arrNome = new Array();
   var arrSenha = new Array();
   var arrCodUsu = new Array();
   var arr;
   var usuario;

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


    document.getElementById("cad").onclick = function()
  {
      usuario = document.getElementById("usuario").value;
      var senha = document.getElementById("senha").value;
      var confirmarSenha = document.getElementById("confSenha").value;
      var data = document.getElementById("data").value;
      var achou = false;

      var dataAlt = data.substring(6,10);

      for(var i = 0; i < arr.length; i++)
      {
         if(usuario == arrNome[i] && achou == false)
         {
            alert("Esse nome de usuário já está sendo utilizado!");
            achou = true;
            usuario.innerHTML = "";
         }
      }

      if(achou == false)
      {
        if(usuario == "" || senha == "" || confirmarSenha == "" || data == "")
          {
            alert("Digite os campos corretamente!");
          }

          else if(confirmarSenha != senha)
          {
            alert("As senhas digitadas não são iguais!");
          }
          else if(dataAlt >= 2018 || dataAlt < 1900 || dataAlt > 2015)
          {
            alert("A data digitada está fora do período válido!");
          }
          else
          {
            sessionStorage.setItem('nom', usuario);
            cadastrar($("#form"));
            location.href = "cadastroSucesso.html"
          } 
      }
}

// function passaCod()
// {
//   console.log(arrNome);
//     for(var u = 0; u < arrNome.length; u++)
//     {
//       console.log(usuario);
//       console.log(arrNome[u]);
//       alert("1");
//       if(usuario == arrNome[u])
//       {
//         sessionStorage.setItem('cod', arrCodUsu[u]);
//       }
//       alert("2");
//     }
//     alert("3");
// }

