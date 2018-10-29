var fases = ["● ● ● ● ●", "■ ● ● ● ●", "■ ■ ● ● ●", "■ ■ ■ ● ●", "■ ■ ■ ■ ●", "■ ■ ■ ■ ■"];

async function carregue(id, tempo)
{
	var barra = document.getElementById(id);
	var tempoPassado = 0;
	var faseAtual = 0;

	barra.innerHTML = fases[0];

	while(tempoPassado < tempo)
	{
		faseAtual++;
		if(faseAtual > 5)
			faseAtual = 0;

		barra.innerHTML = fases[faseAtual];

		tempoPassado += 100;
		await sleep(100);
	}
}

function sleep(millisecs) {
    var initiation = new Date().getTime();
    while ((new Date().getTime() - initiation) < millisecs);
}