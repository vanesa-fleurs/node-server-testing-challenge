const db = require('../data/dbconfig.js')
const { get, findById, insert } = require('./pet.js')


describe('Pet Model', () => {

        beforeEach(async () => {
            await db('pets').truncate()
        })

        it('inserts() new pet', async () => {
            const pet = await insert({
                name: 'Melon',
                age: '2 years',
                breed: 'Golden Retriever',
                gender: 'Female',
                size: 'large'
            })

            // const owners = db('owners')
            expect(pet.name).toBe('Melon')
            expect(pet.age).toBe('2 years')
            expect(pet.breed).toBe('Golden Retriever')
            expect(pet.gender).toBe('Female')
            expect(pet.trained).toBe(0)
            expect(pet.id).toBeDefined();
            expect(pet.aboutMe).toBeNull();
        })
        it('findById(1)', async () => {
            await insert({
                name: 'Melon',
                age: '2 years',
                breed: 'Golden Retriever',
                gender: 'Female',
                size: 'large'
            })

            await insert({
                name: 'Peach',
                age: '2 years',
                breed: 'Golden Retriever',
                gender: 'Male',
                size: 'large'
            })

            const response = await findById(1)
            expect(response.id).toBe(1)

        })

})