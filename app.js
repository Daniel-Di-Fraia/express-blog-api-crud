const express = require("express");
const app = express();
const port = 3000;

// usiamo il middleware static di express per file statici
app.use(express.static('public'));

// importiamo modulo router blog
const router = require("./routers/posts");

// impostiamo la rotta di index
app.get("/", (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
});

app.use("/posts", router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});