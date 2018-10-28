
document.getElementById("AP_CONTA").onclick = function()
{
	var xml = new XMLHttpRequest();
    var end = "http://localhost:3000/Usuario/"+sessionStorage.getItem('cod')+"/"+sessionStorage.getItem('nom');

    var ok = confirm('ATENÇÃO: Você tem certeza que deseja apagar sua conta? TODOS os seus dados serão perdidos, incluindo tarefas, perguntas e respostas!');

    if(ok)
    {
	    xml.open("DELETE", end, true);
	    xml.send();

	    location.href = "adeus.html"
	}	
} 