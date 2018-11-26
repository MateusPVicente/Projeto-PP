window.onload = function()
{
	document.getElementById('name').innerHTML = sessionStorage.getItem('nom').toUpperCase();
    document.getElementById('name2').innerHTML = sessionStorage.getItem('nom').toUpperCase();
}

 document.getElementById("alterar").onclick = function()
{
    location.href = "trocarSenha.html"
}