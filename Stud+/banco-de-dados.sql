
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
 drop table StatusTarefa
 drop table Forum 

 select * from Usuario

 DBCC CHECKIDENT('Usuario', RESEED, 0)

 delete from Usuario

 insert into Usuario values('Mateus de Padua Vicente', '29/11/2002', '1234', 1) 

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
 relevancia varchar(50) not null
 )

 alter table Tarefa
 add constraint fkcodUsuarioo foreign key(codUsuario) references Usuario (codUsuario)

 alter table Tarefa
 drop column disciplina

 alter table Tarefa
 add titulo varchar(50) not null

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

 alter table Desempenho
 alter column codDesempenho int null

 insert into Desempenho values(1, 10);
 insert into Desempenho values(2, 5);
 insert into Desempenho values(3, 0);

 select * from Desempenho


 sp_help Usuario