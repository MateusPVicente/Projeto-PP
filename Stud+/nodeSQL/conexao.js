const express = require('express'); //Define rotas
const app = express();
const bodyParser = require('body-parser');
const porta = 3000;
const sql = require('mssql');
const conexaoStr = "Server=regulus;Database=PR118171;User Id=PR118171;Password=PR118171;";

sql.connect(conexaoStr)
.then(conexao => global.conexao = conexao)
.catch(erro => console.log(erro));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

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

rota.post('/Usuario', (requisicao, resposta) =>{
const nome = requisicao.body.nomee.substring(0,150);
const senha = requisicao.body.senhaa;
const data = requisicao.body.dataNasc;
execSQL(`INSERT INTO Usuario(nomeUsuario, dataNascimento, senhaUsuario) VALUES('${nome}','${data}','${senha}')`, resposta);
})

rota.get('/Usuario', (requisicao, resposta) =>{
execSQL(`SELECT codUsuario FROM Usuario WHERE nomeUsuario = '${requisicao.body.nomee}'`, resposta);
})

rota.post('/Tarefa', (requisicao, resposta) =>{
const tituloo = requisicao.body.tit;
const prazoo = requisicao.body.pra;
const urgenciaa = requisicao.body.urg;
execSQL(`INSERT INTO Tarefa(dataEntrega,relevancia,titulo,codUsuario) VALUES('${prazoo}','${urgenciaa}','${tituloo}')`, resposta);
})

// const cod = parseInt(execSQL('SELECT COUNT(codUsario) from Usuario'));
// function incrementa(cod){cod++;}