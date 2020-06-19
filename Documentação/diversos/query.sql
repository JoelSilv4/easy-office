create table FUNCIONARIO (
idFuncionario int primary key identity(1,1000),
nomeFuncionario varchar(250) not null,
emailFuncionario varchar(250) not null,
senhaFuncionario varchar(250) not null);

create table CONTRATANTE (
cnpj varchar (20) primary key,
nome varchar(250) not null,
nomeEmpresa varchar(250) not null,
email varchar(250) not null,
senha varchar(250)not null);

create table COMPUTADOR (
idMaquina int primary key,
fkFuncionario int,
foreign key (fkFuncionario) references FUNCIONARIO (idFuncionario));

create table PROCESSOS (
idProcesso int,
nomeProcesso varchar (250),
fkComputador int,
foreign key (fkComputador) references COMPUTADOR (idMaquina));

create table CPU_COMPUTADOR (
idCpu int,
nomeCpu varchar(250),
usoCpu decimal (5,2),
fkComputador int,
foreign key (fkComputador) references COMPUTADOR (idMaquina));

create table DISCO_MEMORIA (
idDisco int,
discoDisponivel decimal(5,2),
totalDisco decimal (5,2),
fkComputador int,
foreign key (fkComputador) references [dbo].[COMPUTADOR] (idMaquina));

create table RAM (
idRam int,
dispRam decimal (5,2),
totalRam decimal( 5,2),
fkComputador int,
foreign key (fkComputador) references [dbo].[COMPUTADOR] (idMaquina));

create table SO (
idSo int,
soNome varchar(255),
fkComputador int,
foreign key (fkComputador) references [dbo].[COMPUTADOR] (idMaquina));

alter table [dbo].[FUNCIONARIO]
add fkContratante varchar(20);

alter table [dbo].[FUNCIONARIO]
add foreign key (fkContratante) references [dbo].[CONTRATANTE] (cnpj);