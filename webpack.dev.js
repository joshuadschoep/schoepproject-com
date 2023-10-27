const { mergeWithRules } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = mergeWithRules({
    module: {
        rules: {
            test: 'match',
            use: 'prepend',
        },
    },
})(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        port: '3000',
        static: './public',
        open: false,
        hot: true,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.(c|sa|sc)ss$/,
                use: ['style-loader'],
            },
        ],
    },
});
