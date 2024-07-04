<?php
$servidor = "localhost";
$usuario = "root";
$senha = "!@#$";
$banco = "dbGerenciadorTarefasPHP";
$cmd = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
?>
