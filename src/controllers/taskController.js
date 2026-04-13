const tarefaServico = require("../services/taskService");
const obterDadosCorpo = (req) => {
    return new Promise((resolver) => {
        let corpo = "";
        req.on('data', pedaco => corpo += pedaco.toString());
        req.on('end', () => resolver(JSON.parse(corpo || "{}")));
    });
};

const criar = async (req, res) => {
    const dados = await obterDadosCorpo(req);
    const tarefa = tarefaServico.adicionarTarefa(dados.titulo);
    res.statusCode = 201;
    res.end(JSON.stringify(tarefa));
};

const listar = (req, res) => {
    res.end(JSON.stringify(tarefaServico.pegarTodasAsTarefas()));
};

const detalhar = (req, res, id) => {
    const tarefa = tarefaServico.buscarTarefaPorId(id);
    if (!tarefa) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ mensagem: "Tarefa não encontrada" }));
    }
    res.end(JSON.stringify(tarefa));
};

const atualizar = async (req, res, id) => {
    const dados = await obterDadosCorpo(req);
    const tarefa = tarefaServico.atualizarTarefa(id, dados.titulo, dados.completada);

    if (!tarefa) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ mensagem: "Tarefa não encontrada" }));
    }
    res.end(JSON.stringify(tarefa));
};

const remover = (req, res, id) => {
    const sucesso = tarefaServico.excluirTarefa(id);
    if (!sucesso) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ mensagem: "Tarefa não encontrada" }));
    }
    res.end(JSON.stringify({ mensagem: "Removida com sucesso" }));
};

module.exports = { criar, listar, detalhar, atualizar, remover };