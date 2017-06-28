const express = require('express')
const server = express()

/**
 * O exemplo do uso do 'NEXT', que é utilizado para chamar 
 * o outro 'middleware' 
 */

server.get('/', function(req, res, next) {
    console.log('-> iniciando ...')
    next()
    console.log('-> Fim.')
})

// este é o 'next' middleware que será executado
server.get('/', function(req, res) {
    console.log('<-- interceptando a requisição ...')
    res.send('<h1>HOME</h1>')    
})

const PORT = 3000
server.listen(PORT, function(){
    console.log(`Servidor ouvindo na porta ${PORT}`)
})