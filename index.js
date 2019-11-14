const server = require('./api/server.js')

const port = process.env.PORT || 5552

server.listen(port, () => {
    console.log(`\n listenging on port ${port} \n`)
})