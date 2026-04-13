const http = require('http');
const rotasTarefas = require('./routes/taskRoutes');

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    rotasTarefas(req, res);
});

const PORTA = 3000;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});