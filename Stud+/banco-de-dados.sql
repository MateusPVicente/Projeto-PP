
--Banco de dados - Prática Profssional:

 create table Usuario(
 codUsuario int primary key not null,
 nomeUsuario varchar(30) not null,
 dataNascimento datetime not null,
 senhaUsuario int not null,
 codDesempenho int not null,
 constraint fkcodDesempenho foreign key (codDesempenho) references Desempenho(codDesempenho)
 )

 select * from Usuario

 create table Acesso(
 codAcesso int primary key not null,
 dataAcesso date not null,
 horaAcesso time not null,
 codUsuario int not null,
 constraint fkcodUsuario foreign key(codUsuario) references Usuario(codUsuario)
 )

 select * from Acesso

 create table Tarefa(
 codTarefa int primary key not null,
 disciplina varchar(50) not null,
 dataEntrega datetime not null,
 relevancia varchar(50) not null
 )

 select * from Tarefa


 create table StatusTarefa(
 codStatus int primary key not null,
 tipoStatus varchar(15) not null
 )

 select * from StatusTarefa

 create table Forum(
 codForum int primary key not null,
 descricao varchar(100) not null,
 codUsuario int not null,
 constraint fkcodUsuario2 foreign key(codUsuario) references Usuario(codUsuario)
 )

 select * from Forum

 create table Desempenho(
 codDesempenho int primary key not null,
 pontuacao int not null
 )

 select * from Desempenho


