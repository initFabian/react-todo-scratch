const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] }
        ]
    }
}