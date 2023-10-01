const create = (req, res) => {
    res.send('create');
}

const findAll = (req, res) => {
    res.send('findAll');
}

const ideaController = {
    create,
    findAll
}
module.exports = ideaController;