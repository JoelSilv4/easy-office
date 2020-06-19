create database easy_bank;
use easy_bank;
create table Contratante(
cnpj int primary key,
nomeEmpresa varchar(40),
email varchar(40),
senha varchar(40)
);

insert into Contratante values
(362444555, "Easy Office", "easy_office@corp.com", "senhafraca");

create table Predio(
idPredio int primary key AUTO_INCREMENT,
endereco varchar(40),
fkContratante int,
foreign key(fkContratante) references Contratante(cnpj)
) auto_increment = 100;

select * from Predio;
insert into Predio values 
(null,"Av Paulista", 362444555);


create table Andar(
idAndar int primary key AUTO_INCREMENT,
capacidadeTotal int,
capacidadeDisp int,
fkPredio int,
foreign key(fkPredio) references Predio(idPredio)
) auto_increment = 200;

create table Funcionario(
idFuncionario int primary key AUTO_INCREMENT,
nomeFuncionario varchar(40),
emailFuncionario varchar(40),
senhaFuncionario varchar(40),
fkPredio int,
foreign key(fkPredio) references Predio(idPredio)
) auto_increment = 300;

insert into Funcionario values
(null, "Kaique", "kaique.gomes@bandtec.com", "senhafraca",100);
insert into Funcionario value
(null, "Arthur", "arthur.diarre@bandtec.com", "senhafraca", 100);

create table Computador(
idMaquina int primary key AUTO_INCREMENT,
fkFuncionario int,
foreign key(fkFuncionario) references Funcionario(idFuncionario)
) auto_increment = 400;

insert into Computador values
(null,301);

select * from Funcionario,Computador where fkfuncionario = idFuncionario and fkPredio = 100;

create table Ram(
idRam int primary key AUTO_INCREMENT,
dispRam decimal(12,2),
totalRam decimal(12,2),
fkComputador int,
foreign key(fkComputador) references Computador(idMaquina)
) auto_increment = 1000;

create table DiscoMemoria(
idDisco int primary key AUTO_INCREMENT,
DiscoDisponivel decimal(12,1),
totalDisco decimal(12,1),
fkComputador int,
foreign key(fkComputador) references Computador(idMaquina)
) auto_increment = 5000;


create table CpuComputador(
idCpu int primary key AUTO_INCREMENT,
nomeCpu varchar(100),
usoCpu decimal(12,2),
fkComputador int,
foreign key(fkComputador) references Computador(idMaquina)
)auto_increment = 10000;

create table Processos(
idProcesso int primary key AUTO_INCREMENT,
nomeProcesso varchar(70),
fkComputador int,
foreign key(fkComputador) references Computador(idMaquina)
)auto_increment = 15000;

create table SO(
idSO int primary key AUTO_INCREMENT,
nomeSO varchar(100),
fkComputador int,
foreign key(fkComputador) references Computador(idMaquina)
)auto_increment = 30000;

insert into SO value
(null, "a", 400);

select * from Computador;
insert into Processos values
(null,"riot",400);

create table Log(
idLog int primary key AUTO_INCREMENT,
msg varchar(1000),
dataRegistro datetime,
fkComputador int,
foreign key(fkComputador) references Computador(idMaquina)
)auto_increment = 20000;

select * from SO where fkComputador = 400;
select * from Ram where fkComputador = 400;
select * from DiscoMemoria where fkComputador = 400;
select * from CpuComputador where fkComputador = 400;
