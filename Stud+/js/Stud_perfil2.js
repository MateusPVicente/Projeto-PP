document.getElementById("AP_CONTA").onclick = function()
{
	var xml = new XMLHttpRequest();
    var end = "http://localhost:3000/Usuario/"+sessionStorage.getItem('cod')+"/"+sessionStorage.getItem('nom');

    var ok = confirm('ATENÇÃO: Você tem certeza que deseja apagar sua conta? TODOS os seus dados serão perdidos, incluindo tarefas, perguntas e respostas!');

    if(ok)
    {
	    xml.open("DELETE", end, true);
	    xml.send();
	    
	    sessionStorage.removeItem('cod');
        sessionStorage.removeItem('nom');
        sessionStorage.removeItem('sen');
	    sessionStorage.removeItem('primeiraVez');
	    sessionStorage.setItem('primeiraVez', 'sim');

	    location.href = "adeus.html"
	}	
} 