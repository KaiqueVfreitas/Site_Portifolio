<?php
session_start();
require_once 'database/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['nomeTarefa']) && !empty($_POST['nomeTarefa'])) {
        $nomeTarefa = htmlspecialchars($_POST['nomeTarefa']);
        $dataTarefa = isset($_POST['dataTarefa']) ? htmlspecialchars($_POST['dataTarefa']) : null;
        if (empty($dataTarefa)) {
            $dataTarefa = null;
        }
        if (isset($_POST['id']) && !empty($_POST['id'])) {
            $id = intval($_POST['id']);
            $acao = 'Editar';
        } else {
            $acao = 'Cadastrar';
        }
    } elseif (isset($_POST['limpar']) && $_POST['limpar'] == 1) {
        $acao = 'Limpar';
    } elseif (isset($_POST['id']) && isset($_POST['apagar']) && $_POST['apagar'] == 1) {
        $id = intval($_POST['id']);
        $acao = 'Apagar';
    }

    switch ($acao) {
        case 'Cadastrar':
            if (CadastrarTarefa($nomeTarefa, $dataTarefa)) {
                echo "<script>alert('Tarefa cadastrada com sucesso!');</script>";
            } else {
                echo "<script>alert('Erro ao cadastrar tarefa!');</script>";
            }
            break;
        case 'Limpar':
            if (LimparTodasTarefas()) {
                echo "<script>alert('Todas as tarefas foram apagadas!');</script>";
            } else {
                echo "<script>alert('Erro ao apagar as tarefas!');</script>";
            }
            break;
        case 'Apagar':
            if (ApagarTarefa($id)) {
                echo "<script>alert('Tarefa apagada com sucesso!');</script>";
            } else {
                echo "<script>alert('Erro ao apagar a tarefa!');</script>";
            }
            break;
        case 'Editar':
            if (EditarTarefa($id, $nomeTarefa, $dataTarefa)) {
                echo "<script>alert('Tarefa editada com sucesso!');</script>";
            } else {
                echo "<script>alert('Erro ao editar a tarefa!');</script>";
            }
            break;
    }
}

$_SESSION['listaTarefas'] = ListarTarefas();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/style.css">
    <title>Gerenciador de Tarefas</title>
</head>
<body class="temaClaro">
    <header>
        <h1>Gerenciador de Tarefas</h1>
        <button id="botaoTrocarTema" aria-label="Trocar Tema">
            <img src="img/sol.png" class="iconeTema" alt="Trocar Tema">
        </button>
    </header>
    <main>
        <div class="formulario">
            <div id="mensagem"></div>
            <form id="formTarefa" action="" method="post">
                <input type="hidden" id="idTarefa" name="id">
                <label for="campoNomeTarefa">Nome da Tarefa</label>
                <input type="text" id="campoNomeTarefa" name="nomeTarefa" placeholder="Nome da Tarefa">
                <label for="campoDataTarefa">Data da Tarefa</label>
                <input type="datetime-local" id="campoDataTarefa" name="dataTarefa">
                <button type="submit" class="botaoAdicionar">Adicionar Tarefa</button>
            </form>
            <form action="" method="post">
                <input type="hidden" name="limpar" value="1">
                <button type="submit" class="botaoLimpar">Apagar Todas as Tarefas</button>
            </form>
        </div>
        <div class="listaTarefas">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome da Tarefa</th>
                        <th>Data da Tarefa</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if (isset($_SESSION['listaTarefas'])) {
                        foreach ($_SESSION['listaTarefas'] as $tarefa) {
                            $dataTarefaFormatada = $tarefa['dataTarefa'] ? date('d/m/Y H:i', strtotime($tarefa['dataTarefa'])) : 'Não informado';
                            echo "<tr>";
                            echo "<td>" . htmlspecialchars($tarefa['id']) . "</td>";
                            echo "<td class='nomeTarefa'>" . htmlspecialchars($tarefa['nomeTarefa']) . "</td>";
                            echo "<td>" . htmlspecialchars($dataTarefaFormatada) . "</td>";
                            echo "<td class='acoes'>
                                    <form action='' method='post' style='display:inline-block'>
                                        <input type='hidden' name='id' value='" . htmlspecialchars($tarefa['id']) . "'>
                                        <input type='hidden' name='apagar' value='1'>
                                        <button type='submit' class='botaoApagar'>Apagar</button>
                                    </form>
                                    <button class='botaoEditar' data-id='" . htmlspecialchars($tarefa['id']) . "' data-nome='" . htmlspecialchars($tarefa['nomeTarefa']) . "' data-data='" . htmlspecialchars($tarefa['dataTarefa']) . "'>Editar</button>
                                  </td>";
                            echo "</tr>";
                        }
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </main>
    <footer>
        <a href="https://kaiquevfreitas.github.io/Portifolio/">Desenvolvido por Kaique Vieira de Freitas</a>
    </footer>

    <script src="javascript/script.js"></script>
</body>
</html>
