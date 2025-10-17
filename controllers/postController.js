// importiamo i dati del blog
const menu = require('../data/postsArray');

function index(req, res) {
    res.send('Lista dei post');
}

function show(req, res) {
    res.send('Dettagli del post ' + req.params.id);
}

function store(req, res) {
    res.send('Creazione nuovo post');
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    res.send('Eliminazione del post ' + req.params.id);
}

// esportiamo
module.exports = { index, show, store, update, modify, destroy }