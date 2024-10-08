const express = require("express");
const montadoras = require("./controllers/montadoras.js");
const modelos = require("./controllers/modelos.js");
const cores = require("./controllers/cores.js");

const situacoes = require("./controllers/situacaoCarro.js")
const tipos = require("./controllers/tipoCarro.js")
const clientes = require("./controllers/clientes.js")

const planos = require("./controllers/planos.js")
const contratos = require("./controllers/contratos.js")
const filiais = require("./controllers/filiais.js")

const regioes = require("./controllers/regioes.js")
const seguros = require("./controllers/seguros.js")
const vendedores = require("./controllers/vendedores.js")

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

app.get("/situacao", (req, res) => {
    res.json(situacoes.index());
})

app.get("/situacao/:id", (req, res) => {
    const content = situacoes.show(req.params.id)
    res.json(content)
})

app.post("/situacao", (req, res) => {
    const code = situacoes.store(req.body)
    res.status(code).json(); 
})

app.put("/situacao", (req, res) => {
    const code = situacoes.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/situacao", (req, res) => {
    const code = situacoes.destroy(req.params.id)
    res.status(code).json();
})

app.get("/tipo", (req, res) => {
    res.json(tipos.index());
})

app.get("/tipo/:id", (req, res) => {
    const content = tipos.show(req.params.id)
    res.json(content)
})

app.post("/tipo", (req, res) => {
    const code = tipos.store(req.body)
    res.status(code).json(); 
})

app.put("/tipo", (req, res) => {
    const code = tipos.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/tipo", (req, res) => {
    const code = tipos.destroy(req.params.id)
    res.status(code).json();
})

app.get("/cliente", (req, res) => {
    res.json(clientes.showAll());
})

app.get("/cliente/:id", (req, res) => {
    const content = clientes.show(req.params.id)
    res.json(content)
})

app.post("/cliente", (req, res) => {
    const code = clientes.store(req.body)
    res.status(code).json(); 
})

app.put("/cliente", (req, res) => {
    const code = clientes.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/cliente", (req, res) => {
    const code = clientes.destroy(req.params.id)
    res.status(code).json();
})

app.get("/planos", (req, res) => {
    res.json(planos.showAll());
})

app.get("/planos/:id", (req, res) => {
    const content = planos.show(req.params.id)
    res.json(content)
})

app.post("/planos", (req, res) => {
    const code = planos.store(req.body)
    res.status(code).json(); 
})

app.put("/planos", (req, res) => {
    const code = planos.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/planos", (req, res) => {
    const code = planos.destroy(req.params.id)
    res.status(code).json();
})

app.get("/contrato", (req, res) => {
    res.json(contratos.index());
})

app.get("/contrato/:id", (req, res) => {
    const content = contratos.show(req.params.id)
    res.json(content)
})

app.post("/contrato", (req, res) => {
    const code = contratos.store(req.body)
    res.status(code).json(); 
})

app.put("/contrato", (req, res) => {
    const code = contratos.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/contrato", (req, res) => {
    const code = contratos.destroy(req.params.id)
    res.status(code).json();
})

app.get("/filiais", (req, res)=>{
    res.json(filiais.index())
})

app.get("/filiais/:id", (req, res) =>{
    const content = filiais.show(req.params.id)
    res.json(content)
})

app.post("/filiais", (req, res)=>{
    const code = filiais.store(req.body)
    res.status(code).json()
})

app.put("/filiais/:id", (req,res)=>{
    const code = filiais.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/filiais/:id", (req, res)=>{
    const code = filiais.destroy(req.params.id)
    res.status(code).json()
})

app.get("/regiao", (req, res) => {
    res.json(regioes.index());
})

app.get("/regiao/:id", (req, res) => {
    const content = regioes.show(req.params.id)
    res.json(content)
})

app.post("/regiao", (req, res) => {
    const code = regioes.store(req.body)
    res.status(code).json(); 
})

app.put("/regiao", (req, res) => {
    const code = regioes.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/regiao", (req, res) => {
    const code = regioes.destroy(req.params.id)
    res.status(code).json();
})

app.get("/seguro", (req, res) => {
    res.json(seguros.index());
})

app.get("/seguro/:id", (req, res) => {
    const content = seguros.show(req.params.id)
    res.json(content)
})

app.post("/seguro", (req, res) => {
    const code = seguros.store(req.body)
    res.status(code).json(); 
})

app.put("/seguro", (req, res) => {
    const code = seguros.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/seguro", (req, res) => {
    const code = seguros.destroy(req.params.id)
    res.status(code).json();
})

app.get("/vendedor", (req, res) => {
    res.json(vendedores.index());
})

app.get("/vendedor/:id", (req, res) => {
    const content = vendedores.show(req.params.id)
    res.json(content)
})

app.post("/vendedor", (req, res) => {
    const code = vendedores.store(req.body)
    res.status(code).json(); 
})

app.put("/vendedor", (req, res) => {
    const code = vendedores.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/vendedor", (req, res) => {
    const code = vendedores.destroy(req.params.id)
    res.status(code).json();
})




app.listen(port, () => {
    console.log(`ta ligado ${port}`);
});
