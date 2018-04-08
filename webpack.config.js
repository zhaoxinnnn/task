const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");

const config = {
    entry : [ './src/main.js'],
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test : /\.js$/,
                use : ['babel-loader'],
                include : path.resolve(__dirname, "./src"),
                exclude : /node_modules/
                
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new openBrowserWebpackPlugin({
            url : "http://localhost:8080"
        })
    ]
};

module.exports = config;