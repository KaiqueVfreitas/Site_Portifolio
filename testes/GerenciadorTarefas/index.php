<?php
session_start();
require_once 'database/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['nomeTarefa']) && !empty($_POST['nomeTarefa'])) {
        $nomeTarefa = htmlspecialchars($_POST['nomeTarefa']);
        $dataTarefa = isset($_POST['dataTarefa']) ? htmlspecialchars($_POST['dataTarefa']) : null;
        $acao = 'cadastrar';
    } elseif (isset($_POST['limpar']) && $_POST['limpar'] == 1) {
        $acao = 'limpar';
    }

    switch ($acao) {
        case 'cadastrar':
            if (cadastrarTarefa($nomeTarefa, $dataTarefa)) {
                $_SESSION['mensagem'] = "Tarefa cadastrada com sucesso!";
            } else {
                $_SESSION['mensagem'] = "Erro ao cadastrar tarefa!";
            }
            break;
        case 'limpar':
            if (limparTodasTarefas()) {
                $_SESSION['mensagem'] = "Todas as tarefas foram apagadas!";
            } else {
                $_SESSION['mensagem'] = "Erro ao apagar as tarefas!";
            }
            break;
    }
}
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
            <?php
            if (isset($_SESSION['mensagem'])) {
                echo "<p>" . $_SESSION['mensagem'] . "</p>";
                unset($_SESSION['mensagem']);
            }
            ?>
            <form action="" method="post">
                <label for="campoNomeTarefa">Nome da Tarefa</label>
                <input type="text" id="campoNomeTarefa" name="nomeTarefa" placeholder="Nome da Tarefa">
                <label for="campoDataTarefa">Data da Tarefa</label>
                <input type="datetime-local" id="campoDataTarefa" name="dataTarefa">
                <button type="submit" class="botaoAdicionar">Adicionar Tarefas</button>
            </form>
            <form action="" method="post">
                <input type="hidden" name="limpar" value="1">
                <button type="submit" class="botaoLimpar">Apagar Todas as Tarefas</button>
            </form>
        </div>
        <div class="listaTarefas">
            <ul>
                <?php
                if (isset($_SESSION['listaTarefas'])) {
                    foreach ($_SESSION['listaTarefas'] as $tarefa) {
                        echo "<li>" . htmlspecialchars($tarefa) . "</li>";
                    }
                }
                ?>
            </ul>
        </div>
    </main>
    <footer>
        <a href="https://kaiquevfreitas.github.io/Portifolio/">Desenvolvido por Kaique Vieira de Freitas</a>
    </footer>

    <script>
        document.getElementById('botaoTrocarTema').addEventListener('click', function() {
            document.body.classList.toggle('temaClaro');
            document.body.classList.toggle('temaEscuro');
            
            const iconeTema = document.querySelector('.iconeTema');
            if (document.body.classList.contains('temaEscuro')) {
                iconeTema.src = 'img/solApagado.png';
            } else {
                iconeTema.src = 'img/sol.png';
            }
        });
    </script>
</body>
</html>
