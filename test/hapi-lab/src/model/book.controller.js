const business = require('./book.business')

module.exports.books = (request, reply) => {
    const parameters = request.query
    business
        .sales(parameters)
        .then((res) => {
            reply(res).code(200)
        })
        .catch(err => reply(err).code(500))
}