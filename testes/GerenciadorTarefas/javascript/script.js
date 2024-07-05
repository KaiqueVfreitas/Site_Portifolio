document.addEventListener('DOMContentLoaded', () => {
    const botaoTrocarTema = document.getElementById('botaoTrocarTema');
    const formTarefa = document.getElementById('formTarefa');
    const mensagemDiv = document.getElementById('mensagem');
    const botaoAdicionar = formTarefa.querySelector('.botaoAdicionar');
    const idTarefaInput = document.getElementById('idTarefa');
    const campoNomeTarefa = document.getElementById('campoNomeTarefa');
    const campoDataTarefa = document.getElementById('campoDataTarefa');
    const editarButtons = document.querySelectorAll('.botaoEditar');

    botaoTrocarTema.addEventListener('click', () => {
        document.body.classList.toggle('temaClaro');
        document.body.classList.toggle('temaEscuro');
        
        const iconeTema = document.querySelector('.iconeTema');
        if (document.body.classList.contains('temaEscuro')) {
            iconeTema.src = 'img/solApagado.png';
        } else {
            iconeTema.src = 'img/sol.png';
        }
    });

    function mostrarMensagem(mensagem, tipo) {
        alert(mensagem);
    }

    formTarefa.addEventListener('submit', (e) => {
        if (!campoNomeTarefa.value.trim()) {
            e.preventDefault();
            mostrarMensagem('Por favor, preencha o nome da tarefa.', 'erro');
        }
    });

    editarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const nome = e.target.dataset.nome;
            const data = e.target.dataset.data;

            idTarefaInput.value = id;
            campoNomeTarefa.value = nome;
            campoDataTarefa.value = data;

            botaoAdicionar.textContent = 'Salvar Alterações';
        });
    });
});
