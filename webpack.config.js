var path = require('path');

module.exports = {
    entry: {
        browserlocale: './index.js'
    },
    output: {
        path: __dirname,
        filename: "[name].js",
        library: "browserlocale",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                loader: 'babel'
            }
        ]
    }
};
