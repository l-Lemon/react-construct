const path = require('path')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

module.exports = {
    entry:{
        main:['babel-polyfill','./src/index.js'],
    },
    ...baseConfig.config,
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        baseConfig.htmlTemplate,
        baseConfig.extractCss
    ],
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
        proxy: {
            "/api": {
              target: "http://127.0.0.1:3000/",
              pathRewrite: {"^/api" : ""}
            }
        }
    }
}