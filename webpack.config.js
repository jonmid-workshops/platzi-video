const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[hash].css"
});

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist'], {root: __dirname});

module.exports = {
    entry: {
        platzivideo: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
                // use: {
                //     loader: "babel-loader",
                //     options: {
                //         presets: ['@babel/preset-env','@babel/preset-react']
                //     }
                // }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]',
                    }
                }
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        cleanWebpackPlugin
    ]
};