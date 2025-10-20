// importiamo i dati del blog
const blogPosts = require('../data/postsArray');

function index(req, res) {
    res.json(blogPosts);
}

function show(req, res) {
    // recuperiamo l'id dall' URL e convertiamolo in un numero
    const id = parseInt(req.params.id)

    const post = blogPosts.find(post => post.id === id);

    //controllo
    if (!post) {

        //status 404
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    res.json(post);

}

function store(req, res) {
    console.log('dati:', req.body);
}

function update(req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) {
    // recuperiamo l'id
    const id = parseInt(req.params.id)

    // cerchiamo il post tramite id
    const post = blogPosts.find(post => post.id === id);

    //controllo
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Rimuoviamo il post dal blog
    blogPosts.splice(blogPosts.indexOf(post), 1);

    //controllo in log in terminale
    console.log(blogPosts);

    // Restituiamo lo status per l eliminazione andata a buon fine
    res.sendStatus(204)
}

// esportiamo
module.exports = { index, show, store, update, modify, destroy }