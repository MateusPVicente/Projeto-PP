
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
rota.get('/Usuario/:CodPaciente?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.codUsuario)
filtro = ' WHERE CodPaciente=' + parseInt(requisicao.params.codUsuario);
execSQL('SELECT Nome from Usuario' + filtro, resposta);
})

// rota.post('/Usuario', (requisicao, resposta) =>{
// const id = parseInt(requisicao.body.id);
// const nome = requisicao.body.nome.substring(0,150);
// const cpf = requisicao.body.cpf.substring(0,11);
// execSQL(`INSERT INTO Usuario(ID, Nome, CPF) VALUES(${id},'${nome}','${cpf}')`, resposta);
// })