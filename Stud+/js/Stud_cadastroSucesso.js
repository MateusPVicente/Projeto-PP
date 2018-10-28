 function altImagem()
 {
 	var imgAtual = document.getElementById('imga');
 	var array = ['img/cadastro.png', 'img/cadastro2.png'];

 	if(imgAtual.src.includes(array[0]))
 	{
 		imgAtual.src = array[1];
 		setTimeout(imgAtual, 3000);
 	}
 	else
 		imgAtual.src = array[0];

 	setTimeout("altImagem()", 1070); //3000ms
 }

 altImagem();

 window.onload = function()
 {
 	document.getElementById('txtS').innerHTML = 'OLÁ '+sessionStorage.getItem('nom').toUpperCase()+'! BEM-VINDO(A) AO STUD+!'
 }

 document.getElementById('texto').onclick = function()
 {
 	location.href = "home.html";
 }