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
        extensions: ['.tsx', '.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.tsx?$/, include: /src/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.html$/, loader: 'file-loader?name=[name].[ext]' },
            { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] }
        ]
    }
}