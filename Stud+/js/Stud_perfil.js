  
var senhaAtual = document.getElementById('senAtual');
var novaSenha = document.getElementById('novaSen');

document.getElementById("btnTrocar").onclick = function()
{
  if(senhaAtual.value == "" || novaSenha.value == "")
	alert("Digite os campos corretamente!");
  else if(senhaAtual.value != sessionStorage.getItem('sen'))
	alert("Parece que você digitou sua senha errada :(");
  else if(senhaAtual.value == sessionStorage.getItem('sen') && senhaAtual.value == novaSenha.value)
    alert("As duas senhas continuam sendo iguais :/");
  else
  {
	  var xml = new XMLHttpRequest();
    var end = "http://localhost:3000/Usuario/"+sessionStorage.getItem('cod')+"/"+novaSenha.value;
    
    xml.open("PATCH", end, true);
    xml.send();

    sessionStorage.removeItem('sen');
    sessionStorage.setItem('sen', novaSenha.value);

    alert("Senha alterada com sucesso!");
    location.href = "tarefa.html"
  }

}