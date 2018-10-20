
--Banco de dados - Prática Profssional:

 create table Usuario(
 codUsuario int primary key identity(1,1) not null,
 nomeUsuario varchar(30) not null,
 dataNascimento varchar(15) not null,
 senhaUsuario varchar(30) not null,
 codDesempenho int null,
 constraint fkcodDesempenho foreign key (codDesempenho) references Desempenho(codDesempenho)
 )


 drop table Usuario
 drop table Desempenho
 drop table Acesso
 drop table Tarefa
 drop table Pergunta
 drop table Resposta

 alter table Resposta
 check constraint fkcodPergunta

 alter table Pergunta
 check constraint fkcodUsuarioo2

 select * from Usuario

 DBCC CHECKIDENT('Usuario', RESEED, 0)
 DBCC CHECKIDENT('Tarefa', RESEED, 0)
 DBCC CHECKIDENT('Pergunta', RESEED, 0)

 delete from Usuario

 create table Acesso(
 codAcesso int primary key not null,
 dataAcesso date not null,
 horaAcesso time not null,
 codUsuario int not null,
 constraint fkcodUsuario foreign key(codUsuario) references Usuario(codUsuario)
 )

 select * from Acesso

 create table Tarefa(
 codTarefa int primary key identity(1,1) not null,
 titulo varchar(50) not null,
 dataEntrega datetime not null,
 relevancia varchar(50) not null,
 codUsuario int not null,
 constraint fkcodUsuarioo foreign key(codUsuario) references Usuario (codUsuario)
 )

 select * from Tarefa

 delete from Tarefa

 DELETE FROM Tarefa WHERE codTarefa=8
 SELECT * FROM Tarefa WHERE codUsuario = 1
 alter table Tarefa
 alter column dataEntrega varchar(20) not null

 insert into Tarefa values('Portugues', 'Oct 30, 2018', 'Alta')

 --codUsuario int not null,
 --constraint fkcodUsuarioo foreign key(codUsuario) references Usuario (codUsuario)

 alter table Tarefa
 add codUsuario int

 alter table Tarefa
 nocheck constraint fkcodUsuario

 alter table Tarefa
 add titulo varchar(50) not null

 select * from Tarefa

 delete from Tarefa 

 create table Pergunta(
 codPergunta int primary key identity(1,1) not null,
 pergunta ntext not null,
 nomePerguntador varchar(50), 
 )

 select * from Pergunta

 create table Resposta(
 codResp int primary key identity(1,1) not null,
 resposta ntext not null,
 nomeRespondedor varchar(50),
 codPergunta int,
 constraint fkcodPergunta foreign key(codPergunta) references Pergunta(codPergunta)  
 )

  select * from Resposta

 create table Desempenho(
 codDesempenho int primary key not null,
 pontuacao int not null
 )

 alter table Desempenho
 alter column codDesempenho int null

 insert into Desempenho values(1, 10);
 insert into Desempenho values(2, 5);
 insert into Desempenho values(3, 0);

 select * from Desempenho


 sp_help Usuario