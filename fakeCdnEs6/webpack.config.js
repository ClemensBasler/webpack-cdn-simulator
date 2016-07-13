module.exports = {
    entry: './src/cdn.js',
    output: {
        path: './dist',
        filename: 'cdn.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
}
