module.exports = {
  entry: './src/tsStuff.ts',
  output: {
    path: 'dist',
    filename: 'cdn.ts.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
