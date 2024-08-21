const montadoras = require("./montadoras.js");
const cores = require("./cores.js");
//const seguros = require("./seguros.js")
const tipos = require("./tipoCarro.js")

const db = [
  {
    id:"1",
    montadora:"1",
    modelo:"Uno",
    cor:"1",
    tipo:"1"
  }];

let proxId = 1;

const model = (body, id = proxId++) => {
  if (body.nome != "" && body.nome != undefined &&
      body.montadora_id != undefined && montadoras.show(body.montadora_id) &&
      body.cor_id != "" && body.cor_id != undefined && cores.show(body.cor_id) &&/*
      body.seguro_id != "" && body.seguro_id != undefined && seguros.show(body.seguro_id) &&*/
      body.tipo_id != "" && body.tipo_id != undefined && tipos.show(body.tipo_id)
      ) {
    return {
      id: id,
      nome: body.nome,
      montadora: body.montadora_id,
      cor: body.cor_id,
      //seguro: seguro_id,
      tipo: body.tipo_id
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