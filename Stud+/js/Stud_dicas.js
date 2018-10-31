 $(document).ready(function(){
    $('.collapsible').collapsible();
  });

 var titulo = document.getElementById('titulo');
 var texto = document.getElementById('texto');
 var imagem = document.getElementById('imagem');

 document.getElementById('1').onclick = function()
 {
 	titulo.innerHTML = "ORGANIZAÇÃO";

 	texto.innerHTML = 
 	"&nbsp&nbsp&nbsp&nbsp&nbspA organização é algo fundamental no cotidiano de um estudante como você, pois além de ajudá-lo " + 
 	"a encontrar os materiais que precisa para o estudo, te dá um tempo maior para dedicar-se sem precisar " +
 	"se preocupar onde viu seu caderno pela última vez." +

 	"<br>&nbsp&nbsp&nbsp&nbsp&nbspPara ajudá-lo, preparamos 4 pontos que te auxiliarão na organização de suas coisas:" +
  	"<br><br>1) Procure um cantinho onde possa guardar tudo o que for relacionado aos estudos e divida-o em duas partes: uma para livros e outra para cadernos (Caso você utilize um fichário, separe as folhas com divisórias a fim de diferenciar exercícios de teoria)."+
  	"<br><br>2) Separe folhas que estejam avulsas em pastas de acordo com as respectivas matérias. " +
  	"<br><br>3) Ao escrever em seu caderno/fichário, utilize canetas de cores diferentes a fim de facilitar o entendimento da matéria."+ 		
	"<br><br>4) Utilize sua área de tarefas para listar as atividades que precisa fazer, dessa forma, ajudando-o a visualizar o que precisa fazer. Acesse-a clicando <a href='./tarefa.html'>aqui</a>.";  	

	imagem.src = "img/d1.png";

 }

 document.getElementById('2').onclick = function()
 {
 	titulo.innerHTML = "TEMPO DE ESTUDO";

 	texto.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspO que fazer quando você descobre que está entulhado de tarefas para fazer? Primeiramente mantenha a calma. "+
 	"Após tomar um copo d´água para baixar os nervos, monte um cronograma de estudos. Mas o que é um cronograma de estudos? "+
	"<br>&nbsp&nbsp&nbsp&nbsp&nbspCronograma de estudos são anotações onde você determina em que dia da semana você realizará uma tarefa, estudará determinada matéria e por quanto tempo. " +
	"A partir daí, você passa a controlar suas atividades acadêmicas e rotina de estudo, evitando o acúmulo de lições e de dor de cabeça." 	

	imagem.src= "img/d2.png";	
 }

 document.getElementById('3').onclick = function()
 {
 	titulo.innerHTML = "DÚVIDAS";

 	texto.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspMuitas dúvida surgiram enquanto você estudava? Não se preocupe! Sempre tem alguém que consegue fazer, e por isso você pode pedir ajuda. " + 	
	"<br>&nbsp&nbsp&nbsp&nbsp&nbspOs amigos e colegas são uma ótima opção quando se tem alguma dúvida, pois eles são mais próximos e conseguirão te explicar muito bem. <br>&nbsp&nbsp&nbsp&nbsp&nbspNós da Stud+ também somos seus amigos, para demonstrar, disponibilizamos um sistema de fórum "+
	"para você acessar sempre que necessário, a fim de pedir ajudar para outros usuários mais experientes. Não é incrível?! "+
	"<br><br>Para acessar: Tarefas >> Menu de Opções >> Fórum do Estudante. Você também pode acessar clicando <a href='./home-forum.html'>aqui</a>."	 		

	imagem.src= "img/d3.png";	
 }

 document.getElementById('4').onclick = function()
 {
 	titulo.innerHTML = "EXERCÍCIOS";

 	texto.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspExercícios são uma ótima forma de praticar o que foi estudado na teoria de uma determinada matéria. Com eles, você desenvolve sua capacidade de pensar "+
	"e de compreender assuntos, facilitando-lhe guardar o que foi aprendido. " +
	"<br>&nbsp&nbsp&nbsp&nbsp&nbspEsteja sempre atualizado com sua matéria fazendo pelo menos 2 exercícios por dia! Vamos praticar!"; 		 			

	imagem.src= "img/d4.png";	
 }

 document.getElementById('5').onclick = function()
 {
 	titulo.innerHTML = "DESCANSO";

 	texto.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspO descanso é essencial para manter a mente tranquila. Apenas o esforço sem pausas não faz bem para sua saúde mental, só deixa-o mais cansado e sem vontade de estudar. " +
 	"<br>&nbsp&nbsp&nbsp&nbsp&nbspPara obter um bom resultado de seus desempenho, insira no seu cronograma de estudos um período de lazer e descanso. Que tal dar uma sonequinha? Pode ir, mas não se esqueça de volta depois, hein?!"

	imagem.src= "img/d5.png";	
 }

 document.getElementById('6').onclick = function()
 {
 	titulo.innerHTML = "RESUMOS";

 	texto.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbspPrimeiramente é necessário que definamos o termo resumo: Resumo é um documento que contém a síntese de um texto/conteúdo podendo ser realizado em estrutura de parágrafos ou em tópicos. <br>&nbsp&nbsp&nbsp&nbsp&nbspSendo assim, "+
	"já é possível notar qual será a função dele em sua jornada: auxiliar na hora de estudo, visualizando apenas os pontos principais que devem ser compreendidos, além de poupar seu tempo de ficar lendo toda aquela teoria! <br>&nbsp&nbsp&nbsp&nbsp&nbspPara melhorar ainda mais seu rendimento, procure "+
	"utilizar várias cores de canetas para diferenciar títulos, textos, tópicos, curiosidades, etc. Vamos treinar!";	 			

	imagem.src= "img/d6.png";	
 }

 window.onload = function()
 {
 	document.getElementById('name').innerHTML = sessionStorage.getItem('nom').toUpperCase();
    document.getElementById('name2').innerHTML = sessionStorage.getItem('nom').toUpperCase();       
 }

 document.getElementById("alterar").onclick = function()
{
    location.href = "trocarSenha.html"
}

	document.getElementById('sair').onclick = function()
    {
        sessionStorage.removeItem('cod');
        sessionStorage.removeItem('codPerg');
        sessionStorage.removeItem('nom');
        sessionStorage.removeItem('sen');
        sessionStorage.removeItem('primeiraVez');
        sessionStorage.setItem('primeiraVez', 'sim');
        location.href = "home.html"
    }