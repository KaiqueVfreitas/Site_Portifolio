<?php
session_start();

if (!isset($_SESSION['listaTarefas'])) {
    $_SESSION['listaTarefas'] = array();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['nomeTarefa'])) {
        $tarefa = htmlspecialchars($_POST['nomeTarefa']);
        array_push($_SESSION['listaTarefas'], $tarefa);
    }

    if (isset($_POST['limpar'])) {
        unset($_SESSION['listaTarefas']);
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
            <form action="" method="post">
                <label for="campoNomeTarefa">Nome da Tarefa</label>
                <input type="text" id="campoNomeTarefa" name="nomeTarefa" placeholder="Nome da Tarefa">
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
