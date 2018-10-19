const express = require('express'); //Define rotas
const app = express();
const bodyParser = require('body-parser');
const porta = 3000;
const sql = require('mssql');
const conexaoStr = "Server=regulus.cotuca.unicamp.br;Database=PR118171;User Id=PR118171;Password=PR118171;";

sql.connect(conexaoStr)
.then(conexao => global.conexao = conexao)
.catch(erro => console.log(erro));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) 
{ 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PATCH, DELETE"); next(); 
});

const rota = express.Router(); //é o que digitamos na URL
rota.get('/', (requisicao, resposta) => resposta.json({ mensagem: 'Funcionando!'}));
app.use('/', rota);

app.listen(porta);
console.log('API Funcionando!');

function execSQL(sql, resposta) {
global.conexao.request()
	.query(sql)
	.then(resultado => resposta.json(resultado.recordset))
	.catch(erro => resposta.json(erro));
}

rota.get('/Usuario', (requisicao, resposta) =>{
execSQL('SELECT * FROM Usuario', resposta);
})

rota.get('/Tarefa', (requisicao, resposta) =>{
execSQL('SELECT * FROM Tarefa', resposta);
})

rota.get('/Tarefa/:codUsuario?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.codUsuario)
filtro = ` WHERE codUsuario='` + requisicao.params.codUsuario + `'`;
execSQL('SELECT * from Tarefa' + filtro, resposta);
});

rota.get('/Pergunta/:codPergunta?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.codPergunta)
filtro = ` WHERE codPergunta='` + requisicao.params.codPergunta + `'`;
execSQL('SELECT * from Pergunta' + filtro, resposta);
});

rota.get('/Resposta/:codPergunta?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.codPergunta)
filtro = ` WHERE codPergunta='` + requisicao.params.codPergunta + `'`;
execSQL('SELECT * from Resposta' + filtro, resposta);
});

/*var cod = rota.get('/Usuario/:nomeUsuario?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.nomeUsuario)
filtro = ` WHERE nomeUsuario='` + requisicao.params.nomeUsuario + `'`;
execSQL('SELECT codUsuario from Usuario' + filtro, resposta);
});
*/

rota.post('/Tarefa', (requisicao, resposta) =>{
const tituloo = requisicao.body.tit;
const prazoo = requisicao.body.pra;
const urgenciaa = requisicao.body.urg;
const codigo = requisicao.body.cod;
execSQL(`INSERT INTO Tarefa(titulo,dataEntrega,relevancia,codUsuario,finalizada) VALUES('${tituloo}','${prazoo}','${urgenciaa}','${codigo}', 'N')`, resposta);
})

rota.post('/Pergunta', (requisicao, resposta) =>{
const perg = requisicao.body.quest;
const nome = requisicao.body.nome;
execSQL(`INSERT INTO Pergunta(pergunta,nomePerguntador) VALUES('${perg}','${nome}')`, resposta);
})

rota.post('/Resposta', (requisicao, resposta) =>{
const resp = requisicao.body.textarea1;
const codUsuario = requisicao.body.codUsu;
console.log(codUsuario);
const codPergunta = requisicao.body.codPerg;
execSQL(`INSERT INTO Resposta(resposta,codUsuario, codPergunta) VALUES('${resp}','${codUsuario}','${codPergunta}')`, resposta);
})

rota.delete('/Tarefa/:codTarefa?', (requisicao, resposta) =>{ 
	execSQL('DELETE FROM Tarefa WHERE codTarefa=' + requisicao.params.codTarefa, resposta); 
})

rota.post('/Usuario', (requisicao, resposta) =>{
const nome = requisicao.body.nomee.substring(0,150);
const senha = requisicao.body.senhaa;
const data = requisicao.body.dataNasc;
execSQL(`INSERT INTO Usuario(nomeUsuario, dataNascimento, senhaUsuario) VALUES('${nome}','${data}','${senha}')`, resposta);
})

rota.patch('/Tarefa/:codTarefa?', (requisicao, resposta) =>{
    execSQL("UPDATE Tarefa SET finalizada='S' WHERE codTarefa=" + requisicao.params.codTarefa, resposta);  
})