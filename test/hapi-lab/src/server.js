const Hapi = require('hapi')


// Create a server with a host and port
const server = new Hapi.Server()
server.connection({
    host: 'localhost',
    port: 3000
})

server.route(require('./routes/index'))

server.start((err) => {

    if (err)
        throw err

    console.log(`server running at ${server.info.uri}`)

})

module.exports = server