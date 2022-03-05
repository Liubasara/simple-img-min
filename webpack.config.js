const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'img/**/**',
                to: path.resolve(__dirname, 'dist')
        }]}),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            maxFileSize: 20000, // Only apply this one to files equal to or under 20kb
            jpegtran: {progressive: false},
            pngquant: ({quality: 90}),
            plugins: [imageminMozjpeg({quality: 90})]
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            minFileSize: 20000, // Only apply this one to files over 20kb
            jpegtran: {progressive: true},
            pngquant: ({quality: 90}),
            plugins: [imageminMozjpeg({quality: 90})]
        })
    ]
}