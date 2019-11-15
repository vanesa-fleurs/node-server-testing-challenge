const db = require('../data/dbconfig.js')
const { get, findById, insert } = require('../models/owner.js')
const bcrypt = require('bcryptjs')

describe('Owner Model', () => {

        beforeEach(async () => {
            await db('owners').truncate()
        })

        it('inserts() new owner Jane', async () => {
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
        it('findById(2)', async () => {
            await insert({
                username: 'Jane', 
                password: bcrypt.hashSync("12345", 10),
                name: 'Jane Eyre',
                residence: 'Texas',
                email: 'jane.eyre@gmail.com'
            })

            await insert({
                username: 'Lilly01', 
                password: bcrypt.hashSync("12345", 10),
                name: 'Lilly Eyre',
                residence: 'Texas',
                email: 'lilly.eyre@gmail.com'
            })

            const response = await findById(2)
            expect(response.id).toBe(2)

            // const owners = await db('owners')

        })

})