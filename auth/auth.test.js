const db = require('../data/knexConfig.js')
const Users = require('./auth-model.js')

describe('get all users',  () => {
    
    beforeEach(async () => {
        await db('hobbits').truncate();
    })

    it('should return status code', () => {

    })
})