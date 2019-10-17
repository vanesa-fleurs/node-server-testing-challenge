const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()
// console.log('secret!', process.env.JWT_SECRET);
const authRouter = require('./auth/auth-router.js')
const server = express();

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api', authRouter)

server.get('/', (req,res) => {
    res.send('Hello! TOKENS! With Testing!')
})

module.exports = server