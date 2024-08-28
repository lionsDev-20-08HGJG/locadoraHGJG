const db = [{
    id:"1",
    nome:"Mensal",
    tempo:"30",
    valor:"1500"

}]
let InicialId = 2;

const model = (body, id = InicialId++)=>{
 if(body.nome != undefined && body.nome != '' 
 && body.valor != undefined && body.valor != '' && body.valor > '0'
 && body.tempo != undefined && body.tempo != ''
&& body.tempo > '0'){
    return{
        id,
        valor: body.valor,
        nomePlano: body.nome,
        tempo: body.tempo    
    }
}
}
const store = (body)=>{
    const novo = model(body)
    if(novo){
        db.push(novo)
        return 200
    }
    return 400
}

const showAll = () => db

const show = (id) => db.find((el) => el.id == id);

const update = (body, id)=>{
    const indice = db.findIndex(el=>el.id == id)
    const novo = model(body, parseInt(id))
    if(novo && indice != -1){
        db[indice] = novo
        return 200
    }
    return 400
}

const destroy = (id) => {
    const remove = db.findIndex(el=>el.id == id)
    if(remove != -1){
        db.splice(remove, 1)
        return 200
    }
    return 400
}

module.exports = {store, showAll, show, update, destroy}