<?php
require_once 'config.php';

function cadastrarTarefa($nomeTarefa, $dataTarefa) {
    global $cmd;

    try {
        if (empty($dataTarefa)) {
            $sql = "INSERT INTO tbTarefas (nomeTarefa, dataTarefa) VALUES (:nomeTarefa, NULL)";
        } else {
            $sql = "INSERT INTO tbTarefas (nomeTarefa, dataTarefa) VALUES (:nomeTarefa, :dataTarefa)";
        }

        $stmt = $cmd->prepare($sql);
        $stmt->bindParam(':nomeTarefa', $nomeTarefa);
        if (!empty($dataTarefa)) {
            $stmt->bindParam(':dataTarefa', $dataTarefa);
        }

        return $stmt->execute();
    } catch (PDOException $e) {
        return false;
    }
}
function limparTodasTarefas(){
    global $cmd;
    try {
        $sql = "delete from tbTarefas"
        $stmt = $cmd->prepare($sql);
        return $stmt->execute();
    } catch (PDOException $e) {
        return false;
    }
}
?>
