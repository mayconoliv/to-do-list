const buttonAddTarefa = document.querySelector('.formularioTarefa button');
const campoAddTarefa = document.getElementById('inputadicionarTarefa');

const listaTarefas = document.querySelector('ul');

buttonAddTarefa.addEventListener('click', adicionarNovaTarefa);

function adicionarNovaTarefa() {
    const conteudoCampo = campoAddTarefa.value;

    const tarefa = document.createElement('li');
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const buttonFinalizarTarefa = document.createElement('button');
    const buttonRemoverTarefa = document.createElement('button');
    const img = document.createElement('img');

    h2.innerText = conteudoCampo;

    buttonFinalizarTarefa.classList.add('botaoFinalizarTarefa');

    buttonFinalizarTarefa.addEventListener('click', finalizarTarefa);
    buttonRemoverTarefa.addEventListener('click', removerTarefa);

    img.src = './img/trash.svg';
    img.alt = 'Imagem botão remover tarefa';

    buttonRemoverTarefa.appendChild(img);

    div.appendChild(buttonFinalizarTarefa);
    div.appendChild(buttonRemoverTarefa);

    tarefa.appendChild(h2);
    tarefa.appendChild(div);
  listaTarefas.appendChild(tarefa);
}
  function removerTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');

    tarefaClicada.remove();
  }

function finalizarTarefa(evento){
    const buttonClicado = evento.currentTarget;
    const tarefaClicada = buttonClicado.closest('li');

    tarefaClicada.classList.toggle('tarefaFinalizada');
}

const inputNoturno = document.getElementById('inputModonoturno');
const main = document.querySelector('main');

inputNoturno.addEventListener('click', ativarModoNoturno);

function ativarModoNoturno(){
    main.classList.toggle('modoNoturno');
}