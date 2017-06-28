const express = require('express')
const server = express()

/**
 * O exemplo de como funciona o 'use' 
 * ele pode ser chamado em qualquer verbo
 * e que começa com a url especifica, 
 * no caso de nenhuma informação, ele vai "interceptar" todos as requisições.
 */

// neste exemplo interceta todas as requisições que se iniciam com "/api" "/api/**"
server.use('/api', function(req, res, next) {
    console.log('-> iniciando API ...')
    next()
    console.log('-> Fim da API.')
})

// este é o 'next' middleware que será executado
server.use('/api', function(req, res) {
    console.log('<-- interceptando a requisição API ...')
    res.send('<h1>API</h1>')    
})

const PORT = 3000
server.listen(PORT, function(){
    console.log(`Servidor ouvindo na porta ${PORT}`)
})