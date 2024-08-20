const express = require("express");
const montadoras = require("./controllers/montadoras.js");
const modelos = require("./controllers/modelos.js");
const cores = require("./controllers/cores.js");
const app = express();
const port = 3000;

app.use(express.json());

  
app.get("/montadora", (req, res) => {
    res.json(montadoras.index());
})

app.get("/montadora/:id", (req, res) => {
    const content = montadoras.show(req.params.id)
    res.json(content)
})

app.post("/montadora", (req, res) => {
    const code = montadoras.store(req.body)
    res.status(code).json(); 
})

app.put("/montadora", (req, res) => {
    const code = montadoras.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/montadora", (req, res) => {
    const code = montadoras.destroy(req.params.id)
    res.status(code).json();
})

app.get("/cor", (req, res) => {
    res.json(cores.index());
})

app.get("/cor/:id", (req, res) => {
    const content = cores.show(req.params.id)
    res.json(content)
})

app.post("/cor", (req, res) => {
    const code = cores.store(req.body)
    res.status(code).json(); 
})

app.put("/cor", (req, res) => {
    const code = cores.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/cor", (req, res) => {
    const code = cores.destroy(req.params.id)
    res.status(code).json();
})

app.get("/modelo", (req, res) => {
    res.json(modelos.index());
})

app.get("/modelo/:id", (req, res) => {
    const content = modelos.show(req.params.id)
    res.json(content)
})

app.post("/modelo", (req, res) => {
    const code = modelos.store(req.body)
    res.status(code).json(); 
})

app.put("/modelo", (req, res) => {
    const code = modelos.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/modelo", (req, res) => {
    const code = modelos.destroy(req.params.id)
    res.status(code).json();
})



app.listen(port, () => {
    console.log(`ta ligado ${port}`);
});