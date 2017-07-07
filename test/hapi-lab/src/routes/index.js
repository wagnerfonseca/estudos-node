const routes = [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Olá')
    }
}]

module.exports = routes