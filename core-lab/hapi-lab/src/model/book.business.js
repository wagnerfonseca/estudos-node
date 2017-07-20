const bookModel = require('./book.model')

const aBooks = {
    records: []
}

module.exports.books = 
    parameters => {
        // fulfilled(resolve) or rejected
        return new Promise( (resolve, reject) => {
            bookModel
                .findAllBooks(parameters)
                .then(response => {
                    response.forEach( res => {
                        aBooks.records.push(CreateBook(res))
                    })
                    resolve(aBooks)
                })
                .catch(err => reject(err))
        })
    }

let CreateBook = (res) => {
    let returnJason = {
        title: res.title,
        author: res.author,
        isbn: res.isbn,
        pageCount: res.pageCount,
        datePublished: res.datePublished
    }
    return returnJason
}