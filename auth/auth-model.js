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
async function add(){
    return null;
}
async function findById(){
    return null;
}
async function findBy(){
    return null;
}