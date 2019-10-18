const db = require('./data/knexConfig.js')
const Users = require('./auth/auth-model')
const request = require('supertest')
const server = require('./server.js')

// describe('get all users',  () => {

//     // beforeEach(async () => {
//     //     await db('uesrs').truncate();
//     // })

//     it('should return status code 200', () => {
//         return request(auth)
//             .get('/users')
//             .then(res => {
//                 expect(res.status).toBe(200);
//             })
//     })
// })

describe("GET /users", () => {
    it("responds with 200 OK", () => {
      return request(server)
        .get("/users")
        .expect(200);
    });
  });