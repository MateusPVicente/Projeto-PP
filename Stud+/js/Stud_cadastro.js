      
      cadastrar = function(form){
      $.post( "http://localhost:3000/Usuario/", form.serialize() ).done(function(data){
          if (!data.erro) {
              form.each(function(data)
              {
                
              });
          }
      });
  };   

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
