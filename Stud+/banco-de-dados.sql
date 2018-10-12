
--Banco de dados - Prática Profssional:

 create table Usuario(
 codUsuario int primary key not null,
 nomeUsuario varchar(30) not null,
 dataNascimento varchar(15) not null,
 senhaUsuario int not null,
 codDesempenho int not null,
 constraint fkcodDesempenho foreign key (codDesempenho) references Desempenho(codDesempenho)
 )

 alter table Usuario
 alter column dataNascimento datetime not null

 drop table Usuario
 drop table Desempenho
 drop table Acesso
 drop table Tarefa
 drop table StatusTarefa
 drop table Forum 

 insert into Usuario values(1,'Mateus de Padua Vicente', '29/11/2002', '1234', 1);

 delete from Usuario where codUsuario = 1

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

 insert into Desempenho values(1, 10);
 insert into Desempenho values(2, 5);
 insert into Desempenho values(3, 0);

 select * from Desempenho


