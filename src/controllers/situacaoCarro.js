const carro = require("./modelos.js")
let db=[{id: 1, carro_id: '1', situacao:'disponivel'}]
let nextID = 2
const situacaoCarro = {
    model: (body, id = nextID++) => {
        if(body.carro_id != "" && body.carro_id != undefined &&carro.show(body.carro_id)&&
            body.situacao!= "" && body.situacao != undefined){
                    return {id, 
                            carro: body.carro_id, 
                            situacao:body.situacao
                            }
                }
            
            return undefined
    },
    
    store: (body) => {
        let novo = situacaoCarro.model(body)
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
        let novoBody = situacaoCarro.model(body, parseInt(qlID))
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
}
module.exports = situacaoCarro
