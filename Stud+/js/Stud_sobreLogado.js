
window.onload = function()
{
	document.getElementById('name').innerHTML = sessionStorage.getItem('nom').toUpperCase();
    document.getElementById('name2').innerHTML = sessionStorage.getItem('nom').toUpperCase();
}

document.getElementById('sair').onclick = function()
{
    sessionStorage.removeItem('cod');
    sessionStorage.removeItem('nom');
    sessionStorage.removeItem('sen');
    sessionStorage.removeItem('codPerg');
    sessionStorage.removeItem('primeiraVez');
    sessionStorage.setItem('primeiraVez', 'sim');
    location.href = "home.html"
}