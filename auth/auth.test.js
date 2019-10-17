const db = require('../data/knexConfig.js')

module.exports = {
    getAll,
    add,
    findById,
    findBy
}

async function getAll(){
    return db('users')
}