const { mergeWithRules } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');
const path = require('path');

module.exports = mergeWithRules({
    module: {
        rules: {
            test: 'match',
            use: 'prepend',
        },
    },
})(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: [MiniCssExtractPlugin.loader],
            },
        ],
    },
    output: {
        clean: true,
        asyncChunks: true,
        chunkFilename: '[name].[contenthash].js',
        filename: '[name].[contenthash].js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
});