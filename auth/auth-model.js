const db = require('../data/knexConfig.js')

module.exports = {
    getAll,
    add,
    findById,
    findBy
}

function getAll(){
    console.log("here...")
    return db('users')
    // .select('id', 'username', 'department')
}
async function add(user) {
    const [id] = await db('users').insert(user);
  
    return findById(id);
}

function findById(id) {
    return db('users')
      .select('id', 'username', 'department')
      .where({ id })
      .first();
}

function findBy(filter){
    return db('users').where(filter).first();
}