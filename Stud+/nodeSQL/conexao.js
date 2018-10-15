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

//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/Usuario/:nomeUsuario?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.nomeUsuario)
filtro = ' WHERE nomeUsuario=' + requisicao.params.nomeUsuario;
execSQL('SELECT * from Usuario' + filtro, resposta);
})

rota.post('/Usuario', (requisicao, resposta) =>{
const nome = requisicao.body.nomee.substring(0,150);
const senha = requisicao.body.senhaa;
const data = requisicao.body.dataNasc;
execSQL(`INSERT INTO Usuario(nomeUsuario, dataNascimento, senhaUsuario) VALUES('${nome}','${data}','${senha}')`, resposta);
})

// const cod = parseInt(execSQL('SELECT COUNT(codUsario) from Usuario'));
// function incrementa(cod){cod++;}