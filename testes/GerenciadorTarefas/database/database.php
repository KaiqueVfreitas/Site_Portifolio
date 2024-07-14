<?php
require_once 'config.php';

    function CadastrarTarefa($nomeTarefa, $dataTarefa) {
        global $cmd;

        $sql = "INSERT INTO tbTarefas (nomeTarefa, dataTarefa) VALUES (:nomeTarefa, :dataTarefa)";
        $consulta = $cmd->prepare($sql);
        $consulta->bindParam(':nomeTarefa', $nomeTarefa);
        $consulta->bindParam(':dataTarefa', $dataTarefa);

        return $consulta->execute();
    }

    function ListarTarefas() {
        global $cmd;
        
        $sql = "SELECT * FROM tbTarefas";
        $consulta = $cmd->prepare($sql);
        $consulta->execute();
        
        return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }

    function LimparTodasTarefas() {
        global $cmd;
        
        $sql = "DELETE FROM tbTarefas";
        $consulta = $cmd->prepare($sql);
        return $consulta->execute();
    }

    function ApagarTarefa($id) {
        global $cmd;
        
        $sql = "DELETE FROM tbTarefas WHERE id = :id";
        $consulta = $cmd->prepare($sql);
        $consulta->bindParam(':id', $id, PDO::PARAM_INT);

        return $consulta->execute();
    }

    function EditarTarefa($id, $nomeTarefa, $dataTarefa) {
        global $cmd;

        $sql = "UPDATE tbTarefas SET nomeTarefa = :nomeTarefa, dataTarefa = :dataTarefa WHERE id = :id";
        $consulta = $cmd->prepare($sql);
        $consulta->bindParam(':id', $id, PDO::PARAM_INT);
        $consulta->bindParam(':nomeTarefa', $nomeTarefa);
        $consulta->bindParam(':dataTarefa', $dataTarefa);

        return $consulta->execute();
    }
?>
