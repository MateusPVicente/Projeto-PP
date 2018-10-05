const express = require('express');
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

const rota = express.Router();
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
rota.get('/Usuario/:senhaUsuario?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
filtro = ' WHERE senhaUsuario=' + parseInt(requisicao.params.id);
execSQL('SELECT nomeUsuario from Usuario' + filtro, resposta);
})