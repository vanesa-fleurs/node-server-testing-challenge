const db = require('../data/dbconfig.js')
const { get, findById, insert } = require('../models/owner.js')
const bcrypt = require('bcryptjs')

describe('Owner Model', () => {


    describe('get()', () =>{

        beforeEach(async () => {
            await db('owners').truncate()
        })

        it('inserts new owner Jane', async () => {
            const owner = await insert({
                username: 'Jane', 
                password: bcrypt.hashSync("12345", 10),
                name: 'Jane Eyre',
                residence: 'Texas',
                email: 'jane.eyre@gmail.com'
            })

            // const owners = db('owners')
            expect(owner.username).toBe('Jane')
            expect(owner.name).toBe('Jane Eyre')
            expect(owner.residence).toBe('Texas')
            expect(owner.email).toBe('jane.eyre@gmail.com')
            expect(owner.id).toBeDefined();
        })
    })
})