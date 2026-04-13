const { criarTarefa } = require('../models/taskModel');
let listaDeTarefas = [];
let contadorId = 1;

const adicionarTarefa = (titulo) => {
    const novaTarefa = criarTarefa(contadorId++, titulo);
    listaDeTarefas.push(novaTarefa);
    return novaTarefa;
};

const pegarTodasAsTarefas = () => listaDeTarefas;

const buscarTarefaPorId = (id) => {
    return listaDeTarefas.find(t => t.id == id);
};

const atualizarTarefa = (id, titulo, completada) => {
    const tarefa = listaDeTarefas.find(t => t.id == id);
    if (!tarefa) return null;

    if (titulo !== undefined) tarefa.titulo = titulo;
    if (completada !== undefined) tarefa.completada = completada;

    return tarefa;
};

const excluirTarefa = (id) => {
    const posicao = listaDeTarefas.findIndex(t => t.id == id);
    if (posicao === -1) return false;

    listaDeTarefas.splice(posicao, 1);
    return true;
};

module.exports = {
    adicionarTarefa,
    pegarTodasAsTarefas,
    buscarTarefaPorId,
    atualizarTarefa,
    excluirTarefa
};