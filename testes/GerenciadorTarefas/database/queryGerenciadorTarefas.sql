create database dbGerenciadorTarefasPHP; 
use dbGerenciadorTarefasPHP;

create table tbTarefas(
	id int primary key auto_increment,
	nomeTarefa varchar(20) not null, 
	dataTarefa datetime null
);

