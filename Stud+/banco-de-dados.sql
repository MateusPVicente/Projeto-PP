
--Banco de dados - Prática Profssional:

-------------------------------------
 drop table Usuario
 drop table Tarefa
 drop table Pergunta
 drop table Resposta

 alter table Tarefa
 nocheck constraint fkcodUsuarioo

 alter table Tarefa
 check constraint fkcodUsuarioo

 alter table Pergunta
 check constraint fkcodUsuarioo2

 DBCC CHECKIDENT('Usuario', RESEED, 0)
 DBCC CHECKIDENT('Tarefa', RESEED, 0)
 DBCC CHECKIDENT('Pergunta', RESEED, 0)
 DBCC CHECKIDENT('Resposta', RESEED, 0)

 delete from Usuario
 delete from Resposta
 delete from Pergunta
 delete from Tarefa
 -------------------------------------

 create table Usuario(
 codUsuario int primary key identity(1,1) not null,
 nomeUsuario varchar(30) not null,
 dataNascimento varchar(15) not null,
 senhaUsuario varchar(30) not null,
 )

 select * from Usuario

 -------------------------------------

 create table Tarefa(
 codTarefa int primary key identity(1,1) not null,
 titulo varchar(50) not null,
 dataEntrega datetime not null,
 relevancia varchar(50) not null,
 codUsuario int not null,
 constraint fkcodUsuarioo foreign key(codUsuario) references Usuario (codUsuario)
 )

 select * from Tarefa

-------------------------------------

 create table Pergunta(
 codPergunta int primary key identity(1,1) not null,
 pergunta ntext not null,
 nomePerguntador varchar(50), 
 )

 select * from Pergunta
 -------------------------------------

 create table Resposta(
 codResp int primary key identity(1,1) not null,
 resposta ntext not null,
 nomeRespondedor varchar(50),
 codPergunta int,
 constraint fkcodPergunta foreign key(codPergunta) references Pergunta(codPergunta)  
 )

  select * from Resposta

  -------------------------------------