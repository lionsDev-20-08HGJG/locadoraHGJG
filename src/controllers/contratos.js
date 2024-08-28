const clientes = require("./clientes.js");
const planos = require("./planos.js")
const modelos = require("./modelos.js")
const vendedores = require("./vendedores.js")

const db = [
  {
    id:"1",
    cliente_id: "1",
    plano_id: "1",
    vendedor_id: "1",
    quantidade: "4",
    modelo_id: "1",
    data: "27/08/2024"
  }];

let proxId = 2;

const model = (body, id = proxId++) => {
  const data = new Date();
  const opcoes = {day:'2-digit',month:'2-digit', year:'numeric'}
  const dataFormatada = data.toLocaleDateString('pt-br', opcoes)
  let dia = dataFormatada.split('/')
  let atual = body.data.split('/')
  if (body.quantidade != "" && body.quantidade != undefined && body.quantidade > '0' &&
      body.vendedor_id != undefined && vendedores.show(body.vendedor_id) && body.vendedor_id != "" &&
      body.plano_id != "" && body.plano_id != undefined && planos.show(body.plano_id) &&
      body.cliente_id != "" && body.cliente_id != undefined && clientes.show(body.cliente_id) &&
      body.modelo_id != "" && body.modelo_id != undefined && modelos.show(body.modelo_id) &&
      body.data != "" && body.data != undefined && atual[1] >= dia[1] && atual[0] >= dia[0] && atual[2] >= dia[2]
      ) {
    return {
      id: id,
      cliente_id: body.cliente_id,
      plano_id: body.plano_id,
      vendedor_id: body.vendedor_id,
      quantidade: body.quantidade,
      modelo_id: body.modelo_id,
      data: body.data
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (body, id) => {
  const indice = db.findIndex((el) => el.id == id);
  if (indice != -1) {
    const novo = model(body, id);
    if (novo) {
      db[indice] = novo;
      return 200;
    }
  }
  return 400;
};

const destroy = (id) => {
  const indice = db.findIndex((el) => el.id == id);
  if (indice != -1) {
    db.splice(indice, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};