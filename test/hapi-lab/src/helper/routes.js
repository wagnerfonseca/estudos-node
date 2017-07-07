/**
 * create array with all routes dinamyc
 */

const _ = require('lodash')
const wrench = require('wrench')

// file path point
var baseDir = require('path').normalize(__dirname + '/../')
var files = wrench.readdirSyncRecursive(baseDir)
files = _.filter(files, (f) => {
    return _.endsWith(f, '.routes.js')
})

var routes = []
_.forEach(files, (f) => {    
    // return obj routes  
    if(!_.includes(f, '/node_modules/'))   
        routes = _.concat(routes, require(baseDir + f))
})

module.exports = routes