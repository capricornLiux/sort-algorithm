const path = require('path');
module.exports = {
    entry: {
        'index': path.resolve(__dirname, './testSort.js')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './')
    }
}