const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
// console.log('secret!', process.env.JWT_SECRET);
const authRouter = require('./auth/auth-router.js')
const server = express();

const Users = require('./auth/auth-model.js')

//env secret: 
require('dotenv').config()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api', authRouter)
server.get('/', (req,res) => {
    res.status(200).send('Hello! TOKENS! With Testing!')
})


server.get('/users', (req,res) => {
    console.log('resp', res)
    Users.getAll()
        .then(allUsers => {
            console.log("ALL", allUsers);
            res.status(200).json(allUsers);
          })
        .catch(error => {
            res.status(500).json({error: `You are not allowed to see this content`});
        })
})




module.exports = server