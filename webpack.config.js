const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TreserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer:{
        watchFiles: path.resolve(__dirname, 'src'),
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new ESLintPlugin(),
    ],
    module:{
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [
                    {
                    loader: 'file-loader',
                        options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                    },
                ],
            },
        ]
    },
    optimization: {
        minimizer: isProd ? [new CssMinimizerPlugin(), new TreserPlugin() ] : [],
    },
}