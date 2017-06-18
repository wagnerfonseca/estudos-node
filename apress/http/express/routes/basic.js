var express = require('express');
var bodyParser = require('body-parser');

// uma coleção de items em memória
var items = [];

// cria uma rota
var router = express.Router();
router.use(bodyParser());

// configura uma coleção de rotas
router.route('/')
    .get(function(req, res) {
        res.send({
            status: 'Item encontrado!!!',
            items: items
        });
    })
    .post(function(req, res){
        console.log("recebendo os dados",req.body);
        items.push(req.body);
        res.send({
            status: 'Item  adicionado',
            itemId: items.length - 1
        });
    })
    .put(function(req, res){
        items = req.body;
        res.send({ status: 'Itens substituidos'});
    }) 
    .delete(function(req, res) {
        items = [];
        res.send({ status: 'Itens limpos'});
    });


router.route('/:id')
    .get(function(req, res) {
        var id =req.params['id'];        
        if (id && items[Number(id)]) {  
            res.send({
                status: 'Item encontrado',
                item: items[Number(id)]
            });
        } else {
            res.send(404, { status: 'Não encontrado'});
        }
    })
    .all(function(req, res, next) {
        res.send(501, { status: 'Não implementado'} );
    });

var PORT = 3000;
var app = express()
            .use('/todo', router)
            .listen(PORT);

console.log('Servidor rodando na porta %s!', PORT);