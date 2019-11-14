const db = require('../data/dbconfig.js')

module.exports = {
    get,
    findById,
    insert
}

function get(){
    return db('pets')
}

function findById(id){
    return db('pets').where({ id }).first()
}

async function insert(pet){
    try{
        const [id] = await db('owners').insert(pet)
        return findById(id)
    }
    catch(error){
        console.error(error)
    }
}