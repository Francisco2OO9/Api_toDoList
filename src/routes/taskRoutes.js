const tarefaControle = require('../controllers/taskController');
module.exports = (req, res) => {
    const url = req.url;
    const metodo = req.method;

    if (url === '/tarefas' && metodo === 'GET') return tarefaControle.listar(req, res);
    if (url === '/tarefas' && metodo === 'POST') return tarefaControle.criar(req, res);

    if (url.startsWith('/tarefas/') && metodo === 'GET') {
        const id = url.split('/')[2];
        return tarefaControle.detalhar(req, res, id);
    }

    if (url.startsWith('/tarefas/') && metodo === 'PUT') {
        const id = url.split('/')[2];
        return tarefaControle.atualizar(req, res, id);
    }

    if (url.startsWith('/tarefas/') && metodo === 'DELETE') {
        const id = url.split('/')[2];
        return tarefaControle.remover(req, res, id);
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ mensagem: "Rota não encontrada" }));
};