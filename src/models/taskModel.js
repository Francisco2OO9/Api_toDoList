
const criarTarefa = (id, titulo) => {
    return {
        id: id,
        titulo: titulo,
        completada: false
    };
};

module.exports = { criarTarefa };