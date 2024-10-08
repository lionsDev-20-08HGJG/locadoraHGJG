const db = [
    {
      nome:"Total",
      id:"1"
    }
  ];
  
  let proxId = 2;
  
  const model = (body, id = proxId++) => {
    if (body.nome != "" && body.nome != undefined) {
      return {
        id,
        nome: body.nome,
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
    return 404;
  };
  
  module.exports = {
    store,
    index,
    show,
    update,
    destroy,
  };