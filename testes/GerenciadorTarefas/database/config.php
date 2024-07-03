<?php
    $servidor="localhost";
    $usuario="root";
    $senha ="!@#$";
    $banco="dbGerenciadorTarefas";
    $cmd = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
?>