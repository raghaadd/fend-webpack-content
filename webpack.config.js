const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,  // Corrected test regex
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                type: 'json'  // Use the built-in JSON support
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json']  // Optional: To resolve .json files automatically
    }
};
