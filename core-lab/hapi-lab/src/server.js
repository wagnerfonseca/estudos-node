const Hapi = require('hapi')
const _ = require('lodash')

// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
    host: 'localhost',
    port: 3000
})

// all routes
server.route(require('./helper/routes'))

server.start((err) => {
    if (err)
        throw err
    console.log(`server running at ${server.info.uri}`)
})

module.exports = server