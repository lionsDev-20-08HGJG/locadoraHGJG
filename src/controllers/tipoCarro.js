
let db = [{id: 1, tipo: "luxo", multiplicador: "2"}]
let nextId = 2
const tipoCarro = {
    model:(body, id = nextId++)=>{
        if(body.nome != "" && body.nome != undefined){
            return {id, nome: body.nome, multiplicador: body.multiplicador}
        }
        return undefined
    },
    store: (body) => {
        let novo = cliente.model(body)
        if(novo){ 
            db.push(novo)
            return 201;
        }else{
            return 400;
        }
    },
    showAll: () => { return db },


    show: (ql) => {
        let buscar = db.find(el => el.id == ql)
        if(buscar){ return 200
        }else{
            return 418;
        }
    },


    update: (qlID, body) => {
        let bscID = db.findIndex(el => el.id == qlID)
        let novoBody = cliente.model(body, parseInt(qlID))
        if(novoBody && bscID != (-1)){
            db[bscID] = novoBody
            return 201;
        }else{
            return 400;
        }
    },

    destroy: (qlID)=>{
        let explodir = db.findIndex(el => el.id == qlID)
        if(explodir != (-1)){
            db.splice(explodir, 1)
            return 200
        }else{
            return 400
        }
    },

};

module.exports = tipoCarro;


