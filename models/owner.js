const db = require('../data/dbconfig.js')


module.exports = {
    get,
    findById,
    insert
}

function get(){
    return db('owners')
}

function findById(id){
    return db('owners').where({ id }).first()
}

async function insert(owner){
    try{
        const [id] = await db('owners').insert(owner)
        return db('owners').where({ id }).first()
    }
    catch(error){
        console.error(error)
    }
}



