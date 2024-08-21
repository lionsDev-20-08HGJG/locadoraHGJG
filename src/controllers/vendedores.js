const regioes = require("./regioes.js");

const db = [
  {
    id:"1",
    nome:"Thiago",
    regiao:"Ponta Grossa"
  }];

let proxId = 1;

const model = (body, id = proxId++) => {
  if (body.nome != "" && body.nome != undefined &&
      body.regiao_id != undefined && regioes.show(body.regiao_id)
      ) {
    return {
      id: id,
      nome: body.nome,
      regiao:regiao_id
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