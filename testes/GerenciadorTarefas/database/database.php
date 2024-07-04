<?php
require_once 'config.php';

function cadastrarTarefa($nomeTarefa, $dataTarefa) {
    global $cmd;

    if (empty($dataTarefa)) {
        $sql = "INSERT INTO tbTarefas (nomeTarefa, dataTarefa) VALUES (:nomeTarefa, NULL)";
    } else {
        $sql = "INSERT INTO tbTarefas (nomeTarefa, dataTarefa) VALUES (:nomeTarefa, :dataTarefa)";
    }

    $consulta = $cmd->prepare($sql);
    $consulta->bindParam(':nomeTarefa', $nomeTarefa);
    if (!empty($dataTarefa)) {
        $consulta->bindParam(':dataTarefa', $dataTarefa);
    }

    return $consulta->execute();
}

function limparTodasTarefas() {
    global $cmd;
    
    $sql = "DELETE FROM tbTarefas";
    $consulta = $cmd->prepare($sql);
    return $consulta->execute();
}
?>
