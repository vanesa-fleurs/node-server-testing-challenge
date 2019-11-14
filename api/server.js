const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express();
server.use(express.json())

server.use(helmet())
server.use(cors())

const owners = require('../routes/owner-route.js')
const pets = require('../routes/pet-routes.js')

server.use('/api/owners', owners)
server.use('/api/pets', pets)

module.exports = server;