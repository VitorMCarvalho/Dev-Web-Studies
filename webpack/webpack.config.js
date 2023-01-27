const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? "development" : "production", /*outra opcao eh 'production' */
    entry:"./src/principal.js", /* arquivo de entrada raiz */
    output : {
        filename: "principal.js", /*nome do arquivo de saida */
        path: __dirname + "/public" /*local da pasta de saida */
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{
        rules:[
                {
                    test: /\.s?[ac]ss$/,
                    use:[
                        MiniCssExtractPlugin.loader,
                        //'style-loader', // adiciona css a dom injetando a tag <style>
                        'css-loader', //interpreta @import, url()
                        "sass-loader"
                    ]
                },{
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    use: ['file-loader']
                }
        ]
    }
}