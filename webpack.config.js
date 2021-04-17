const path = require('path');
const basePath = __dirname;
const distPath = 'dist';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/JQL.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 'JQL.wp.js'
    }
};

module.exports = webpackInitConfig;