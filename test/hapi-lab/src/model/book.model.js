const bancos = require('../config/_config'),
        bookshelf = bancos.bookshelf,
        query = bookshelf.knex


let findAllBooks = parameters => {
    return query.from();
}

module.exports = {
    findAllBooks
}