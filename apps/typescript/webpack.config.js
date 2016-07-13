module.exports = {
  entry: './src/tsStuff.ts',
  output: {
    filename: 'tsStuff.bundle.js'
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
